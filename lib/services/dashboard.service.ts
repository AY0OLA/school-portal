import { prisma } from "@/lib/prisma";
import { Gender, StudentStatus, TeacherStatus } from "@prisma/client";

export type DashboardActivity = {
  id: string;
  type: "Student" | "Teacher" | "Parent";
  title: string;
  description: string;
  createdAt: Date;
};

export async function getDashboardStats() {
  const [
    totalStudents,
    totalTeachers,
    totalParents,
    totalClasses,
    totalSubjects,
    totalDepartments,
    currentSession,
    currentTerm,
  ] = await Promise.all([
    prisma.student.count(),
    prisma.teacher.count(),
    prisma.parent.count(),
    prisma.class.count(),
    prisma.subject.count(),
    prisma.department.count(),
    prisma.academicSession.findFirst({
      where: {
        isCurrent: true,
      },
    }),
    prisma.term.findFirst({
      where: {
        isCurrent: true,
      },
    }),
  ]);

  return {
    totalStudents,
    totalTeachers,
    totalParents,
    totalClasses,
    totalSubjects,
    totalDepartments,
    currentSession: currentSession?.name ?? "Not Set",
    currentTerm: currentTerm?.name ?? "Not Set",
  };
}

export async function getDashboardData() {
  const [stats, activities, genderChart, classChart, departmentChart] =
    await Promise.all([
      getDashboardStats(),
      getRecentActivities(),
      getStudentGenderChart(),
      getStudentsPerClassChart(),
      getTeachersByDepartmentChart(),
    ]);

  return {
    stats,
    activities,
    genderChart,
    classChart,
    departmentChart,
  };
}
export async function getRecentActivities(): Promise<DashboardActivity[]> {
  const [students, teachers, parents] = await Promise.all([
    prisma.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),

    prisma.teacher.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),

    prisma.parent.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
  ]);
  const studentActivities: DashboardActivity[] = students.map((student) => ({
  id: student.id,
  type: "Student",
  title: `${student.firstName} ${student.lastName}`,
  description: "New student admitted",
  createdAt: student.createdAt,
}));

const teacherActivities: DashboardActivity[] = teachers.map((teacher) => ({
  id: teacher.id,
  type: "Teacher",
  title: `${teacher.firstName} ${teacher.lastName}`,
  description: "New teacher added",
  createdAt: teacher.createdAt,
}));

const parentActivities: DashboardActivity[] = parents.map((parent) => ({
  id: parent.id,
  type: "Parent",
  title: `${parent.firstName} ${parent.lastName}`,
  description: "New parent registered",
  createdAt: parent.createdAt,
}));

const activities: DashboardActivity[] = [
  ...studentActivities,
  ...teacherActivities,
  ...parentActivities,
].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

return activities;
 
}
export async function getStudentGenderChart() {
  const male = await prisma.student.count({
    where: {
      gender: "MALE",
    },
  });

  const female = await prisma.student.count({
    where: {
      gender: "FEMALE",
    },
  });

  return [
    {
      name: "Male",
      value: male,
    },
    {
      name: "Female",
      value: female,
    },
  ];
}
export async function getStudentsPerClassChart() {
  const classes = await prisma.class.findMany({
    include: {
      _count: {
        select: {
          students: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return classes.map((item) => ({
    name: `${item.name} ${item.arm}`,
    students: item._count.students,
  }));
}
export async function getTeachersByDepartmentChart() {
  const departments = await prisma.department.findMany({
    include: {
      _count: {
        select: {
          teachers: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return departments.map((department) => ({
    name: department.name,
    teachers: department._count.teachers,
  }));
}
export async function getStudentStatusChart() {
  const statuses = Object.values(StudentStatus);

  const data = await Promise.all(
    statuses.map(async (status) => ({
      name: status.replace("_", " "),
      value: await prisma.student.count({
        where: { status },
      }),
    })),
  );

  return data;
}
export async function getTeacherStatusChart() {
  const statuses = Object.values(TeacherStatus);

  const data = await Promise.all(
    statuses.map(async (status) => ({
      name: status.replace("_", " "),
      value: await prisma.teacher.count({
        where: { status },
      }),
    })),
  );

  return data;
}
