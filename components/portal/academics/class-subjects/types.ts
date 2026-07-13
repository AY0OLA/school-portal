export type ClassSubjectAssignment = {
  id: string;

  class: {
    id: string;
    name: string;
    arm: string;
  };

  subject: {
    id: string;
    name: string;
    code: string;
  };
};
