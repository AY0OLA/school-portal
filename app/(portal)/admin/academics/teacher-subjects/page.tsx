import { PageContainer } from "@/components/ui";

import {
  TeacherSubjectForm,
  TeacherSubjectTable,
  TeacherSubjectToolbar,
} from "@/components/portal/academics/teacher-subjects";

import {
  getTeacherOptions,
  getSubjectOptions,
  getTeacherSubjectAssignments,
} from "@/lib/services/teacher-subject.service";

export default async function TeacherSubjectPage() {
  const [teachers, subjects, assignments] = await Promise.all([
    getTeacherOptions(),
    getSubjectOptions(),
    getTeacherSubjectAssignments(),
  ]);

  return (
    <PageContainer className="space-y-8">
      <TeacherSubjectToolbar />

      <TeacherSubjectForm teachers={teachers} subjects={subjects} />

      <TeacherSubjectTable assignments={assignments} />
    </PageContainer>
  );
}
