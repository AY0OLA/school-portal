type Props = {
  status: string;
};

export default function TeacherStatus({ status }: Props) {
  const styles = {
    ACTIVE: "bg-green-100 text-green-700",

    INACTIVE: "bg-red-100 text-red-700",

    ON_LEAVE: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
