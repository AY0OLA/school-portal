/*
  Warnings:

  - A unique constraint covering the columns `[name,sessionId,termId]` on the table `Exam` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Exam" ADD COLUMN     "description" TEXT,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Exam_status_idx" ON "public"."Exam"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_name_sessionId_termId_key" ON "public"."Exam"("name", "sessionId", "termId");

-- CreateIndex
CREATE INDEX "ExamScore_score_idx" ON "public"."ExamScore"("score");
