"use client";

import { AttendanceStatus } from "@prisma/client";

type Props = {
  admissionNumber: string;
  studentName: string;
  value: AttendanceStatus;
  onChange: (status: AttendanceStatus) => void;
};

const options: AttendanceStatus[] = ["PRESENT", "ABSENT", "LATE", "EXCUSED"];

export default function AttendanceRow({
  admissionNumber,
  studentName,
  value,
  onChange,
}: Props) {
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{admissionNumber}</td>

      <td className="px-4 py-3">{studentName}</td>

      <td className="px-4 py-3">
        <div className="flex gap-4">
          {options.map((status) => (
            <label key={status} className="flex items-center gap-2">
              <input
                type="radio"
                checked={value === status}
                onChange={() => onChange(status)}
              />

              {status}
            </label>
          ))}
        </div>
      </td>
    </tr>
  );
}
