import { BrandType, CarModelType } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/core/card";
import { Button } from "@/components/core/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardModelProps extends CarModelType {
  onClick?: () => void;
  thumbnails?: string;
}

export const CarModelCard = (props: CardModelProps) => {
  return (
    <Card
      onClick={props.onClick}
      className={cn("relative rounded-lg h-48 bg-transparent p-0 group", {
        "cursor-pointer": !!props.onClick,
      })}
    >
      <CardContent className="text-center w-full h-full content-center">
        <span className="text-xl text-white font-bold">{props.name}</span>
      </CardContent>
      <div className="absolute w-full h-full bg-black -z-20 rounded-lg overflow-hidden">
        <Image src={props.thumbnails ?? ""} alt={props.name} fill={true} />
      </div>
      <div className="absolute w-full h-full bg-black/65 -z-10 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300 ease-out"></div>
    </Card>
  );
};
