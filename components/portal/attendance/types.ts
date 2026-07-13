import { AttendanceStatus } from "@prisma/client";

export type AttendanceRecord = {
  id: string;
  date: Date;
  status: AttendanceStatus;
  remarks?: string | null;

  student: {
    id: string;
    admissionNumber: string;
    firstName: string;
    lastName: string;
  };

  class: {
    id: string;
    name: string;
    arm: string;
  };

  session: {
    id: string;
    name: string;
  };
};

export type EnrolledStudent = {
  id: string;

  student: {
    id: string;
    admissionNumber: string;
    firstName: string;
    lastName: string;
  };
};
