import { PageContainer } from "@/components/ui";

import {
  AttendanceToolbar,
  AttendanceForm,
  AttendanceTable,
  AttendanceStats,
} from "@/components/portal/attendance";

import {
  getAttendancePageData,
  getAttendanceHistory,
  getAttendanceStatistics,
} from "@/lib/services/attendance.service";

export default async function AttendancePage() {
 const [pageData, history, statistics] = await Promise.all([
   getAttendancePageData(),
   getAttendanceHistory(),
   getAttendanceStatistics(),
 ]);

  return (
    <PageContainer>
      <AttendanceToolbar />
      <AttendanceStats
        total={statistics.total}
        present={statistics.present}
        absent={statistics.absent}
        late={statistics.late}
        excused={statistics.excused}
      />
      <AttendanceForm classes={pageData.classes} sessions={pageData.sessions} />

      <AttendanceTable records={history} />
    </PageContainer>
  );
}
