import StudentForm from "@/components/portal/students/StudentForm";

export default function AddStudentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold">Add New Student</h1>

        <p className="text-gray-500">Register a new student into the school.</p>
      </div>

      <StudentForm />
    </div>
  );
}
