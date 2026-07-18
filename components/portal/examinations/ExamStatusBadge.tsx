type Props = {
  status: "DRAFT" | "ACTIVE" | "LOCKED" | "PUBLISHED";
};

export default function ExamStatusBadge({ status }: Props) {
  const styles = {
    DRAFT: "bg-gray-100 text-gray-700",

    ACTIVE: "bg-blue-100 text-blue-700",

    LOCKED: "bg-orange-100 text-orange-700",

    PUBLISHED: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
