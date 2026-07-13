import { notFound } from "next/navigation";

import { PageContainer } from "@/components/ui";

import { DepartmentForm } from "@/components/portal/academics/departments";

import {
  getDepartmentById,
  getTeacherOptions,
} from "@/lib/services/department.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditDepartmentPage({ params }: Props) {
  const { id } = await params;

  const [department, teachers] = await Promise.all([
    getDepartmentById(id),
    getTeacherOptions(),
  ]);

  if (!department) {
    notFound();
  }

  return (
    <PageContainer>
      <DepartmentForm
        mode="edit"
        teachers={teachers}
        initialData={{
          id: department.id,
          name: department.name,
          description: department.description,
          hodId: department.hodId,
        }}
      />
    </PageContainer>
  );
}
