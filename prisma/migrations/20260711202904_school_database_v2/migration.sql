/*
  Warnings:

  - You are about to drop the column `teacherId` on the `Class` table. All the data in the column will be lost.
  - The `bloodGroup` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `genotype` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name,arm]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId,sessionId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Term` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BloodGroup" AS ENUM ('A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE');

-- CreateEnum
CREATE TYPE "public"."Genotype" AS ENUM ('AA', 'AS', 'AC', 'SS', 'SC');

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_teacherId_fkey";

-- AlterTable
ALTER TABLE "public"."AcademicSession" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Class" DROP COLUMN "teacherId",
ADD COLUMN     "capacity" INTEGER,
ADD COLUMN     "classTeacherId" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "room" TEXT;

-- AlterTable
ALTER TABLE "public"."Parent" ADD COLUMN     "alternatePhone" TEXT,
ADD COLUMN     "employer" TEXT,
ADD COLUMN     "gender" "public"."Gender",
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "passport" TEXT,
ADD COLUMN     "relationship" TEXT;

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "admissionDate" TIMESTAMP(3),
ADD COLUMN     "admissionType" TEXT,
ADD COLUMN     "house" TEXT,
ADD COLUMN     "lga" TEXT,
ADD COLUMN     "medicalNotes" TEXT,
ADD COLUMN     "previousSchool" TEXT,
DROP COLUMN "bloodGroup",
ADD COLUMN     "bloodGroup" "public"."BloodGroup",
DROP COLUMN "genotype",
ADD COLUMN     "genotype" "public"."Genotype";

-- AlterTable
ALTER TABLE "public"."Subject" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "address" TEXT,
ADD COLUMN     "departmentId" TEXT,
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "employmentDate" TIMESTAMP(3),
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "passport" TEXT,
ADD COLUMN     "qualification" TEXT,
ADD COLUMN     "specialization" TEXT;

-- AlterTable
ALTER TABLE "public"."Term" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isCurrent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."TeacherSubject" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClassSubject" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "hodId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TeacherSubject_teacherId_idx" ON "public"."TeacherSubject"("teacherId");

-- CreateIndex
CREATE INDEX "TeacherSubject_subjectId_idx" ON "public"."TeacherSubject"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherSubject_teacherId_subjectId_key" ON "public"."TeacherSubject"("teacherId", "subjectId");

-- CreateIndex
CREATE INDEX "ClassSubject_classId_idx" ON "public"."ClassSubject"("classId");

-- CreateIndex
CREATE INDEX "ClassSubject_subjectId_idx" ON "public"."ClassSubject"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassSubject_classId_subjectId_key" ON "public"."ClassSubject"("classId", "subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "public"."Department"("name");

-- CreateIndex
CREATE INDEX "Department_name_idx" ON "public"."Department"("name");

-- CreateIndex
CREATE INDEX "Class_classTeacherId_idx" ON "public"."Class"("classTeacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_arm_key" ON "public"."Class"("name", "arm");

-- CreateIndex
CREATE INDEX "Enrollment_studentId_idx" ON "public"."Enrollment"("studentId");

-- CreateIndex
CREATE INDEX "Enrollment_classId_idx" ON "public"."Enrollment"("classId");

-- CreateIndex
CREATE INDEX "Enrollment_sessionId_idx" ON "public"."Enrollment"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_sessionId_key" ON "public"."Enrollment"("studentId", "sessionId");

-- CreateIndex
CREATE INDEX "Parent_phone_idx" ON "public"."Parent"("phone");

-- CreateIndex
CREATE INDEX "Parent_email_idx" ON "public"."Parent"("email");

-- CreateIndex
CREATE INDEX "Student_admissionNumber_idx" ON "public"."Student"("admissionNumber");

-- CreateIndex
CREATE INDEX "Student_classId_idx" ON "public"."Student"("classId");

-- CreateIndex
CREATE INDEX "Student_parentId_idx" ON "public"."Student"("parentId");

-- CreateIndex
CREATE INDEX "Student_status_idx" ON "public"."Student"("status");

-- CreateIndex
CREATE INDEX "Subject_code_idx" ON "public"."Subject"("code");

-- CreateIndex
CREATE INDEX "Subject_name_idx" ON "public"."Subject"("name");

-- CreateIndex
CREATE INDEX "Teacher_employeeId_idx" ON "public"."Teacher"("employeeId");

-- CreateIndex
CREATE INDEX "Teacher_departmentId_idx" ON "public"."Teacher"("departmentId");

-- CreateIndex
CREATE INDEX "Teacher_status_idx" ON "public"."Teacher"("status");

-- CreateIndex
CREATE INDEX "Term_sessionId_idx" ON "public"."Term"("sessionId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "public"."User"("role");

-- AddForeignKey
ALTER TABLE "public"."Teacher" ADD CONSTRAINT "Teacher_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeacherSubject" ADD CONSTRAINT "TeacherSubject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeacherSubject" ADD CONSTRAINT "TeacherSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassSubject" ADD CONSTRAINT "ClassSubject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassSubject" ADD CONSTRAINT "ClassSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_classTeacherId_fkey" FOREIGN KEY ("classTeacherId") REFERENCES "public"."Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
