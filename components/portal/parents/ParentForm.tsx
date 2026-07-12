"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormSection from "../teachers/FormSection";

import {
  Input,
  Select,
  Textarea,
  Button,
  FileUpload,
  MultiSelect,
} from "@/components/ui/form";

import { parentSchema, ParentFormData } from "@/lib/validations";

import { createParent } from "@/lib/actions/create-parent";

import { updateParent } from "@/lib/actions/update-parent";

type ParentFormProps = {
  mode?: "create" | "edit";

  initialData?:
    | (Partial<ParentFormData> & {
        id: string;
      })
    | null;

  students: {
    id: string;
    firstName: string;
    lastName: string;
    admissionNumber: string;
  }[];
};

export default function ParentForm({
  mode = "create",
  initialData = null,
  students,
}: ParentFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ParentFormData>({
    resolver: zodResolver(parentSchema),
    defaultValues: {
      students: [],
      ...initialData,
    },
  });

  async function onSubmit(data: ParentFormData) {
    try {
      setLoading(true);

      const result =
        mode === "create"
          ? await createParent(data)
          : await updateParent(initialData!.id, data);

      if (!result.success) {
        alert(result.message);

        return;
      }

      alert(
        mode === "create"
          ? "Parent created successfully."
          : "Parent updated successfully.",
      );

      router.push("/admin/parents");

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* ================= Personal Information ================= */}

      <FormSection
        title="Personal Information"
        description="Basic details about the parent or guardian."
      >
        <Input
          label="Passport Image URL (Optional)"
          placeholder="Will be replaced with image upload later"
          error={errors.passport?.message}
          {...register("passport")}
        />

        <Input
          label="First Name"
          required
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          label="Middle Name"
          error={errors.middleName?.message}
          {...register("middleName")}
        />

        <Input
          label="Last Name"
          required
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <Select
          label="Gender"
          error={errors.gender?.message}
          {...register("gender")}
          options={[
            {
              label: "Male",
              value: "MALE",
            },
            {
              label: "Female",
              value: "FEMALE",
            },
          ]}
        />

        <Input
          label="Relationship to Student"
          placeholder="Father, Mother, Uncle, Aunt, Guardian..."
          error={errors.relationship?.message}
          {...register("relationship")}
        />

        <Input
          label="Date of Birth"
          type="date"
          error={errors.dob?.message}
          {...register("dob")}
        />
      </FormSection>
      {/* ================= Contact Information ================= */}

      <FormSection
        title="Contact Information"
        description="Parent contact details."
      >
        <Input
          label="Phone Number"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          label="Alternate Phone"
          error={errors.alternatePhone?.message}
          {...register("alternatePhone")}
        />

        <Input
          label="Email Address"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Textarea
          label="Residential Address"
          error={errors.address?.message}
          {...register("address")}
        />

        <Input
          label="State"
          error={errors.state?.message}
          {...register("state")}
        />

        <Input
          label="Nationality"
          error={errors.nationality?.message}
          {...register("nationality")}
        />
      </FormSection>

      {/* ================= Employment Information ================= */}

      <FormSection
        title="Employment Information"
        description="Occupation and employer details."
      >
        <Input
          label="Occupation"
          error={errors.occupation?.message}
          {...register("occupation")}
        />

        <Input
          label="Employer"
          error={errors.employer?.message}
          {...register("employer")}
        />
      </FormSection>
      {/* ================= Student Assignment ================= */}

      <FormSection
        title="Student Assignment"
        description="Select one or more students linked to this parent."
      >
        <Controller
          control={control}
          name="students"
          render={({ field }) => (
            <MultiSelect
              label="Students"
              options={students.map((student) => ({
                label: `${student.firstName} ${student.lastName} (${student.admissionNumber})`,
                value: student.id,
              }))}
              value={field.value ?? []}
              onChange={field.onChange}
              error={errors.students?.message}
            />
          )}
        />
      </FormSection>

      <div className="flex justify-end">
        <Button type="submit" loading={loading}>
          {mode === "create" ? "Save Parent" : "Update Parent"}
        </Button>
      </div>
    </form>
  );
}
