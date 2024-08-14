import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PathDisplay({
  inputValue,
  cardDescriptions,
  imageNames,
}) {

  return (
    <div className="flex flex-row items-center justify-center">
      <Card className="flex flex-col justify-center items-center bg-black border-0 shadow-2xl my-10 w-[650px]">
        <CardHeader>
          <CardTitle>
            {/* <img
              // src="/class_images/test.png"
              src={imageNames[0]}
              alt="Test"
              className="w-[550px] h-[350px] object-cover mt-5"
            /> */}
            {imageNames && imageNames.length > 0 ? (
              <img
                src={imageNames[0]}
                alt={`Image for ${inputValue}`}
                className="w-[550px] h-[350px] object-cover mt-5"
              />
            ) : (
              <img
                src="/class_images/test.png"
                alt="Test"
                className="w-[550px] h-[350px] object-cover mt-5"
              />
            )}
          </CardTitle>
          <CardDescription>
            <p className="text-white font-semibold font-sans text-2xl mt-5">
              #1
            </p>
            <p className="text-white font-semibold font-sans text-2xl mt-5">
              _______________
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {cardDescriptions && cardDescriptions.length > 0 ? (
            cardDescriptions.map((description, index) => (
              <p
                key={index}
                className="text-white font-semibold font-sans text-2xl px-6"
              >
                {description}
              </p>
            ))
          ) : (
            <p className="text-white font-semibold font-sans text-2xl px-6">
              No description available.
            </p>
          )}
          <p className="text-white">{inputValue}</p>
        </CardContent>
      </Card>
    </div>
  );
}
