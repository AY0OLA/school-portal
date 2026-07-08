type Props = {
  children: React.ReactNode;
  required?: boolean;
};

export default function FormLabel({ children, required = false }: Props) {
  return (
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {children}

      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
}
