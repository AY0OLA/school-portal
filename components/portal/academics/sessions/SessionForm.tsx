"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  academicSessionSchema,
  AcademicSessionFormValues,
} from "@/lib/validations/academic-session";

import { createAcademicSession } from "@/lib/actions/create-academic-session";
import { updateAcademicSession } from "@/lib/actions/update-academic-session";

import {
  FormActions,
  FormCheckbox,
  FormDateInput,
  FormField,
  FormInput,
  FormSection,
} from "@/components/ui/form";

type SessionFormProps = {
  mode: "create" | "edit";
  initialData?: {
    id: string;
    name: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
  };
};

export default function SessionForm({ mode, initialData }: SessionFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<AcademicSessionFormValues>({
    resolver: zodResolver(academicSessionSchema),

    defaultValues: {
      name: initialData?.name ?? "",
      startDate: initialData?.startDate ?? undefined,
      endDate: initialData?.endDate ?? undefined,
      isCurrent: initialData?.isCurrent ?? false,
    },
  });

  function onSubmit(values: AcademicSessionFormValues) {
    startTransition(async () => {
      const parsed = academicSessionSchema.parse(values);

      if (mode === "create") {
        await createAcademicSession(parsed);
      } else {
        await updateAcademicSession(initialData!.id, parsed);
      }

      router.push("/admin/academics/sessions");

      router.refresh();
    });
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Academic Session"
        description="Create or update an academic session."
      >
        <FormField
          label="Session Name"
          required
          error={form.formState.errors.name?.message}
        >
          <FormInput placeholder="2025/2026" {...form.register("name")} />
        </FormField>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Start Date"
            error={form.formState.errors.startDate?.message}
          >
            <FormDateInput
              {...form.register("startDate", {
                valueAsDate: true,
              })}
            />
          </FormField>

          <FormField
            label="End Date"
            error={form.formState.errors.endDate?.message}
          >
            <FormDateInput
              {...form.register("endDate", {
                valueAsDate: true,
              })}
            />
          </FormField>
        </div>

        <div className="flex items-center gap-3">
          <FormCheckbox {...form.register("isCurrent")} />

          <span className="text-sm">
            Make this the current academic session
          </span>
        </div>
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
              ? "Create Session"
              : "Update Session"}
        </button>
      </FormActions>
    </form>
  );
}
