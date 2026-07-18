import { PageContainer } from "@/components/ui";
import ExamTable from "@/components/portal/examinations/ExamTable";
import ExamToolbar from "@/components/portal/examinations/ExamToolbar";

import { getExams } from "@/lib/services/exam.service";

export default async function ExaminationsPage() {
  const exams = await getExams();

  return (
    <PageContainer>
      <ExamToolbar />

      <ExamTable exams={exams} />
    </PageContainer>
  );
}
