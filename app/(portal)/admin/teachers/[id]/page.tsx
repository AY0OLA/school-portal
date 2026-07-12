import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { getTeacherById } from "@/lib/services/teacher.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TeacherDetailsPage({ params }: Props) {
  const { id } = await params;

  const teacher = await getTeacherById(id);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teacher Profile</h1>

          <p className="text-gray-500">View teacher information.</p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/admin/teachers"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href={`/admin/teachers/${teacher.id}/edit`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white"
          >
            <Pencil size={18} />
            Edit
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <img
              src={teacher.passport || "/images/avatar.png"}
              alt={teacher.firstName}
              className="h-40 w-40 rounded-full object-cover border"
            />

            <h2 className="mt-4 text-2xl font-bold">
              {teacher.firstName} {teacher.lastName}
            </h2>

            <p className="text-gray-500">{teacher.employeeId}</p>

            <span className="mt-4 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              {teacher.status.replace("_", " ")}
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Department</p>

              <p className="font-medium">{teacher.department?.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Qualification</p>

              <p className="font-medium">{teacher.qualification ?? "-"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Specialization</p>

              <p className="font-medium">{teacher.specialization ?? "-"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Employment Date</p>

              <p className="font-medium">
                {teacher.employmentDate
                  ? teacher.employmentDate.toLocaleDateString()
                  : "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}

        <div className="space-y-6 lg:col-span-2">
          {/* Personal Information */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">First Name</p>
                <p className="font-medium">{teacher.firstName}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Middle Name</p>
                <p className="font-medium">{teacher.middleName || "-"}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="font-medium">{teacher.lastName}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium">{teacher.gender}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">
                  {teacher.dob ? teacher.dob.toLocaleDateString() : "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  {teacher.status.replace("_", " ")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">Email Address</p>

                <p className="font-medium">{teacher.email || "-"}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone Number</p>

                <p className="font-medium">{teacher.phone || "-"}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Residential Address</p>

                <p className="font-medium">{teacher.address || "-"}</p>
              </div>
            </div>
          </div>

          {/* Academic Assignment */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Academic Assignment</h2>

            <div className="mb-8">
              <h3 className="mb-3 font-semibold">Assigned Subjects</h3>

              <div className="flex flex-wrap gap-2">
                {teacher.teacherSubjects.length > 0 ? (
                  teacher.teacherSubjects.map((item) => (
                    <span
                      key={item.id}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                    >
                      {item.subject.name}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">No subjects assigned.</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Assigned Classes</h3>

              <div className="flex flex-wrap gap-2">
                {teacher.classTeacherOf.length > 0 ? (
                  teacher.classTeacherOf.map((cls) => (
                    <span
                      key={cls.id}
                      className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                    >
                      {cls.name} {cls.arm}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">No classes assigned.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
