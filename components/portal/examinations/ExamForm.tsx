"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import FormInput from "@/components/ui/form/FormInput";
import FormSelect from "@/components/ui/form/FormSelect";
import FormCheckbox from "@/components/ui/form/FormCheckbox";
import FormDateInput from "@/components/ui/form/FormDateInput";
import FormTextarea from "@/components/ui/form/FormTextarea";

import { examSchema, type ExamInput } from "@/lib/validations/exam.schema";

import { createExamAction } from "@/lib/actions/create-exam";
import { updateExamAction } from "@/lib/actions/update-exam";

type SessionOption = {
  id: string;
  name: string;
};

type TermOption = {
  id: string;
  name: string;
};

type Props = {
  mode: "create" | "edit";

  sessions: SessionOption[];

  terms: TermOption[];

  initialData?: Partial<ExamInput> & {
    id?: string;
  };
};

export default function ExamForm({
  mode,
  sessions,
  terms,
  initialData,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<ExamInput>({
    resolver: zodResolver(examSchema),

    defaultValues: {
      name: initialData?.name ?? "",

      sessionId: initialData?.sessionId ?? "",

      termId: initialData?.termId ?? "",

      totalMark: initialData?.totalMark ?? 100,

      description: initialData?.description ?? "",

      isPublished: initialData?.isPublished ?? false,

      startDate: initialData?.startDate,

      endDate: initialData?.endDate,
    },
  });

  function onSubmit(values: ExamInput) {
    startTransition(async () => {
      try {
        if (mode === "create") {
          await createExamAction(values);
          toast.success("Exam created successfully.");
        } else {
          await updateExamAction(initialData!.id!, values);
          toast.success("Exam updated successfully.");
        }

        router.push("/admin/examinations");
        router.refresh();
      } catch {
        toast.error("Something went wrong.");
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl bg-white p-6 shadow"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Exam Name</label>

          <FormInput
            {...form.register("name")}
            placeholder="First Term Examination"
          />

          <p className="mt-1 text-xs text-red-500">
            {form.formState.errors.name?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Total Mark</label>

          <FormInput
            type="number"
            {...form.register("totalMark", {
              valueAsNumber: true,
            })}
          />

          <p className="mt-1 text-xs text-red-500">
            {form.formState.errors.totalMark?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Academic Session
          </label>

          <FormSelect
            {...form.register("sessionId")}
            options={sessions.map((session) => ({
              label: session.name,
              value: session.id,
            }))}
            placeholder="Select Session"
          />

          <p className="mt-1 text-xs text-red-500">
            {form.formState.errors.sessionId?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Term</label>

          <FormSelect
            {...form.register("termId")}
            options={terms.map((term) => ({
              label: term.name,
              value: term.id,
            }))}
            placeholder="Select Term"
          />

          <p className="mt-1 text-xs text-red-500">
            {form.formState.errors.termId?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Start Date</label>

          <FormDateInput
            {...form.register("startDate", {
              valueAsDate: true,
            })}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">End Date</label>

          <FormDateInput
            {...form.register("endDate", {
              valueAsDate: true,
            })}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Description</label>

        <FormTextarea
          rows={4}
          {...form.register("description")}
          placeholder="Optional examination description"
        />
      </div>

      <div className="flex items-center gap-3">
        <FormCheckbox {...form.register("isPublished")} />

        <span className="text-sm">Publish immediately after creation</span>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending
            ? "Saving..."
            : mode === "create"
              ? "Create Exam"
              : "Update Exam"}
        </button>
      </div>
    </form>
  );
}
