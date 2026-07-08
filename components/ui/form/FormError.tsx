type Props = {
  error?: string;
};

export default function FormError({ error }: Props) {
  if (!error) return null;

  return <p className="mt-1 text-sm text-red-500">{error}</p>;
}
