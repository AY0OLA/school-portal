"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { classSchema, ClassInput } from "@/lib/validations/class";

import { createClass } from "@/lib/actions/create-class";
import { updateClass } from "@/lib/actions/update-class";

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
    arm: string;
    capacity: number | null;
    room: string | null;
    description: string | null;
    classTeacherId: string | null;
  };
};

export default function ClassForm({ mode, teachers, initialData }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<ClassInput>({
    resolver: zodResolver(classSchema),

    defaultValues: {
      name: initialData?.name ?? "",
      arm: initialData?.arm ?? "",
      capacity: initialData?.capacity ?? undefined,
      room: initialData?.room ?? "",
      description: initialData?.description ?? "",
      classTeacherId: initialData?.classTeacherId ?? "",
    },
  });

  function onSubmit(values: ClassInput) {
    startTransition(async () => {
      if (mode === "create") {
        await createClass(values);
      } else {
        await updateClass(initialData!.id, values);
      }

      router.push("/admin/academics/classes");

      router.refresh();
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Class Information"
        description="Create or update a school class."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Class Name"
            required
            error={form.formState.errors.name?.message}
          >
            <FormInput placeholder="JSS 1" {...form.register("name")} />
          </FormField>

          <FormField
            label="Arm"
            required
            error={form.formState.errors.arm?.message}
          >
            <FormInput placeholder="A" {...form.register("arm")} />
          </FormField>

          <FormField
            label="Capacity"
            error={form.formState.errors.capacity?.message}
          >
            <FormInput
              type="number"
              placeholder="40"
              {...form.register("capacity", {
                valueAsNumber: true,
              })}
            />
          </FormField>

          <FormField label="Room" error={form.formState.errors.room?.message}>
            <FormInput
              placeholder="Block A - Room 2"
              {...form.register("room")}
            />
          </FormField>

          <FormField
            label="Class Teacher"
            error={form.formState.errors.classTeacherId?.message}
          >
            <FormSelect
              placeholder="Select Teacher"
              options={teachers.map((teacher) => ({
                label: `${teacher.firstName} ${teacher.lastName}`,
                value: teacher.id,
              }))}
              {...form.register("classTeacherId")}
            />
          </FormField>
        </div>

        <FormField
          label="Description"
          error={form.formState.errors.description?.message}
        >
          <FormTextarea
            rows={5}
            placeholder="Class description..."
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
              ? "Create Class"
              : "Update Class"}
        </button>
      </FormActions>
    </form>
  );
}
