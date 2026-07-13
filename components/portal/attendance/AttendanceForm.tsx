"use client";

import { useTransition, useState } from "react";
import { AttendanceStatus } from "@prisma/client";
import { saveAttendance } from "@/lib/actions/save-attendance";
import { loadAttendance } from "@/lib/actions/load-attendance";
import { useRouter } from "next/navigation";
import { loadEnrolledStudents } from "@/lib/actions/load-enrolled-students";
import AttendanceRow from "./AttendanceRow";
import { toast } from "sonner";

type ClassOption = {
  id: string;
  name: string;
  arm: string;
};

type SessionOption = {
  id: string;
  name: string;
};

type Props = {
  classes: ClassOption[];
  sessions: SessionOption[];
};

export default function AttendanceForm({ classes, sessions }: Props) {
  const [sessionId, setSessionId] = useState("");

  const [classId, setClassId] = useState("");
  const [students, setStudents] = useState<any[]>([]);

  const [loading, startTransition] = useTransition();

  const [attendance, setAttendance] = useState<
    Record<string, AttendanceStatus>
  >({});
  const router = useRouter();

  async function handleSaveAttendance() {
    if (!classId || !sessionId || students.length === 0) {
      return;
    }

    startTransition(async () => {
      try {
        await saveAttendance({
          classId,
          sessionId,
          date: new Date(),
          records: students.map((item) => ({
            studentId: item.student.id,
            status: attendance[item.student.id],
            remarks: "",
          })),
        });

        toast.success("Attendance saved successfully.");

        router.refresh();
      } catch (error) {
        console.error(error);
        toast.success("Failed to save attendance.");
      }
    });
  }

  function handleLoadStudents() {
    if (!classId || !sessionId) return;

    startTransition(async () => {
      const date = new Date(attendanceDate);
      date.setHours(0, 0, 0, 0);

      const enrolled = await loadEnrolledStudents(classId, sessionId);

      const existing = await loadAttendance(classId, sessionId, date);

      const defaults: Record<string, AttendanceStatus> = {};

      if (existing.length > 0) {
        existing.forEach((record) => {
          defaults[record.student.id] = record.status;
        });

        setStudents(existing);
      } else {
        enrolled.forEach((item) => {
          defaults[item.student.id] = "PRESENT";
        });

        setStudents(enrolled);
      }

      setAttendance(defaults);
    });
  }
  const [attendanceDate, setAttendanceDate] = useState(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today.toISOString().split("T")[0];
  });
  return (
    <div className="rounded-xl border bg-white p-6 space-y-6">
      <h2 className="text-lg font-semibold">Take Attendance</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Academic Session</label>

          <select
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Session</option>

            {sessions.map((session) => (
              <option key={session.id} value={session.id}>
                {session.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Class</label>

          <select
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Class</option>

            {classes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} {item.arm}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block font-medium">Attendance Date</label>

          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleLoadStudents}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load Students"}
      </button>

      {students.length > 0 && (
        <div className="mt-8 rounded-xl border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-3 text-left">Admission No.</th>

                <th className="px-4 py-3 text-left">Student</th>

                <th className="px-4 py-3 text-left">Attendance</th>
              </tr>
            </thead>

            <tbody>
              {students.map((item) => (
                <AttendanceRow
                  key={item.student.id}
                  admissionNumber={item.student.admissionNumber}
                  studentName={`${item.student.firstName} ${item.student.lastName}`}
                  value={attendance[item.student.id] ?? "PRESENT"}
                  onChange={(status) =>
                    setAttendance((prev) => ({
                      ...prev,
                      [item.student.id]: status,
                    }))
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      {students.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSaveAttendance}
            disabled={loading}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Attendance"}
          </button>
        </div>
      )}
    </div>
  );
}
