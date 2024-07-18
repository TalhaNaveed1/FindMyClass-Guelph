import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PathDisplay() {
  return (
    <div>
      <Card className="flex flex-col justify-center items-center bg-black border-0 shadow-2xl my-10 w-[650px]">
        <CardHeader>
          <CardTitle>
            <img
              src="/class_images/test.png"
              alt="Test"
              className="w-[550px] h-[350px] object-cover mt-5"
            />
          </CardTitle>
          <CardDescription>
            <p className="text-white font-semibold font-sans text-2xl mt-5">#1</p>
            <p className="text-white font-semibold font-sans text-2xl mt-5">_______________</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white font-semibold font-sans text-2xl px-6">Make a right from the University Center and walk down</p>
        </CardContent>
      </Card>
    </div>
  );
}
