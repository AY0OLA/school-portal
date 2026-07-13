import { PageContainer } from "@/components/ui";

import { ClassForm } from "@/components/portal/academics/classes";

import { getClassTeacherOptions } from "@/lib/services/class.service";

export default async function NewClassPage() {
  const teachers = await getClassTeacherOptions();

  return (
    <PageContainer>
      <ClassForm mode="create" teachers={teachers} />
    </PageContainer>
  );
}
