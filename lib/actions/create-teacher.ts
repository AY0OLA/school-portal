"use server";

import { prisma } from "@/lib/prisma";
import { teacherSchema } from "@/lib/validations";

export async function createTeacher(data: unknown) {
  try {
    const validated = teacherSchema.parse(data);

    const teacher = await prisma.teacher.create({
      data: {
        // Employment
        employeeId: validated.employeeId,
        employmentDate: validated.employmentDate
          ? new Date(validated.employmentDate)
          : null,

        // Personal
        firstName: validated.firstName,
        middleName: validated.middleName || null,
        lastName: validated.lastName,
        gender: validated.gender,
        dob: validated.dob ? new Date(validated.dob) : null,

        // Contact
        email: validated.email || null,
        phone: validated.phone || null,
        address: validated.address || null,

        // Professional
        qualification: validated.qualification || null,
        specialization: validated.specialization || null,

        departmentId: validated.departmentId || null,

        // Media
        passport: validated.passport || null,

        // Status
        status: validated.status,
      },
    });

    // Assign Subjects
    if (validated.assignedSubjects?.length) {
      await prisma.teacherSubject.createMany({
        data: validated.assignedSubjects.map((subjectId) => ({
          teacherId: teacher.id,
          subjectId,
        })),
      });
    }

    // Assign Classes
    if (validated.assignedClasses?.length) {
      await prisma.class.updateMany({
        where: {
          id: {
            in: validated.assignedClasses,
          },
        },
        data: {
          classTeacherId: teacher.id,
        },
      });
    }

    return {
      success: true,
      teacher,
      message: "Teacher created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to create teacher.",
    };
  }
}
