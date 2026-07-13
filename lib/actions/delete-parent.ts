"use server";

import { prisma } from "@/lib/prisma";

export async function deleteParent(id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // Unlink all students from this parent
      await tx.student.updateMany({
        where: {
          parentId: id,
        },
        data: {
          parentId: null,
        },
      });

      // Delete the parent
      await tx.parent.delete({
        where: {
          id,
        },
      });
    });

    return {
      success: true,
      message: "Parent deleted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to delete parent.",
    };
  }
}