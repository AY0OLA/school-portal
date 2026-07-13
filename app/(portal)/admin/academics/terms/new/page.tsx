import { PageContainer } from "@/components/ui";

import { TermForm } from "@/components/portal/academics/terms";

import { getSessionOptions } from "@/lib/services/term.service";

export default async function NewTermPage() {
  const sessions = await getSessionOptions();

  return (
    <PageContainer>
      <TermForm mode="create" sessions={sessions} />
    </PageContainer>
  );
}
