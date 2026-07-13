"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  departmentSchema,
  DepartmentInput,
} from "@/lib/validations/department";

import { createDepartment } from "@/lib/actions/create-department";
import { updateDepartment } from "@/lib/actions/update-department";

import {
  FormActions,
  FormField,
  FormInput,
  FormSection,
  FormSelect,
  FormTextarea,
} from "@/components/ui/form";

type TeacherOption = {
  id: string;
  firstName: string;
  lastName: string;
};

type Props = {
  mode: "create" | "edit";

  teachers: TeacherOption[];

  initialData?: {
    id: string;
    name: string;
    description: string | null;
    hodId: string | null;
  };
};

export default function DepartmentForm({ mode, teachers, initialData }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<DepartmentInput>({
    resolver: zodResolver(departmentSchema),

    defaultValues: {
      name: initialData?.name ?? "",
      description: initialData?.description ?? "",
      hodId: initialData?.hodId ?? "",
    },
  });

  function onSubmit(values: DepartmentInput) {
    startTransition(async () => {
      if (mode === "create") {
        await createDepartment(values);
      } else {
        await updateDepartment(initialData!.id, values);
      }

      router.push("/admin/academics/departments");

      router.refresh();
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Department Information"
        description="Create or update a school department."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Department Name"
            required
            error={form.formState.errors.name?.message}
          >
            <FormInput placeholder="Science" {...form.register("name")} />
          </FormField>

          <FormField
            label="Head of Department"
            error={form.formState.errors.hodId?.message}
          >
            <FormSelect
              placeholder="Select Teacher"
              options={teachers.map((teacher) => ({
                label: `${teacher.firstName} ${teacher.lastName}`,
                value: teacher.id,
              }))}
              {...form.register("hodId")}
            />
          </FormField>
        </div>

        <FormField
          label="Description"
          error={form.formState.errors.description?.message}
        >
          <FormTextarea
            rows={5}
            placeholder="Department description..."
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
              ? "Create Department"
              : "Update Department"}
        </button>
      </FormActions>
    </form>
  );
}
