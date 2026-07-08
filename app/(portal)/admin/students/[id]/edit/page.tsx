import { notFound } from "next/navigation";

import StudentForm from "@/components/portal/students/StudentForm";
import { getStudentById } from "@/lib/services/student.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditStudentPage({ params }: Props) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

 const initialData = {
   id: student.id,

   admissionNumber: student.admissionNumber,

   admissionDate: "",

   class: "",

   arm: "",

   session: "",

   firstName: student.firstName,

   middleName: student.middleName ?? "",

   lastName: student.lastName,

   gender: student.gender,

   dob: student.dob.toISOString().split("T")[0],

   state: student.state ?? "",

   nationality: student.nationality ?? "",

   religion: student.religion ?? "",

   address: student.address ?? "",

   fatherName: "",

   motherName: "",

   guardianName: "",

   phone: student.phone ?? "",

   email: student.email ?? "",

   occupation: "",

   guardianAddress: "",

   bloodGroup: student.bloodGroup ?? "",

   genotype: student.genotype ?? "",

   allergies: student.allergies ?? "",

   medicalCondition: student.medicalCondition ?? "",

   emergencyContact: student.emergencyContact ?? "",

   medicalNotes: "",

   status: student.status,
 };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Student</h1>

      <StudentForm mode="edit" initialData={initialData} />
    </div>
  );
}
