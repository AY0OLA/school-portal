export type EnrollmentRecord = {
  id: string;

  createdAt: Date;

  student: {
    id: string;
    firstName: string;
    lastName: string;
    admissionNumber: string;
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
