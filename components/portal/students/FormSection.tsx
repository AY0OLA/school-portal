type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function FormSection({ title, description, children }: Props) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold">{title}</h2>

        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">{children}</div>
    </section>
  );
}
