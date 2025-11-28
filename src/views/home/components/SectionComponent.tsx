import { JSX } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/core/carousel";
import { cn } from "@/lib/utils";

interface SectionProps<T> {
  title?: string;
  itemsList: T[];
  renderItem: (item: T) => JSX.Element;
  classNames?: { item?: string; title?: string };
}

export function SectionComponent<T>({
  title,
  itemsList,
  renderItem,
  classNames,
}: SectionProps<T>) {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className={cn("text-3xl italic font-normal", classNames?.title)}>
          {title}
        </h3>
      )}
      <main>
        <Carousel>
          <CarouselContent>
            {itemsList.map((item: T, index: number) => (
              <CarouselItem
                key={index}
                className={cn("basis-1/6", classNames?.item)}
              >
                {renderItem(item)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
}
