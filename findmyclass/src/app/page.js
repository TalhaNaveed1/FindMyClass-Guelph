"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import PathDisplay from "./components/pathDisplay";
import { fetchData } from "./utils/fetchData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [classData, setClassData] = useState({
    cardDescriptions: null,
    imageNames: null,
  });
  const [masterList, setMasterList] = useState([]);
  const [myKey, setMyKey] = useState(0);
  const [mapsCode, setMapsCode] = useState(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    const classCode = searchParams.get('classCode');
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
    setMapsCode(code);
    const data = await fetchData(code);
    console.log("DATA", data);
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
    console.log(tempMasterList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findPath(inputValue);
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full px-4 md:px-8">
      <div className="flex flex-col justify-center items-center text-center slide-in">
        <div className="flex">
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
          <em>
            Your guide to every class at the University of Guelph
          </em>
        </h3>
        <form className="flex slide-in w-full max-w-xs md:max-w-md" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-3 w-full h-12 md:h-16 rounded-xl"
            placeholder="Enter a class code..."
            onChange={updateInput}
            value={inputValue}
          />
        </form>

        <Link href="/allClasses" className="text-white font-sans font-bold mt-10 md:mt-20 relative slide-in">
          View all classes here &gt;&gt;&gt;
        </Link>
      </div>
      {masterList.length > 0 && (
        <PathDisplay key={myKey} masterList={masterList} mapsCode={mapsCode} className="slide-in" />
      )}
    </main>
  );
}

