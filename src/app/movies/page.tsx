import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/Card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const bottomRow = {
  year: 2020,
  rating: 7,
};

export default function Movies() {
  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
        iure deserunt ipsam."
              href="/trending"
            />
          </div>

          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow}/>
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
        </CardsGrid>
      </div>
    </>
  );
}
