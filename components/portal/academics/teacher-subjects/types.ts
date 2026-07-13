export type TeacherSubjectAssignment = {
  id: string;

  teacher: {
    id: string;
    firstName: string;
    lastName: string;
  };

  subject: {
    id: string;
    name: string;
    code: string;
  };
};
