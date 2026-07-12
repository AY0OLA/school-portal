import { notFound } from "next/navigation";

import TeacherForm from "@/components/portal/teachers/TeacherForm";

import { getTeacherById } from "@/lib/services/teacher.service";
import { getDepartments } from "@/lib/services/department.service";
import { getSubjects } from "@/lib/services/subject.service";
import { getClasses } from "@/lib/services/class.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTeacherPage({ params }: Props) {
  const { id } = await params;

  const [teacher, departments, subjects, classes] = await Promise.all([
    getTeacherById(id),
    getDepartments(),
    getSubjects(),
    getClasses(),
  ]);

  if (!teacher) {
    notFound();
  }

  const initialData = {
    id: teacher.id,

    // Employment
    employeeId: teacher.employeeId,
    employmentDate: teacher.employmentDate
      ? teacher.employmentDate.toISOString().split("T")[0]
      : "",

    // Personal
    firstName: teacher.firstName,
    middleName: teacher.middleName ?? "",
    lastName: teacher.lastName,

    gender: teacher.gender,

    dob: teacher.dob ? teacher.dob.toISOString().split("T")[0] : "",

    // Contact
    email: teacher.email ?? "",
    phone: teacher.phone ?? "",
    address: teacher.address ?? "",

    // Professional
    qualification: teacher.qualification ?? "",
    specialization: teacher.specialization ?? "",

    departmentId: teacher.departmentId ?? "",

    passport: teacher.passport ?? "",

    status: teacher.status,

    assignedSubjects: teacher.teacherSubjects.map((item) => item.subjectId),

    assignedClasses: teacher.classTeacherOf.map((item) => item.id),
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Teacher</h1>

      <TeacherForm
        mode="edit"
        initialData={initialData}
        departments={departments}
        subjects={subjects}
        classes={classes}
      />
    </div>
  );
}
