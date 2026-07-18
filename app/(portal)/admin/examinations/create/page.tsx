import PageContainer from "@/components/layout/PageContainer";
import ExamForm from "@/components/portal/examinations/ExamForm";

import { prisma } from "@/lib/prisma";

export default async function CreateExamPage() {
  const sessions = await prisma.academicSession.findMany({
    orderBy: {
      name: "desc",
    },
  });

  const terms = await prisma.term.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Create Examination</h1>

        <p className="mt-2 text-sm text-slate-500">
          Create a new examination for an academic session and term.
        </p>
      </div>

      <ExamForm
        mode="create"
        sessions={sessions.map((session) => ({
          id: session.id,
          name: session.name,
        }))}
        terms={terms.map((term) => ({
          id: term.id,
          name: term.name,
        }))}
      />
    </PageContainer>
  );
}
