import EnrollmentChart from "./EnrollmentChart";
import RevenueChart from "./RevenueChart";


export default function Charts() {
  return (
    <div className="grid mt-4 gap-8 lg:grid-cols-2">
      <EnrollmentChart />

      <RevenueChart />
    </div>
  );
}
