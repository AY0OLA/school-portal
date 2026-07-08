type Props = {
  title?: string;
  description?: string;
};

export default function TableEmpty({
  title = "No records found",
  description = "There are no records available.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-4 rounded-full bg-slate-100 p-5">📂</div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
}
