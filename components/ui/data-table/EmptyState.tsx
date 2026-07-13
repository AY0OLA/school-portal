type Props = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
