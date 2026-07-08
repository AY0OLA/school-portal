import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({
    where: {
      email: "admin@greenfieldacademy.com",
    },
  });

  if (existing) {
    console.log("✅ Super Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@12345", 12);

  await prisma.user.create({
    data: {
      name: "Super Administrator",
      email: "admin@greenfieldacademy.com",
      password: hashedPassword,
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
  });

  console.log("Super Admin created successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });