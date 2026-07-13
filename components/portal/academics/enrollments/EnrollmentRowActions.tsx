"use client";

import { Trash2 } from "lucide-react";

import { removeEnrollment } from "@/lib/actions/remove-enrollment";

type Props = {
  id: string;
};

export default function EnrollmentRowActions({ id }: Props) {
  async function handleDelete() {
    const confirmed = window.confirm("Remove this enrollment?");

    if (!confirmed) return;

    await removeEnrollment(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
    >
      <Trash2 size={18} />
    </button>
  );
}
