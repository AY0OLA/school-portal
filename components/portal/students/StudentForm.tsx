"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormSection from "./FormSection";

import {
  Input,
  Select,
  Textarea,
  Button,
  FileUpload,
} from "@/components/ui/form";

import { createStudent } from "@/lib/actions";
import { updateStudent } from "@/lib/actions/update-student";
import {
  studentSchema,
  StudentFormData,
} from "@/lib/validations";

type StudentFormProps = {
  mode?: "create" | "edit";
  initialData?: (Partial<StudentFormData> & {
    id: string;
  }) | null;
};

export default function StudentForm({
  mode = "create",
  initialData = null,
}: StudentFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: initialData ?? {},
  });

  const onSubmit = async (data: StudentFormData) => {
    try {
      setLoading(true);

      const result =
        mode === "create"
          ? await createStudent(data)
          : await updateStudent(initialData!.id, data);

      if (!result.success) {
        alert("Something went wrong.");
        return;
      }

      alert(
        mode === "create"
          ? "Student registered successfully!"
          : "Student updated successfully!",
      );

      router.push("/admin/students");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">


      <FormSection
        title="Personal Information"
        description="Basic student details."
      >
        <Input
          label="First Name"
          placeholder="Enter first name"
          required
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          label="Middle Name"
          placeholder="Enter middle name"
          error={errors.middleName?.message}
          {...register("middleName")}
        />

        <Input
          label="Last Name"
          placeholder="Enter last name"
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
          required
          error={errors.dob?.message}
          {...register("dob")}
        />

        <Input
          label="State of Origin"
          placeholder="Lagos"
          error={errors.state?.message}
          {...register("state")}
        />

        <Input
          label="Nationality"
          placeholder="Nigerian"
          error={errors.nationality?.message}
          {...register("nationality")}
        />

        <Input
          label="Religion"
          placeholder="Religion"
          error={errors.religion?.message}
          {...register("religion")}
        />

        <Textarea
          label="Residential Address"
          placeholder="Enter home address"
          error={errors.address?.message}
          {...register("address")}
        />
      </FormSection>


      <FormSection
        title="Academic Information"
        description="Admission details."
      >
        <Input
          label="Admission Number"
          placeholder="STD001"
          required
          error={errors.admissionNumber?.message}
          {...register("admissionNumber")}
        />

        <Input
          label="Admission Date"
          type="date"
          required
          error={errors.admissionDate?.message}
          {...register("admissionDate")}
        />

        <Select
          label="Class"
          required
          error={errors.class?.message}
          {...register("class")}
          options={[
            { label: "Basic 1", value: "Basic 1" },
            { label: "Basic 2", value: "Basic 2" },
            { label: "Basic 3", value: "Basic 3" },
            { label: "Basic 4", value: "Basic 4" },
            { label: "Basic 5", value: "Basic 5" },
            { label: "JSS 1", value: "JSS 1" },
            { label: "JSS 2", value: "JSS 2" },
            { label: "JSS 3", value: "JSS 3" },
            { label: "SS 1", value: "SS 1" },
            { label: "SS 2", value: "SS 2" },
            { label: "SS 3", value: "SS 3" },
          ]}
        />

        <Select
          label="Arm"
          error={errors.arm?.message}
          {...register("arm")}
          options={[
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ]}
        />

        <Select
          label="Academic Session"
          error={errors.session?.message}
          {...register("session")}
          options={[
            {
              label: "2026/2027",
              value: "2026/2027",
            },
            {
              label: "2027/2028",
              value: "2027/2028",
            },
          ]}
        />

        <Select
          label="Status"
          error={errors.status?.message}
          {...register("status")}
          options={[
            {
              label: "Active",
              value: "ACTIVE",
            },
            {
              label: "Pending",
              value: "PENDING",
            },
            {
              label: "Suspended",
              value: "SUSPENDED",
            },
            {
              label: "Graduated",
              value: "GRADUATED",
            },
            {
              label: "Transferred",
              value: "TRANSFERRED",
            },
          ]}
        />
      </FormSection>

      <FormSection
        title="Parent / Guardian Information"
        description="Parent or guardian contact details."
      >
        <Input
          label="Father's Name"
          error={errors.fatherName?.message}
          {...register("fatherName")}
        />

        <Input
          label="Mother's Name"
          error={errors.motherName?.message}
          {...register("motherName")}
        />

        <Input
          label="Guardian Name"
          error={errors.guardianName?.message}
          {...register("guardianName")}
        />

        <Input
          label="Phone Number"
          type="tel"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          label="Email Address"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Occupation"
          error={errors.occupation?.message}
          {...register("occupation")}
        />

        <Textarea
          label="Guardian Address"
          error={errors.guardianAddress?.message}
          {...register("guardianAddress")}
        />
      </FormSection>


      <FormSection
        title="Medical Information"
        description="Student medical records."
      >
        <Input
          label="Blood Group"
          error={errors.bloodGroup?.message}
          {...register("bloodGroup")}
        />

        <Input
          label="Genotype"
          error={errors.genotype?.message}
          {...register("genotype")}
        />

        <Input
          label="Known Allergies"
          error={errors.allergies?.message}
          {...register("allergies")}
        />

        <Input
          label="Medical Condition"
          error={errors.medicalCondition?.message}
          {...register("medicalCondition")}
        />

        <Input
          label="Emergency Contact"
          error={errors.emergencyContact?.message}
          {...register("emergencyContact")}
        />

        <Textarea
          label="Medical Notes"
          error={errors.medicalNotes?.message}
          {...register("medicalNotes")}
        />
      </FormSection>


      <FormSection
        title="Student Documents"
        description="Upload all required student documents."
      >
        <div className="space-y-8 md:col-span-2">
          <FileUpload label="Passport Photograph" accept="image/*" />

          <FileUpload label="Birth Certificate" accept=".pdf,.jpg,.jpeg,.png" />

          <FileUpload
            label="Previous School Result"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
      </FormSection>

      <div className="flex justify-end">
        <Button type="submit" loading={loading}>
          {mode === "create" ? "Save Student" : "Update Student"}
        </Button>
      </div>
    </form>
  );
}