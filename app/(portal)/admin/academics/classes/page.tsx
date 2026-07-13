import { PageContainer } from "@/components/ui";

import {
  ClassTable,
  ClassToolbar,
} from "@/components/portal/academics/classes";

import { getClasses } from "@/lib/services/class.service";

export default async function ClassesPage() {
  const classes = await getClasses();

  return (
    <PageContainer>
      <ClassToolbar />

      <ClassTable classes={classes} />
    </PageContainer>
  );
}
