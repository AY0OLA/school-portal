"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { subjectSchema, SubjectInput } from "@/lib/validations/subject";

import { createSubject } from "@/lib/actions/create-subject";
import { updateSubject } from "@/lib/actions/update-subject";

import {
  FormActions,
  FormField,
  FormInput,
  FormSection,
  FormTextarea,
} from "@/components/ui/form";

type Props = {
  mode: "create" | "edit";

  initialData?: {
    id: string;
    name: string;
    code: string;
    description: string | null;
  };
};

export default function SubjectForm({ mode, initialData }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<SubjectInput>({
    resolver: zodResolver(subjectSchema),

    defaultValues: {
      name: initialData?.name ?? "",
      code: initialData?.code ?? "",
      description: initialData?.description ?? "",
    },
  });

  function onSubmit(values: SubjectInput) {
    startTransition(async () => {
      if (mode === "create") {
        await createSubject(values);
      } else {
        await updateSubject(initialData!.id, values);
      }

      router.push("/admin/academics/subjects");

      router.refresh();
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Subject Information"
        description="Create or update a school subject."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Subject Name"
            required
            error={form.formState.errors.name?.message}
          >
            <FormInput placeholder="Mathematics" {...form.register("name")} />
          </FormField>

          <FormField
            label="Subject Code"
            required
            error={form.formState.errors.code?.message}
          >
            <FormInput placeholder="MTH101" {...form.register("code")} />
          </FormField>
        </div>

        <FormField
          label="Description"
          error={form.formState.errors.description?.message}
        >
          <FormTextarea
            rows={5}
            placeholder="Subject description..."
            {...form.register("description")}
          />
        </FormField>
      </FormSection>

      <FormActions>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-slate-300 px-5 py-3"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-primary px-6 py-3 text-white disabled:opacity-50"
        >
          {isPending
            ? "Saving..."
            : mode === "create"
              ? "Create Subject"
              : "Update Subject"}
        </button>
      </FormActions>
    </form>
  );
}
