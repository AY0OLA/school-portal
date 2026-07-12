"use server";

import { prisma } from "@/lib/prisma";
import { teacherSchema, TeacherFormData } from "@/lib/validations";

export async function updateTeacher(id: string, data: TeacherFormData) {
  try {
    const validated = teacherSchema.parse(data);

    await prisma.$transaction(async (tx) => {
      // Update teacher information
      await tx.teacher.update({
        where: {
          id,
        },
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

      // Remove old subject assignments
      await tx.teacherSubject.deleteMany({
        where: {
          teacherId: id,
        },
      });

      // Add new subject assignments
      if (validated.assignedSubjects?.length) {
        await tx.teacherSubject.createMany({
          data: validated.assignedSubjects.map((subjectId) => ({
            teacherId: id,
            subjectId,
          })),
        });
      }

      // Remove teacher from previously assigned classes
      await tx.class.updateMany({
        where: {
          classTeacherId: id,
        },
        data: {
          classTeacherId: null,
        },
      });

      // Assign selected classes
      if (validated.assignedClasses?.length) {
        await tx.class.updateMany({
          where: {
            id: {
              in: validated.assignedClasses,
            },
          },
          data: {
            classTeacherId: id,
          },
        });
      }
    });

    return {
      success: true,
      message: "Teacher updated successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to update teacher.",
    };
  }
}
