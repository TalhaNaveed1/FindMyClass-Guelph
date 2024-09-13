"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./globals.css";
import PathDisplay from "./components/pathDisplay";
import { fetchData } from "./utils/fetchData";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function PageContent() {
  const [inputValue, setInputValue] = useState("");
  const [classData, setClassData] = useState({
    cardDescriptions: null,
    imageNames: null,
  });
  const [masterList, setMasterList] = useState([]);
  const [myKey, setMyKey] = useState(0);
  const [mapsCode, setMapsCode] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const searchParams = useSearchParams();
  useEffect(() => {
    const classCode = searchParams.get("classCode");
    if (classCode) {
      setInputValue(classCode);
      findPath(classCode);
    }
  }, [searchParams]);

  const updateInput = (e) => {
    setInputValue(e.target.value);
  };

  const findPath = async (classCode) => {
    if (!classCode) return;
    const code = classCode.replace(/\s+/g, "").toUpperCase();
    const data = await fetchData(code);

    if (!data.cardDescriptions || !data.imageNames) {
      setIsAlertOpen(true);
      return;
    }

    setMapsCode(code);
    setClassData(data);
    createPath(data);
    setMyKey((prevKey) => prevKey + 1);
  };

  const createPath = (data) => {
    const tempMasterList = [];

    for (let index = 0; index < data.cardDescriptions.length; index++) {
      const tempList = [];
      tempList.push(
        index + 1,
        data.cardDescriptions[index],
        data.imageNames[index]
      );
      tempMasterList.push(tempList);
    }

    setMasterList(tempMasterList);
  };

  useEffect(() => {
    if (masterList.length > 0) {
      const scrollDistance = window.innerWidth >= 768 ? 800 : 400;
      window.scrollTo({
        top: scrollDistance,
        behavior: "smooth",
      });
    }
  }, [masterList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    findPath(inputValue);
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full px-4 md:px-8">
      <div className="flex flex-col justify-center items-center text-center slide-in">
        <div className="flex mt-10">
          <h1 className="text-white font-sans font-bold text-5xl md:text-8xl slide-in">
            FindMy
          </h1>
          <h1 className="text-blue-700 font-sans font-bold text-5xl md:text-8xl slide-in">
            <em>Class</em>
          </h1>
          <img
            src="/images/magnifiying.gif"
            alt="Magnifiying GIF"
            className="h-20 md:h-40 pb-15 slide-in"
          />
        </div>
        <h3 className="text-white font-sans font-bold text-sm md:text-2xl mb-4 slide-in">
          <em>Your guide to every class at the University of Guelph</em>
        </h3>
        <form
          className="flex slide-in w-full max-w-xs md:max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="p-3 w-full h-12 md:h-16 rounded-xl"
            placeholder="Enter a class code..."
            onChange={updateInput}
            value={inputValue}
          />
        </form>

        <Link
          href="/allClasses"
          className="text-white font-sans font-bold mt-10 md:mt-20 relative slide-in"
        >
          View all classes here &gt;&gt;&gt;
        </Link>
      </div>
      {masterList.length > 0 && (
        <PathDisplay
          key={myKey}
          masterList={masterList}
          mapsCode={mapsCode}
          className="slide-in"
        />
      )}

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="bg-black text-white border-0 w-[350px] md:w-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl mb-5 font-bold">Invalid Class Code</AlertDialogTitle>
            <AlertDialogDescription className="text-white text-lg">
              The class code is invalid. Please check and try again, or view the{" "}
              <Link
                href="/allClasses"
                className="text-white font-bold text-md"
              >
              full class list here
              </Link>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setIsAlertOpen(false)}
              className="bg-blue-700 text-white hover:bg-blue-600"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="bg-black text-white font-semibold flex text-center">Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}