import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
import { getStudentById } from "@/lib/services/student.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentProfilePage({ params }: Props) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/students"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Students
        </Link>

        <Link
          href={`/admin/students/${student.id}/edit`}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white"
        >
          <Pencil size={16} />
          Edit Student
        </Link>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">
          {student.firstName} {student.lastName}
        </h1>

        <p className="mt-2 text-gray-500">
          Admission No: {student.admissionNumber}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>

          <div className="space-y-2">
            <p>
              <strong>Gender:</strong> {student.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {student.dob.toLocaleDateString()}
            </p>
            <p>
              <strong>Phone:</strong> {student.phone ?? "-"}
            </p>
            <p>
              <strong>Email:</strong> {student.email ?? "-"}
            </p>
            <p>
              <strong>Address:</strong> {student.address ?? "-"}
            </p>
            <p>
              <strong>Nationality:</strong> {student.nationality ?? "-"}
            </p>
            <p>
              <strong>Status:</strong> {student.status}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Medical Information</h2>

          <div className="space-y-2">
            <p>
              <strong>Blood Group:</strong> {student.bloodGroup ?? "-"}
            </p>
            <p>
              <strong>Genotype:</strong> {student.genotype ?? "-"}
            </p>
            <p>
              <strong>Allergies:</strong> {student.allergies ?? "-"}
            </p>
            <p>
              <strong>Medical Condition:</strong>{" "}
              {student.medicalCondition ?? "-"}
            </p>
            <p>
              <strong>Emergency Contact:</strong>{" "}
              {student.emergencyContact ?? "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
