import { PageContainer } from "@/components/ui";

import { TermTable, TermToolbar } from "@/components/portal/academics/terms";

import { getTerms } from "@/lib/services/term.service";

export default async function TermsPage() {
  const terms = await getTerms();

  return (
    <PageContainer>
      <TermToolbar />

      <TermTable terms={terms} />
    </PageContainer>
  );
}
