import { PageContainer } from "@/components/ui";

import { DepartmentForm } from "@/components/portal/academics/departments";

import { getTeacherOptions } from "@/lib/services/department.service";

export default async function NewDepartmentPage() {
  const teachers = await getTeacherOptions();

  return (
    <PageContainer>
      <DepartmentForm mode="create" teachers={teachers} />
    </PageContainer>
  );
}
