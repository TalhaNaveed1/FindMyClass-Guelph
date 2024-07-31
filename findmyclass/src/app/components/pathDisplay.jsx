import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PathDisplay({ inputValue }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center bg-black shadow-2xl my-10 py-10 rounded-xl">
        <div>
          <img
            src="/class_images/test.png"
            alt="Test"
            className="w-[550px] h-[350px] object-cover"
          />
        </div>
        <div className="text-white font-semibold font-sans text-2xl mt-5">
          <p>#1</p>
          <div className="flex justify-center">
            <p className="w-8 border-t-2 border-white mt-10"></p>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold font-sans text-2xl px-8 mt-10">
            Make a right from the University Center and walk down
          </p>
        </div>
      </div>
    </div>
  );
}


{/* <Card className="flex flex-col justify-center items-center bg-black border-0 shadow-2xl my-10 w-[650px] mr-40">
<CardHeader>
  <CardTitle>
    <img
      src="/class_images/test.png"
      alt="Test"
      className="w-[550px] h-[350px] object-cover mt-5"
    />
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
  <p className="text-white font-semibold font-sans text-2xl px-6">
    Make a right from the University Center and walk down
  </p>
  <p className="text-white">{inputValue}</p>
</CardContent>
</Card> */}