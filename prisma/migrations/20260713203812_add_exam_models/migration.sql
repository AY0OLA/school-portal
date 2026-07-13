-- CreateEnum
CREATE TYPE "public"."ExamStatus" AS ENUM ('DRAFT', 'ACTIVE', 'LOCKED', 'PUBLISHED');

-- CreateTable
CREATE TABLE "public"."Exam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "termId" TEXT NOT NULL,
    "totalMark" INTEGER NOT NULL DEFAULT 100,
    "status" "public"."ExamStatus" NOT NULL DEFAULT 'DRAFT',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExamClass" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExamSubject" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExamScore" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Exam_sessionId_idx" ON "public"."Exam"("sessionId");

-- CreateIndex
CREATE INDEX "Exam_termId_idx" ON "public"."Exam"("termId");

-- CreateIndex
CREATE INDEX "ExamClass_examId_idx" ON "public"."ExamClass"("examId");

-- CreateIndex
CREATE INDEX "ExamClass_classId_idx" ON "public"."ExamClass"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamClass_examId_classId_key" ON "public"."ExamClass"("examId", "classId");

-- CreateIndex
CREATE INDEX "ExamSubject_examId_idx" ON "public"."ExamSubject"("examId");

-- CreateIndex
CREATE INDEX "ExamSubject_subjectId_idx" ON "public"."ExamSubject"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamSubject_examId_subjectId_key" ON "public"."ExamSubject"("examId", "subjectId");

-- CreateIndex
CREATE INDEX "ExamScore_examId_idx" ON "public"."ExamScore"("examId");

-- CreateIndex
CREATE INDEX "ExamScore_studentId_idx" ON "public"."ExamScore"("studentId");

-- CreateIndex
CREATE INDEX "ExamScore_subjectId_idx" ON "public"."ExamScore"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamScore_examId_studentId_subjectId_key" ON "public"."ExamScore"("examId", "studentId", "subjectId");

-- AddForeignKey
ALTER TABLE "public"."Exam" ADD CONSTRAINT "Exam_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."AcademicSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exam" ADD CONSTRAINT "Exam_termId_fkey" FOREIGN KEY ("termId") REFERENCES "public"."Term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamClass" ADD CONSTRAINT "ExamClass_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamClass" ADD CONSTRAINT "ExamClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamSubject" ADD CONSTRAINT "ExamSubject_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamSubject" ADD CONSTRAINT "ExamSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamScore" ADD CONSTRAINT "ExamScore_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamScore" ADD CONSTRAINT "ExamScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamScore" ADD CONSTRAINT "ExamScore_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
