import React, { useEffect, useState } from "react";
import WalkTime from "./WalkTime";
import ClassMap from "./classMap";
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

export default function PathDisplay({ masterList, mapsCode }) {
  const [isPhoneView, setIsPhoneView] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const phoneView = (
    <div className="relative flex flex-col items-center justify-center">
      <Carousel className=" max-w-screen-sm mt-10 ml-32">
        <CarouselContent>
          {masterList.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="flex flex-col justify-center items-center bg-black border-0 shadow-2xl my-5 w-[350px] ml-20">
                <CardHeader>
                  <CardTitle>
                    <img
                      src={item[2]}
                      alt="Class Image"
                      className="w-[300px] h-[250px] object-cover"
                    />
                  </CardTitle>
                  <CardDescription>
                    <p className="text-white font-semibold font-sans text-lg mt-3">
                      Step {item[0]}
                    </p>
                    <p className="text-white font-semibold font-sans text-lg mt-3">
                      _______________
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-semibold font-sans text-lg px-4">
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
      <div className="mt-5">
        <WalkTime view={1} />
        <ClassMap mapsCode={mapsCode} view={1} />
      </div>
    </div>
  );

  const desktopView = (
    <div className="flex flex-row items-center gap-20">
      <div className="mr-12">
        <WalkTime view={2} />
        <ClassMap mapsCode={mapsCode} view={2} />
      </div>
      <Carousel className="w-full max-w-screen-sm ml-12 mt-20">
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

  return isPhoneView ? phoneView : desktopView;
}
