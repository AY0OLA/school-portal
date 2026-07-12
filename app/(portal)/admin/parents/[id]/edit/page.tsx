import { notFound } from "next/navigation";

import ParentForm from "@/components/portal/parents/ParentForm";

import {
  getParentById,
  getUnassignedStudents,
} from "@/lib/services/parent.service";

export default async function EditParentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const parent = await getParentById(id);

  if (!parent) {
    notFound();
  }

  const unassignedStudents = await getUnassignedStudents();

  const students = [
    ...parent.students.map((student) => ({
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      admissionNumber: student.admissionNumber,
    })),
    ...unassignedStudents.filter(
      (student) => !parent.students.some((s) => s.id === student.id),
    ),
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold">Edit Parent</h1>

        <p className="text-gray-500">Update parent information.</p>
      </div>

      <ParentForm
        mode="edit"
        students={students}
        initialData={{
          id: parent.id,

          firstName: parent.firstName,
          middleName: parent.middleName ?? "",
          lastName: parent.lastName,

          gender: parent.gender ?? undefined,

          relationship: parent.relationship ?? "",

          dob: parent.dob ? parent.dob.toISOString().split("T")[0] : "",

          phone: parent.phone,
          alternatePhone: parent.alternatePhone ?? "",

          email: parent.email ?? "",

          address: parent.address ?? "",

          state: parent.state ?? "",

          nationality: parent.nationality ?? "",

          occupation: parent.occupation ?? "",

          employer: parent.employer ?? "",

          passport: parent.passport ?? "",

          students: parent.students.map((student) => student.id),
        }}
      />
    </div>
  );
}
