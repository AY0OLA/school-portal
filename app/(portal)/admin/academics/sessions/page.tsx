import {
  SessionTable,
  SessionToolbar,
} from "@/components/portal/academics/sessions";

import { getAcademicSessions } from "@/lib/services/academic-session.service";

type Props = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function AcademicSessionsPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const data = await getAcademicSessions({
    search: params.search,
    page,
  });

  return (
    <main className="space-y-8">
      <SessionToolbar search={params.search} />

      <SessionTable sessions={data.sessions} />

      {/* Pagination comes here */}
    </main>
  );
}
