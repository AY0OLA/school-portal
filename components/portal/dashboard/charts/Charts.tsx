import GenderChart from "./GenderChart";
import ClassChart from "./ClassChart";

type ChartsProps = {
  genderData: {
    name: string;
    value: number;
  }[];

  classData: {
    name: string;
    students: number;
  }[];
};

export default function Charts({ genderData, classData }: ChartsProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <GenderChart data={genderData} />

      <ClassChart data={classData} />

      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center h-[430px]">
        <p className="font-medium text-slate-500">
          Teachers by Department (Coming Next)
        </p>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center h-[430px]">
        <p className="font-medium text-slate-500">
          Student Status (Coming Next)
        </p>
      </div>
    </section>
  );
}
