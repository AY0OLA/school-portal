import { PageContainer } from "@/components/ui";

import { SubjectForm } from "@/components/portal/academics/subjects";

export default function NewSubjectPage() {
  return (
    <PageContainer>
      <SubjectForm mode="create" />
    </PageContainer>
  );
}
