"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { termSchema, TermFormValues } from "@/lib/validations/term";

import { createTerm } from "@/lib/actions/create-term";
import { updateTerm } from "@/lib/actions/update-term";

import {
  FormActions,
  FormCheckbox,
  FormDateInput,
  FormField,
  FormInput,
  FormSection,
  FormSelect,
} from "@/components/ui/form";

type SessionOption = {
  id: string;
  name: string;
};

type Props = {
  mode: "create" | "edit";

  sessions: SessionOption[];

  initialData?: {
    id: string;
    name: string;
    sessionId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
  };
};

export default function TermForm({ mode, sessions, initialData }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<TermFormValues>({
    resolver: zodResolver(termSchema),

    defaultValues: {
      name: initialData?.name ?? "",

      sessionId: initialData?.sessionId ?? "",

      startDate: initialData?.startDate ?? undefined,

      endDate: initialData?.endDate ?? undefined,

      isCurrent: initialData?.isCurrent ?? false,
    },
  });

 function onSubmit(values: TermFormValues) {
   startTransition(async () => {
     const parsed = termSchema.parse(values);

     if (mode === "create") {
       await createTerm(parsed);
     } else {
       await updateTerm(initialData!.id, parsed);
     }

     router.push("/admin/academics/terms");

     router.refresh();
   });
 }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Academic Term"
        description="Create or update an academic term."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Term Name"
            required
            error={form.formState.errors.name?.message}
          >
            <FormInput placeholder="First Term" {...form.register("name")} />
          </FormField>

          <FormField
            label="Academic Session"
            required
            error={form.formState.errors.sessionId?.message}
          >
            <FormSelect
              options={sessions.map((session) => ({
                label: session.name,
                value: session.id,
              }))}
              placeholder="Select Session"
              {...form.register("sessionId")}
            />
          </FormField>
        </div>

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

          <span className="text-sm text-slate-600">
            Set as current academic term
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
              ? "Create Term"
              : "Update Term"}
        </button>
      </FormActions>
    </form>
  );
}
