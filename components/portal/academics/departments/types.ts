export type DepartmentWithTeachers = {
  id: string;
  name: string;
  description: string | null;
  hodId: string | null;

  teachers: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
};
