"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { StudentFormData } from "@/lib/validations";
import { Input, Select } from "@/components/ui/form";

type Props = {
  register: UseFormRegister<StudentFormData>;
  errors: FieldErrors<StudentFormData>;
};

export default function PersonalInformation({ register, errors }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Input
        label="First Name"
        required
        {...register("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        label="Middle Name"
        {...register("middleName")}
        error={errors.middleName?.message}
      />

      <Input
        label="Last Name"
        required
        {...register("lastName")}
        error={errors.lastName?.message}
      />

      <Select
        label="Gender"
        required
        {...register("gender")}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        error={errors.gender?.message}
      />

      <Input
        type="date"
        label="Date of Birth"
        required
        {...register("dob")}
        error={errors.dob?.message}
      />

      <Input
        label="State of Origin"
        required
        {...register("state")}
        error={errors.state?.message}
      />

      <Input
        label="Nationality"
        required
        {...register("nationality")}
        error={errors.nationality?.message}
      />

      <Input
        label="Religion"
        required
        {...register("religion")}
        error={errors.religion?.message}
      />

      <Input
        label="Address"
        required
        {...register("address")}
        error={errors.address?.message}
      />

      <Input
        label="Phone Number"
        required
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Input
        type="email"
        label="Email Address"
        {...register("email")}
        error={errors.email?.message}
      />
    </div>
  );
}
