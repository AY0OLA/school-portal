"use server";

import { getAttendanceForClass } from "@/lib/services/attendance.service";

export async function loadAttendance(
  classId: string,
  sessionId: string,
  date: Date,
) {
  return getAttendanceForClass(classId, sessionId, date);
}
