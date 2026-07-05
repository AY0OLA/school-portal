import Container from "@/components/website/navbar/Container";

import NewsHeader from "./NewsHeader";
import NewsCard from "./NewsCard";
import { newsData } from "./data";

export default function News() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <NewsHeader />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
