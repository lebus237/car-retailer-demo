import { BrandType } from "@/types";
import { Card, CardContent } from "@/components/core/card";
import { cn } from "@/lib/utils";

interface BrandCardProps extends BrandType {
  onClick?: () => void;
}

export const BrandCard = (props: BrandCardProps) => {
  return (
    <Card
      onClick={props.onClick}
      className={cn("rounded-lg h-48 bg-transparent border-green-300", {
        "cursor-pointer": !!props.onClick,
      })}
    >
      <CardContent className="content-center w-full h-full text-center">
        <span className="text-4xl text-white font-bold">{props.name}</span>
      </CardContent>
    </Card>
  );
};
