import { notFound } from "next/navigation";

import { SessionForm } from "@/components/portal/academics/sessions";

import { getAcademicSessionById } from "@/lib/services/academic-session.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAcademicSessionPage({ params }: Props) {
  const { id } = await params;

  const session = await getAcademicSessionById(id);

  if (!session) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Academic Session</h1>

        <p className="mt-2 text-slate-500">Update academic session details.</p>
      </div>

      <SessionForm
        mode="edit"
        initialData={{
          id: session.id,
          name: session.name,
          startDate: session.startDate,
          endDate: session.endDate,
          isCurrent: session.isCurrent,
        }}
      />
    </main>
  );
}
