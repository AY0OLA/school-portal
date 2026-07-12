"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormSection from "./FormSection";

import {
  Input,
  Select,
  Textarea,
  Button,
  FileUpload,
} from "@/components/ui/form";

import MultiSelect from "@/components/ui/form/MultiSelect";

import {
  teacherSchema,
  TeacherFormData,
} from "@/lib/validations";

import { createTeacher } from "@/lib/actions/create-teacher";
import { updateTeacher } from "@/lib/actions/update-teacher";

type TeacherFormProps = {
  mode?: "create" | "edit";

  initialData?:
    | (Partial<TeacherFormData> & {
        id: string;
      })
    | null;

  departments: {
    id: string;
    name: string;
  }[];

  subjects: {
    id: string;
    name: string;
  }[];

  classes: {
    id: string;
    name: string;
    arm: string;
  }[];
};

export default function TeacherForm({
  mode = "create",
  initialData = null,
  departments,
  subjects,
  classes,
}: TeacherFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),

    defaultValues: {
      employeeId: initialData?.employeeId ?? "",
      employmentDate: initialData?.employmentDate ?? "",

      firstName: initialData?.firstName ?? "",
      middleName: initialData?.middleName ?? "",
      lastName: initialData?.lastName ?? "",

      gender: initialData?.gender ?? "MALE",
      dob: initialData?.dob ?? "",

      phone: initialData?.phone ?? "",
      email: initialData?.email ?? "",
      address: initialData?.address ?? "",

      qualification: initialData?.qualification ?? "",
      specialization: initialData?.specialization ?? "",

      departmentId: initialData?.departmentId ?? "",

      passport: initialData?.passport ?? "",

      status: initialData?.status ?? "ACTIVE",

      assignedSubjects: initialData?.assignedSubjects ?? [],

      assignedClasses: initialData?.assignedClasses ?? [],
    },
  });

  async function onSubmit(data: TeacherFormData) {
    try {
      setLoading(true);

      const result =
        mode === "create"
          ? await createTeacher(data)
          : await updateTeacher(initialData!.id, data);

      if (!result.success) {
        alert(result.message);

        return;
      }

      alert(
        mode === "create"
          ? "Teacher registered successfully!"
          : "Teacher updated successfully!"
      );

      router.push("/admin/teachers");

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
      {/* ================= Employment Information ================= */}

      <FormSection
        title="Employment Information"
        description="Teacher employment details."
      >
        <Input
          label="Employee ID"
          required
          error={errors.employeeId?.message}
          {...register("employeeId")}
        />

        <Input
          label="Employment Date"
          type="date"
          error={errors.employmentDate?.message}
          {...register("employmentDate")}
        />

        <Select
          label="Status"
          required
          error={errors.status?.message}
          {...register("status")}
          options={[
            {
              label: "Active",
              value: "ACTIVE",
            },
            {
              label: "Inactive",
              value: "INACTIVE",
            },
            {
              label: "On Leave",
              value: "ON_LEAVE",
            },
          ]}
        />
      </FormSection>

      {/* ================= Personal Information ================= */}

      <FormSection
        title="Personal Information"
        description="Basic teacher information."
      >
        <div className="md:col-span-2">
          <FileUpload label="Passport Photograph" accept="image/*" />
        </div>

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
          required
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
          label="Date of Birth"
          type="date"
          error={errors.dob?.message}
          {...register("dob")}
        />
      </FormSection>
      {/* ================= Contact Information ================= */}

      <FormSection
        title="Contact Information"
        description="Teacher contact details."
      >
        <Input
          label="Email Address"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Phone Number"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Textarea
          label="Residential Address"
          placeholder="Enter full address"
          error={errors.address?.message}
          {...register("address")}
        />
      </FormSection>

      {/* ================= Professional Information ================= */}

      <FormSection
        title="Professional Information"
        description="Teacher qualifications and department."
      >
        <Input
          label="Qualification"
          placeholder="e.g. B.Sc Education"
          error={errors.qualification?.message}
          {...register("qualification")}
        />

        <Input
          label="Specialization"
          placeholder="e.g. Mathematics"
          error={errors.specialization?.message}
          {...register("specialization")}
        />

        <Select
          label="Department"
          error={errors.departmentId?.message}
          {...register("departmentId")}
          options={[
            { label: "Select Department", value: "" },
            ...departments.map((department) => ({
              label: department.name,
              value: department.id,
            })),
          ]}
        />
      </FormSection>
      {/* ================= Academic Assignment ================= */}

      <FormSection
        title="Academic Assignment"
        description="Assign subjects and classes to the teacher."
      >
        <Controller
          control={control}
          name="assignedSubjects"
          render={({ field }) => (
            <MultiSelect
              label="Assigned Subjects"
              options={subjects.map((subject) => ({
                label: subject.name,
                value: subject.id,
              }))}
              value={field.value ?? []}
              onChange={field.onChange}
              error={errors.assignedSubjects?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="assignedClasses"
          render={({ field }) => (
            <MultiSelect
              label="Assigned Classes"
              options={classes.map((cls) => ({
                label: `${cls.name} ${cls.arm}`,
                value: cls.id,
              }))}
              value={field.value ?? []}
              onChange={field.onChange}
              error={errors.assignedClasses?.message}
            />
          )}
        />
      </FormSection>

      {/* ================= Submit Button ================= */}

      <div className="flex justify-end">
        <Button type="submit" loading={loading}>
          {mode === "create" ? "Save Teacher" : "Update Teacher"}
        </Button>
      </div>
    </form>
  );
}