export type AttendanceReport = {
  id: string;

  date: Date;

  status: "PRESENT" | "ABSENT" | "LATE" | "EXCUSED";

  remarks?: string | null;

  student: {
    admissionNumber: string;
    firstName: string;
    lastName: string;
  };

  class: {
    name: string;
    arm: string;
  };

  session: {
    name: string;
  };
};
