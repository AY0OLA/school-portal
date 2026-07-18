type GradeResult = {
  grade: string;
  remark: string;
};

export function calculateGrade(score: number): GradeResult {
  if (score >= 75) return { grade: "A1", remark: "Excellent" };

  if (score >= 70) return { grade: "B2", remark: "Very Good" };

  if (score >= 65) return { grade: "B3", remark: "Good" };

  if (score >= 60) return { grade: "C4", remark: "Credit" };

  if (score >= 55) return { grade: "C5", remark: "Credit" };

  if (score >= 50) return { grade: "C6", remark: "Credit" };

  if (score >= 45) return { grade: "D7", remark: "Pass" };

  if (score >= 40) return { grade: "E8", remark: "Pass" };

  return {
    grade: "F9",
    remark: "Fail",
  };
}
export function calculateTotal(
  continuousAssessment: number,
  examination: number,
) {
  return continuousAssessment + examination;
}
export function calculateAverage(scores: number[]) {
  if (scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);

  return Number((total / scores.length).toFixed(2));
}
export function calculatePositions<
  T extends {
    id: string;
    total: number;
  },
>(students: T[]) {
  const sorted = [...students].sort((a, b) => b.total - a.total);

  return sorted.map((student, index) => ({
    id: student.id,
    position: index + 1,
  }));
}