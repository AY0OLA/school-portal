import { notFound } from "next/navigation";

import { PageContainer } from "@/components/ui";

import { ClassForm } from "@/components/portal/academics/classes";

import {
  getClassById,
  getClassTeacherOptions,
} from "@/lib/services/class.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditClassPage({ params }: Props) {
  const { id } = await params;

  const [classItem, teachers] = await Promise.all([
    getClassById(id),
    getClassTeacherOptions(),
  ]);

  if (!classItem) {
    notFound();
  }

  return (
    <PageContainer>
      <ClassForm
        mode="edit"
        teachers={teachers}
        initialData={{
          id: classItem.id,
          name: classItem.name,
          arm: classItem.arm,
          capacity: classItem.capacity,
          room: classItem.room,
          description: classItem.description,
          classTeacherId: classItem.classTeacherId,
        }}
      />
    </PageContainer>
  );
}
