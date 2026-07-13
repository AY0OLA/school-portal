export type ClassWithRelations = {
  id: string;
  name: string;
  arm: string;

  capacity: number | null;

  room: string | null;

  description: string | null;

  classTeacherId: string | null;

  classTeacher: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;

  students: {
    id: string;
  }[];

  classSubjects: {
    id: string;
  }[];
};
