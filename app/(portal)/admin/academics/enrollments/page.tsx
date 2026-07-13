import { PageContainer } from "@/components/ui";

import {
  EnrollmentForm,
  EnrollmentTable,
  EnrollmentToolbar,
} from "@/components/portal/academics/enrollments";

import {
  getEnrollments,
  getStudentOptions,
  getClassOptions,
  getSessionOptions,
} from "@/lib/services/enrollment.service";

export default async function EnrollmentPage() {
  const [enrollments, students, classes, sessions] = await Promise.all([
    getEnrollments(),
    getStudentOptions(),
    getClassOptions(),
    getSessionOptions(),
  ]);

  return (
    <PageContainer>
      <EnrollmentToolbar />

      <EnrollmentForm
        students={students}
        classes={classes}
        sessions={sessions}
      />

      <EnrollmentTable enrollments={enrollments} />
    </PageContainer>
  );
}
