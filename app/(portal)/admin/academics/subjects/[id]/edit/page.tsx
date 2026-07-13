import { notFound } from "next/navigation";

import { PageContainer } from "@/components/ui";

import { SubjectForm } from "@/components/portal/academics/subjects";

import { getSubjectById } from "@/lib/services/subject.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSubjectPage({ params }: Props) {
  const { id } = await params;

  const subject = await getSubjectById(id);

  if (!subject) {
    notFound();
  }

  return (
    <PageContainer>
      <SubjectForm
        mode="edit"
        initialData={{
          id: subject.id,
          name: subject.name,
          code: subject.code,
          description: subject.description,
        }}
      />
    </PageContainer>
  );
}
