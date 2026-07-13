import { PageContainer } from "@/components/ui";

import {
  SubjectTable,
  SubjectToolbar,
} from "@/components/portal/academics/subjects";

import { getSubjects } from "@/lib/services/subject.service";

export default async function SubjectsPage() {
  const subjects = await getSubjects();

  return (
    <PageContainer>
      <SubjectToolbar />

      <SubjectTable subjects={subjects} />
    </PageContainer>
  );
}
