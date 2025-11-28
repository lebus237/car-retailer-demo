"use client";

import { CarModelType } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { stringToSlug } from "@/lib/string/slug";
import { CarModelCard } from "@/components/entity/CarModelCard";

export function BrandViewPage({
  modelList,
  title,
}: {
  yearList: any[];
  modelList: CarModelType[];
  title: string;
}) {
  const router = useRouter();
  const { id: brandId } = useParams();

  if (modelList.length === 0) {
    return (
      <div className="w-full h-full bg flex justify-center items-center">
        Aucun element trouve
      </div>
    );
  }

  return (
    <main className="container mx-auto space-y-20">
      <header className="text-center ">
        <h1 className="font-bold">
          <span className="text-green-500 text-5xl capitalize">{title}</span>
        </h1>
        <span>---</span>
        <p className="font-bold italic text-2xl">Modeles disponibles</p>
      </header>
      <section className="space-y-12">
        {/*<header className="container mx-auto">*/}
        {/*  <SectionComponent*/}
        {/*    title="Annees"*/}
        {/*    itemsList={yearList}*/}
        {/*    classNames={{ item: "basis-1/12", title: "text-xl" }}*/}
        {/*    renderItem={(y) => (*/}
        {/*      <Badge*/}
        {/*        className="p-3 text-blue-300"*/}
        {/*        variant="outline"*/}
        {/*        onClick={() =>*/}
        {/*          router.push(`/catalog/model/${y.id}/${stringToSlug(y.name)}`)*/}
        {/*        }*/}
        {/*      >*/}
        {/*        {y.name}*/}
        {/*      </Badge>*/}
        {/*    )}*/}
        {/*  />*/}
        {/*</header>*/}
        <main className="grid grid-cols-5 gap-4">
          {modelList.map((model: CarModelType, index: number) => (
            <CarModelCard
              key={model.id}
              {...model}
              onClick={() =>
                router.push(
                  `/model/${model.id}/${brandId}/${stringToSlug(model.name)}`,
                )
              }
              thumbnails={`/models/${1 + (index % 8)}.jpg`}
            />
          ))}
        </main>
      </section>
    </main>
  );
}
