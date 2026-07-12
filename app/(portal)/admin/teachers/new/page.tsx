import TeacherForm from "@/components/portal/teachers/TeacherForm";

import { getDepartments } from "@/lib/services/department.service";
import { getSubjects } from "@/lib/services/subject.service";
import { getClasses } from "@/lib/services/class.service";

export default async function NewTeacherPage() {
  const [departments, subjects, classes] = await Promise.all([
    getDepartments(),
    getSubjects(),
    getClasses(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold">Register Teacher</h1>

        <p className="text-gray-500">Create a new teacher record.</p>
      </div>

      <TeacherForm
        departments={departments}
        subjects={subjects}
        classes={classes}
      />
    </div>
  );
}
