"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  teacherSubjectSchema,
  TeacherSubjectInput,
} from "@/lib/validations/teacher-subject";

import { assignSubject } from "@/lib/actions/assign-subject";

import {
  FormActions,
  FormField,
  FormSection,
  FormSelect,
} from "@/components/ui/form";

type TeacherOption = {
  id: string;
  firstName: string;
  lastName: string;
};

type SubjectOption = {
  id: string;
  name: string;
  code: string;
};

type Props = {
  teachers: TeacherOption[];
  subjects: SubjectOption[];
};

export default function TeacherSubjectForm({ teachers, subjects }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<TeacherSubjectInput>({
    resolver: zodResolver(teacherSubjectSchema),

    defaultValues: {
      teacherId: "",
      subjectId: "",
    },
  });

  function onSubmit(values: TeacherSubjectInput) {
    startTransition(async () => {
      try {
        await assignSubject(values);

        form.reset();

        router.refresh();
      } catch (error) {
        alert(
          error instanceof Error ? error.message : "Unable to assign subject.",
        );
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Assign Subject"
        description="Assign a subject to a teacher."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Teacher"
            required
            error={form.formState.errors.teacherId?.message}
          >
            <FormSelect
              placeholder="Select Teacher"
              options={teachers.map((teacher) => ({
                label: `${teacher.firstName} ${teacher.lastName}`,
                value: teacher.id,
              }))}
              {...form.register("teacherId")}
            />
          </FormField>

          <FormField
            label="Subject"
            required
            error={form.formState.errors.subjectId?.message}
          >
            <FormSelect
              placeholder="Select Subject"
              options={subjects.map((subject) => ({
                label: `${subject.name} (${subject.code})`,
                value: subject.id,
              }))}
              {...form.register("subjectId")}
            />
          </FormField>
        </div>
      </FormSection>

      <FormActions>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-primary px-6 py-3 text-white disabled:opacity-50"
        >
          {isPending ? "Assigning..." : "Assign Subject"}
        </button>
      </FormActions>
    </form>
  );
}
