"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AttendanceStatus } from "@prisma/client";

export type AttendanceItem = {
  studentId: string;
  status: AttendanceStatus;
  remarks?: string;
};

type SaveAttendanceInput = {
  classId: string;
  sessionId: string;
  date: Date;
  records: AttendanceItem[];
};

export async function saveAttendance({
  classId,
  sessionId,
  date,
  records,
}: SaveAttendanceInput) {
  await prisma.$transaction(async (tx) => {
    for (const record of records) {
      await tx.attendance.upsert({
        where: {
          studentId_date: {
            studentId: record.studentId,
            date,
          },
        },
        update: {
          status: record.status,
          remarks: record.remarks,
          classId,
          sessionId,
        },
        create: {
          studentId: record.studentId,
          classId,
          sessionId,
          date,
          status: record.status,
          remarks: record.remarks,
        },
      });
    }
  });

  revalidatePath("/admin/attendance");
}
