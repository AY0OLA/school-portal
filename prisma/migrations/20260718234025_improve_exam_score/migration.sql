/*
  Warnings:

  - You are about to drop the column `remarks` on the `ExamScore` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `ExamScore` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."ExamScore_score_idx";

-- AlterTable
ALTER TABLE "public"."ExamScore" DROP COLUMN "remarks",
DROP COLUMN "score",
ADD COLUMN     "caScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "examScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "grade" TEXT,
ADD COLUMN     "remark" TEXT,
ADD COLUMN     "totalScore" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "public"."Result" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "position" INTEGER,
    "grade" TEXT,
    "remark" TEXT,
    "teacherComment" TEXT,
    "principalComment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ResultSubject" (
    "id" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "ca" DOUBLE PRECISION NOT NULL,
    "exam" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "grade" TEXT NOT NULL,
    "remark" TEXT NOT NULL,

    CONSTRAINT "ResultSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GradingSystem" (
    "id" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "minimum" DOUBLE PRECISION NOT NULL,
    "maximum" DOUBLE PRECISION NOT NULL,
    "remark" TEXT NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GradingSystem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Result_examId_idx" ON "public"."Result"("examId");

-- CreateIndex
CREATE INDEX "Result_studentId_idx" ON "public"."Result"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_examId_studentId_key" ON "public"."Result"("examId", "studentId");

-- CreateIndex
CREATE INDEX "ResultSubject_resultId_idx" ON "public"."ResultSubject"("resultId");

-- CreateIndex
CREATE INDEX "ResultSubject_subjectId_idx" ON "public"."ResultSubject"("subjectId");

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ResultSubject" ADD CONSTRAINT "ResultSubject_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "public"."Result"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ResultSubject" ADD CONSTRAINT "ResultSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
