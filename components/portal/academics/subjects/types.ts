export type SubjectWithRelations = {
  id: string;
  name: string;
  code: string;
  description: string | null;

  teacherSubjects: {
    teacher: {
      id: string;
      firstName: string;
      lastName: string;
    };
  }[];

  classSubjects: {
    class: {
      id: string;
      name: string;
      arm: string;
    };
  }[];
};
