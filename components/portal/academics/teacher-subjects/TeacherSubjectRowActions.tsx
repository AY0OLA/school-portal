"use client";

import { Trash2 } from "lucide-react";

import { removeSubject } from "@/lib/actions/remove-subject";

type Props = {
  id: string;
};

export default function TeacherSubjectRowActions({ id }: Props) {
  async function handleDelete() {
    if (!window.confirm("Remove this assignment?")) {
      return;
    }

    await removeSubject(id);
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
