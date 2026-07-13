"use server";

import { getEnrolledStudents } from "@/lib/services/attendance.service";

export async function loadEnrolledStudents(classId: string, sessionId: string) {
  if (!classId || !sessionId) {
    return [];
  }

  return getEnrolledStudents(classId, sessionId);
}
