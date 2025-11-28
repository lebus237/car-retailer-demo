"use client";

import { useEffect, useState } from "react";
import { fetchBrandsList } from "@/api";
import { BrandType } from "@/types";
import { SectionComponent } from "@/views/home/components/SectionComponent";
import { BrandCard } from "@/components/entity/BrandCard";
import { useRouter } from "next/navigation";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { stringToSlug } from "@/lib/string/slug";

export function HomePageView() {
  const router = useRouter();
  const [brandPreviewList, setBrandPreviewList] = useState<BrandType[]>();

  useEffect(() => {
    (async () => {
      const brands = await fetchBrandsList();

      if (brands.data) {
        console.log(brands.data);
        setBrandPreviewList(() =>
          brands.data.map((brand: any) => ({
            id: brand.codigo,
            name: brand.nome,
          })),
        );
      }
    })();
  }, []);

  return (
    <main className="">
      <section className="container mx-auto">
        <SectionComponent
          title="Marques"
          itemsList={brandPreviewList ?? Array(10).fill({})}
          renderItem={(item: BrandType) =>
            brandPreviewList ? (
              <BrandCard
                id={item.id}
                name={item.name}
                onClick={() =>
                  router.push(
                    `/catalog/brand/${item.id}/${stringToSlug(item.name)}`,
                  )
                }
              />
            ) : (
              <LoadingCard />
            )
          }
        />
      </section>
    </main>
  );
}
