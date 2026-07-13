import { PageContainer } from "@/components/ui";

import {
  DepartmentTable,
  DepartmentToolbar,
} from "@/components/portal/academics/departments";

import { getDepartments } from "@/lib/services/department.service";

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <PageContainer>
      <DepartmentToolbar />

      <DepartmentTable departments={departments} />
    </PageContainer>
  );
}
