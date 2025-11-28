"use client";

import { BrandType } from "@/types";
import { BrandCard } from "@/components/entity/BrandCard";
import { useRouter } from "next/navigation";
import { stringToSlug } from "@/lib/string/slug";

export function CatalogViewPage({ brandList }: { brandList: BrandType[] }) {
  const router = useRouter();

  if (brandList.length === 0) {
    return <div>Aucun element trouve</div>;
  }

  return (
    <main className="container mx-auto space-y-24">
      <h1 className="text-center font-bold italic text-4xl">
        Catalogue - Liste des marques
      </h1>
      <section className="grid grid-cols-5 gap-4">
        {brandList.map((brand: BrandType) => (
          <BrandCard
            key={brand.id}
            {...brand}
            onClick={() =>
              router.push(
                `/catalog/brand/${brand.id}/${stringToSlug(brand.name)}`,
              )
            }
          />
        ))}
      </section>
    </main>
  );
}
