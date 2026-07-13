import { PageContainer } from "@/components/ui";

import {
  ClassSubjectForm,
  ClassSubjectTable,
  ClassSubjectToolbar,
} from "@/components/portal/academics/class-subjects";

import {
  getClassOptions,
  getSubjectOptions,
  getClassSubjectAssignments,
} from "@/lib/services/class-subject.service";

export default async function ClassSubjectPage() {
  const [classes, subjects, assignments] = await Promise.all([
    getClassOptions(),
    getSubjectOptions(),
    getClassSubjectAssignments(),
  ]);

  return (
    <PageContainer className="space-y-8">
      <ClassSubjectToolbar />

      <ClassSubjectForm classes={classes} subjects={subjects} />

      <ClassSubjectTable assignments={assignments} />
    </PageContainer>
  );
}
