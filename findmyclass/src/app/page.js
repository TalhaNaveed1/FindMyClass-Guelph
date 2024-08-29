"use client";

import React, { useState } from "react";
import "./globals.css";
import PathDisplay from "./components/pathDisplay";
import { fetchData } from "./utils/fetchData";
import Link from "next/link";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [classData, setClassData] = useState({
    cardDescriptions: null,
    imageNames: null,
  });
  const [masterList, setMasterList] = useState([]);
  const [myKey, setMyKey] = useState(0);
  const [mapsCode, setMapsCode] = useState(null);

  const updateInput = (e) => {
    setInputValue(e.target.value);
  };

  const findPath = async (e) => {
    e.preventDefault();
    const classCode = inputValue.replace(/\s+/g, "").toUpperCase();
    setMapsCode(classCode);
    const data = await fetchData(classCode);
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

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-row mt-10">
          <h1 className="text-white font-sans font-bold text-8xl">FindMy</h1>
          <h1 className="text-blue-700 font-sans font-bold text-8xl">
            <em>Class</em>
          </h1>
          <img
            src="/images/magnifiying.gif"
            alt="Magnifiying GIF"
            className="h-40 pb-15"
          />
        </div>
        <h3 className="text-white font-sans font-bold mb-4">
          <em>
            A step-by-step guide to every class at the University of Guelph
          </em>
        </h3>
        <form className="flex" onSubmit={findPath}>
          <input
            type="text"
            className="p-3 w-96 h-16 rounded-xl"
            placeholder="Enter a class code..."
            onChange={updateInput}
            value={inputValue}
          />
        </form>

        <Link href="/allClasses" className="text-white font-sans font-bold mt-20 relative">
          View all classes here &gt;&gt;&gt;
        </Link>
      </div>
      {masterList.length > 0 && (
        <PathDisplay key={myKey} masterList={masterList} mapsCode={mapsCode} />
      )}
    </main>
  );
}
