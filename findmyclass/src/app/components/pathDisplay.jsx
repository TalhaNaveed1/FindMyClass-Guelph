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
      <Card className="bg-black border-0 shadow-2xl mb-10">
        <CardHeader>
          <CardTitle>
            <img src="/class_images/test.png" alt="Test" className="w-84 h-64 object-cover"/>
          </CardTitle>
          <CardDescription>
            <p className="text-white">Card Description</p>
            </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white">Card Content</p>
        </CardContent>
        <CardFooter>
          <p className="text-white">Card Footer</p>
        </CardFooter>
      </Card>
      
    </div>
  );
}
