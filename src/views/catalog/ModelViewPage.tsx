"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Badge } from "@/components/core/badge";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Car } from "@/types";
import { fetchCarYearModel } from "@/api";
import Image from "next/image";

export function ModelViewPage({
  yearList,
  title,
}: {
  yearList: any[];
  title?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeParams: any = useParams();
  const [loading, setLoading] = useState(true);

  const [carData, setCarData] = useState<Car>();

  useEffect(() => {
    (async () => {
      const {
        params: [modelId, brandId],
      } = routeParams;

      setLoading(true);
      const resp = await fetchCarYearModel(
        brandId,
        modelId,
        searchParams.get("year") ?? yearList.at(0)?.id,
      );

      if (resp?.data) {
        console.log(resp.data);
        setCarData({
          id: "",
          model: resp.data.Modelo,
          yearModel: resp.data.AnoModelo,
          brand: resp.data.Marca,
          fuel: resp.data.Combustivel,
          value: resp.data.Valor,
        });
        setLoading(false);
      }
    })();
  }, [searchParams.get("year")]);

  if (yearList.length === 0) {
    return (
      <div className="w-full h-full bg flex justify-center items-center">
        Aucun element trouve
      </div>
    );
  }

  return (
    <main className="container mx-auto space-y-20">
      <header className="">
        <h1 className="font-bold">
          <span className="text-green-500 text-5xl capitalize">{title}</span>
        </h1>
        <span>---</span>
      </header>
      <section className="container mx-auto grid grid-cols-3 gap-4">
        <aside className="col-span-1">
          <div className="col-span-1 grid grid-cols-3 gap-3">
            {yearList.map((y) => (
              <Badge
                className={cn("p-2 text-white text-lg w-full cursor-pointer", {
                  "bg-blue-500": searchParams.get("year") === y.id,
                })}
                variant="outline"
                onClick={() => router.push(`${pathname}?year=${y.id}`)}
              >
                {y.name}
              </Badge>
            ))}
          </div>
        </aside>
        <aside className="col-span-2">
          <div className="border-white border grid grid-cols-3">
            <aside className="border-r col-span-1">
              <div className="space-y-2 *:p-3">
                <div className="border-b py-2">
                  <span className="font-bold">Modele:</span> {carData?.model}
                </div>
                <div className="border-b py-2">
                  <span className="font-bold">Annee de sortie:</span>{" "}
                  {carData?.yearModel}
                </div>
                <div className="border-b py-2">
                  <span className="font-bold">Type Moteur:</span> {carData?.fuel}
                </div>
                <div className="border-b py-2">
                  <span className="text-green-500 text-2xl">
                    {carData?.value}
                  </span>
                </div>
              </div>
            </aside>
            <aside className="min-h-96 relative content-center col-span-2">
              {loading ? (
                <center>Loading ...</center>
              ) : (
                <Image
                  src={`/models/${Math.floor(Math.random() * (8 - 1 + 1)) + 1}.jpg`}
                  alt="car"
                  fill
                />
              )}
            </aside>
          </div>
        </aside>
      </section>
    </main>
  );
}
