import { notFound } from "next/navigation";

import { PageContainer } from "@/components/ui";

import { TermForm } from "@/components/portal/academics/terms";

import { getSessionOptions, getTermById } from "@/lib/services/term.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTermPage({ params }: Props) {
  const { id } = await params;

  const [term, sessions] = await Promise.all([
    getTermById(id),
    getSessionOptions(),
  ]);

  if (!term) {
    notFound();
  }

  return (
    <PageContainer>
      <TermForm
        mode="edit"
        sessions={sessions}
        initialData={{
          id: term.id,
          name: term.name,
          sessionId: term.sessionId,
          startDate: term.startDate,
          endDate: term.endDate,
          isCurrent: term.isCurrent,
        }}
      />
    </PageContainer>
  );
}
