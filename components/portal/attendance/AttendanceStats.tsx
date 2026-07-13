import { Card } from "@/components/ui";

type Props = {
  total: number;
  present: number;
  absent: number;
  late: number;
  excused: number;
};

export default function AttendanceStats({
  total,
  present,
  absent,
  late,
  excused,
}: Props) {
  const stats = [
    {
      label: "Total Records",
      value: total,
    },
    {
      label: "Present",
      value: present,
    },
    {
      label: "Absent",
      value: absent,
    },
    {
      label: "Late",
      value: late,
    },
    {
      label: "Excused",
      value: excused,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-5">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <div className="space-y-2 p-6">
            <p className="text-sm text-gray-500">{stat.label}</p>

            <h2 className="text-3xl font-bold">{stat.value}</h2>
          </div>
        </Card>
      ))}
    </div>
  );
}
