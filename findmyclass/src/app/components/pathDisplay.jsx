import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export default function PathDisplay({ masterList, carouselIndex }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <Carousel className="w-full max-w-screen-sm">
        <CarouselContent>
          {masterList.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="flex flex-col justify-center items-center bg-black border-0 shadow-2xl my-10 w-[650px]">
                <CardHeader>
                  <CardTitle>
                    <img
                      src={item[2]}
                      alt="Test"
                      className="w-[550px] h-[350px] object-cover mt-5"
                    />
                  </CardTitle>
                  <CardDescription>
                    <p className="text-white font-semibold font-sans text-2xl mt-5">
                      Step {item[0]}
                    </p>
                    <p className="text-white font-semibold font-sans text-2xl mt-5">
                      _______________
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-semibold font-sans text-2xl px-6">
                    {item[1]}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
