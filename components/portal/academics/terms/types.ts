export type TermWithSession = {
  id: string;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  isCurrent: boolean;

  session: {
    id: string;
    name: string;
  };
};
