"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  enrollmentSchema,
  EnrollmentInput,
} from "@/lib/validations/enrollment";

import { enrollStudent } from "@/lib/actions/enroll-student";

import {
  FormActions,
  FormField,
  FormSection,
  FormSelect,
} from "@/components/ui/form";

type StudentOption = {
  id: string;
  firstName: string;
  lastName: string;
  admissionNumber: string;
};

type ClassOption = {
  id: string;
  name: string;
  arm: string;
};

type SessionOption = {
  id: string;
  name: string;
};

type Props = {
  students: StudentOption[];
  classes: ClassOption[];
  sessions: SessionOption[];
};

export default function EnrollmentForm({ students, classes, sessions }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<EnrollmentInput>({
    resolver: zodResolver(enrollmentSchema),

    defaultValues: {
      studentId: "",
      classId: "",
      sessionId: "",
    },
  });

  function onSubmit(values: EnrollmentInput) {
    startTransition(async () => {
      try {
        await enrollStudent(values);

        form.reset();

        router.refresh();
      } catch (error) {
        alert(
          error instanceof Error ? error.message : "Unable to enroll student.",
        );
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormSection
        title="Enroll Student"
        description="Assign a student to a class for an academic session."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <FormField
            label="Student"
            required
            error={form.formState.errors.studentId?.message}
          >
            <FormSelect
              placeholder="Select Student"
              options={students.map((student) => ({
                value: student.id,
                label: `${student.admissionNumber} - ${student.firstName} ${student.lastName}`,
              }))}
              {...form.register("studentId")}
            />
          </FormField>

          <FormField
            label="Class"
            required
            error={form.formState.errors.classId?.message}
          >
            <FormSelect
              placeholder="Select Class"
              options={classes.map((item) => ({
                value: item.id,
                label: `${item.name} ${item.arm}`,
              }))}
              {...form.register("classId")}
            />
          </FormField>

          <FormField
            label="Academic Session"
            required
            error={form.formState.errors.sessionId?.message}
          >
            <FormSelect
              placeholder="Select Session"
              options={sessions.map((session) => ({
                value: session.id,
                label: session.name,
              }))}
              {...form.register("sessionId")}
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
          {isPending ? "Enrolling..." : "Enroll Student"}
        </button>
      </FormActions>
    </form>
  );
}
