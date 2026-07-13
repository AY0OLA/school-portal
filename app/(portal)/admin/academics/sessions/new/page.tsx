import { SessionForm } from "@/components/portal/academics/sessions";

export default function NewAcademicSessionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">New Academic Session</h1>

        <p className="mt-2 text-slate-500">Create a new academic session.</p>
      </div>

      <SessionForm mode="create" />
    </main>
  );
}
