"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  classSubjectSchema,
  ClassSubjectInput,
} from "@/lib/validations/class-subject";

import { assignClassSubject } from "@/lib/actions/assign-class-subject";

import {
  FormActions,
  FormField,
  FormSection,
  FormSelect,
} from "@/components/ui/form";

type ClassOption = {
  id: string;
  name: string;
  arm: string;
};

type SubjectOption = {
  id: string;
  name: string;
  code: string;
};

type Props = {
  classes: ClassOption[];
  subjects: SubjectOption[];
};

export default function ClassSubjectForm({ classes, subjects }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<ClassSubjectInput>({
    resolver: zodResolver(classSubjectSchema),

    defaultValues: {
      classId: "",
      subjectId: "",
    },
  });

  function onSubmit(values: ClassSubjectInput) {
    startTransition(async () => {
      try {
        await assignClassSubject(values);

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
        description="Assign a subject to a class."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Class"
            required
            error={form.formState.errors.classId?.message}
          >
            <FormSelect
              placeholder="Select Class"
              options={classes.map((item) => ({
                label: `${item.name} ${item.arm}`,
                value: item.id,
              }))}
              {...form.register("classId")}
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
