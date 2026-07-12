import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { getParentById } from "@/lib/services/parent.service";

export default async function ParentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const parent = await getParentById(id);

  if (!parent) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/parents"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to Parents
        </Link>

        <Link
          href={`/admin/parents/${parent.id}/edit`}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white"
        >
          <Pencil size={18} />
          Edit Parent
        </Link>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">
          {parent.firstName} {parent.lastName}
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Info label="Phone" value={parent.phone} />
          <Info label="Alternate Phone" value={parent.alternatePhone} />
          <Info label="Email" value={parent.email} />
          <Info label="Gender" value={parent.gender} />
          <Info label="Relationship" value={parent.relationship} />
          <Info label="Occupation" value={parent.occupation} />
          <Info label="Employer" value={parent.employer} />
          <Info label="State" value={parent.state} />
          <Info label="Nationality" value={parent.nationality} />
          <Info label="Address" value={parent.address} />
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Children</h2>

        {parent.students.length === 0 ? (
          <p className="text-slate-500">No students linked.</p>
        ) : (
          <div className="space-y-3">
            {parent.students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <div>
                  <h3 className="font-medium">
                    {student.firstName} {student.lastName}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {student.admissionNumber}
                  </p>
                </div>

                <Link
                  href={`/admin/students/${student.id}`}
                  className="text-primary hover:underline"
                >
                  View Student
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>

      <p className="font-medium">{value || "-"}</p>
    </div>
  );
}
