"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function AllClasses() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full">
      <div>
        <h1 className="text-white font-sans font-bold text-8xl my-16">
          The Full Class List
        </h1>
        <Accordion type="single" collapsible className="mb-10">
          <AccordionItem
            value="item-1"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Alexander (ALEX)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=ALEX100" className="classLink">
                  ALEX100
                </Link>
                <Link href="/?classCode=ALEX200" className="classLink">
                  ALEX200
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Thornbrough (THRN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=THRN1002" className="classLink">
                  THRN1002
                </Link>
                <Link href="/?classCode=THRN1004" className="classLink">
                  THRN1004
                </Link>
                <Link href="/?classCode=THRN1006" className="classLink">
                  THRN1006
                </Link>
                <Link href="/?classCode=THRN1007" className="classLink">
                  THRN1007
                </Link>
                <Link href="/?classCode=THRN1008" className="classLink">
                  THRN1008
                </Link>
                <Link href="/?classCode=THRN1009" className="classLink">
                  THRN1009
                </Link>
                <Link href="/?classCode=THRN1012" className="classLink">
                  THRN1012
                </Link>
                <Link href="/?classCode=THRN1013" className="classLink">
                  THRN1013
                </Link>
                <Link href="/?classCode=THRN1015" className="classLink">
                  THRN1015
                </Link>
                <Link href="/?classCode=THRN1025" className="classLink">
                  THRN1025
                </Link>
                <Link href="/?classCode=THRN1027" className="classLink">
                  THRN1027
                </Link>
                <Link href="/?classCode=THRN1200" className="classLink">
                  THRN1200
                </Link>
                <Link href="/?classCode=THRN1307" className="classLink">
                  THRN1307
                </Link>
                <Link href="/?classCode=THRN1311" className="classLink">
                  THRN1311
                </Link>
                <Link href="/?classCode=THRN1313" className="classLink">
                  THRN1313
                </Link>
                <Link href="/?classCode=THRN1319" className="classLink">
                  THRN1319
                </Link>
                <Link href="/?classCode=THRN1365" className="classLink">
                  THRN1365
                </Link>
                <Link href="/?classCode=THRN1424" className="classLink">
                  THRN1424
                </Link>
                <Link href="/?classCode=THRN1425" className="classLink">
                  THRN1425
                </Link>
                <Link href="/?classCode=THRN1426" className="classLink">
                  THRN1426
                </Link>
                <Link href="/?classCode=THRN1427" className="classLink">
                  THRN1427
                </Link>
                <Link href="/?classCode=THRN1428" className="classLink">
                  THRN1428
                </Link>
                <Link href="/?classCode=THRN1429" className="classLink">
                  THRN1429
                </Link>
                <Link href="/?classCode=THRN1430" className="classLink">
                  THRN1430
                </Link>
                <Link href="/?classCode=THRN1432" className="classLink">
                  THRN1432
                </Link>
                <Link href="/?classCode=THRN1435" className="classLink">
                  THRN1435
                </Link>
                <Link href="/?classCode=THRN2131" className="classLink">
                  THRN2131
                </Link>
                <Link href="/?classCode=THRN2133" className="classLink">
                  THRN2133
                </Link>
                <Link href="/?classCode=THRN2135" className="classLink">
                  THRN2135
                </Link>
                <Link href="/?classCode=THRN2307" className="classLink">
                  THRN2307
                </Link>
                <Link href="/?classCode=THRN2308" className="classLink">
                  THRN2308
                </Link>
                <Link href="/?classCode=THRN2313" className="classLink">
                  THRN2313
                </Link>
                <Link href="/?classCode=THRN2319" className="classLink">
                  THRN2319
                </Link>
                <Link href="/?classCode=THRN2336" className="classLink">
                  THRN2336
                </Link>
                <Link href="/?classCode=THRN2504" className="classLink">
                  THRN2504
                </Link>
                <Link href="/?classCode=THRN3401" className="classLink">
                  THRN3401
                </Link>
                <Link href="/?classCode=THRN3402" className="classLink">
                  THRN3402
                </Link>
                <Link href="/?classCode=THRN3403" className="classLink">
                  THRN3403
                </Link>
                <Link href="/?classCode=THRN3404" className="classLink">
                  THRN3404
                </Link>
                <Link href="/?classCode=THRN3405" className="classLink">
                  THRN3405
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Rozanski (ROZH)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=ROZH101" className="classLink">
                  ROZH101
                </Link>
                <Link href="/?classCode=ROZH102" className="classLink">
                  ROZH102
                </Link>
                <Link href="/?classCode=ROZH103" className="classLink">
                  ROZH103
                </Link>
                <Link href="/?classCode=ROZH104" className="classLink">
                  ROZH104
                </Link>
                <Link href="/?classCode=ROZH105" className="classLink">
                  ROZH105
                </Link>
                <Link href="/?classCode=ROZH106" className="classLink">
                  ROZH106
                </Link>
                <Link href="/?classCode=ROZH108" className="classLink">
                  ROZH108
                </Link>
                <Link href="/?classCode=ROZH109" className="classLink">
                  ROZH109
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Animal Nutrition (ANNU)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=ANNU102" className="classLink">
                  ANNU102
                </Link>
                <Link href="/?classCode=ANNU103" className="classLink">
                  ANNU103
                </Link>
                <Link href="/?classCode=ANNU104" className="classLink">
                  ANNU104
                </Link>
                <Link href="/?classCode=ANNU105" className="classLink">
                  ANNU105
                </Link>
                <Link href="/?classCode=ANNU107" className="classLink">
                  ANNU107
                </Link>
                <Link href="/?classCode=ANNU110" className="classLink">
                  ANNU110
                </Link>
                <Link href="/?classCode=ANNU115" className="classLink">
                  ANNU115
                </Link>
                <Link href="/?classCode=ANNU116" className="classLink">
                  ANNU116
                </Link>
                <Link href="/?classCode=ANNU129" className="classLink">
                  ANNU129
                </Link>
                <Link href="/?classCode=ANNU130" className="classLink">
                  ANNU130
                </Link>
                <Link href="/?classCode=ANNU131" className="classLink">
                  ANNU131
                </Link>
                <Link href="/?classCode=ANNU133" className="classLink">
                  ANNU133
                </Link>
                <Link href="/?classCode=ANNU141" className="classLink">
                  ANNU141
                </Link>
                <Link href="/?classCode=ANNU156" className="classLink">
                  ANNU156
                </Link>
                <Link href="/?classCode=ANNU204" className="classLink">
                  ANNU204
                </Link>
                <Link href="/?classCode=ANNU205" className="classLink">
                  ANNU205
                </Link>
                <Link href="/?classCode=ANNU208" className="classLink">
                  ANNU208
                </Link>
                <Link href="/?classCode=ANNU212" className="classLink">
                  ANNU212
                </Link>
                <Link href="/?classCode=ANNU214" className="classLink">
                  ANNU214
                </Link>
                <Link href="/?classCode=ANNU215" className="classLink">
                  ANNU215
                </Link>
                <Link href="/?classCode=ANNU216" className="classLink">
                  ANNU216
                </Link>
                <Link href="/?classCode=ANNU217" className="classLink">
                  ANNU217
                </Link>
                <Link href="/?classCode=ANNU218" className="classLink">
                  ANNU218
                </Link>
                <Link href="/?classCode=ANNU220" className="classLink">
                  ANNU220
                </Link>
                <Link href="/?classCode=ANNU302" className="classLink">
                  ANNU302
                </Link>
                <Link href="/?classCode=ANNU305" className="classLink">
                  ANNU305
                </Link>
                <Link href="/?classCode=ANNU306" className="classLink">
                  ANNU306
                </Link>
                <Link href="/?classCode=ANNU327" className="classLink">
                  ANNU327
                </Link>
                <Link href="/?classCode=ANNU337" className="classLink">
                  ANNU337
                </Link>
                <Link href="/?classCode=ANNU355" className="classLink">
                  ANNU355
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              War Memorial (WMEM)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=WMEM" className="classLink">
                  WMEM
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Science Complex (SCIE)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=SCIE1301" className="classLink">
                  SCIE1301
                </Link>
                <Link href="/?classCode=SCIE1304" className="classLink">
                  SCIE1304
                </Link>
                <Link href="/?classCode=SCIE1305" className="classLink">
                  SCIE1305
                </Link>
                <Link href="/?classCode=SCIE1401" className="classLink">
                  SCIE1401
                </Link>
                <Link href="/?classCode=SCIE1403" className="classLink">
                  SCIE1403
                </Link>
                <Link href="/?classCode=SCIE1404" className="classLink">
                  SCIE1404
                </Link>
                <Link href="/?classCode=SCIE1405" className="classLink">
                  SCIE1405
                </Link>
                <Link href="/?classCode=SCIE1406" className="classLink">
                  SCIE1406
                </Link>
                <Link href="/?classCode=SCIE1407" className="classLink">
                  SCIE1407
                </Link>
                <Link href="/?classCode=SCIE1408" className="classLink">
                  SCIE1408
                </Link>
                <Link href="/?classCode=SCIE1409" className="classLink">
                  SCIE1409
                </Link>
                <Link href="/?classCode=SCIE1410" className="classLink">
                  SCIE1410
                </Link>
                <Link href="/?classCode=SCIE2101" className="classLink">
                  SCIE2101
                </Link>
                <Link href="/?classCode=SCIE2102" className="classLink">
                  SCIE2102
                </Link>
                <Link href="/?classCode=SCIE2103" className="classLink">
                  SCIE2103
                </Link>
                <Link href="/?classCode=SCIE2104" className="classLink">
                  SCIE2104
                </Link>
                <Link href="/?classCode=SCIE2105" className="classLink">
                  SCIE2105
                </Link>
                <Link href="/?classCode=SCIE2106" className="classLink">
                  SCIE2106
                </Link>
                <Link href="/?classCode=SCIE2108" className="classLink">
                  SCIE2108
                </Link>
                <Link href="/?classCode=SCIE2109" className="classLink">
                  SCIE2109
                </Link>
                <Link href="/?classCode=SCIE2110" className="classLink">
                  SCIE2110
                </Link>
                <Link href="/?classCode=SCIE2111" className="classLink">
                  SCIE2111
                </Link>
                <Link href="/?classCode=SCIE2112" className="classLink">
                  SCIE2112
                </Link>
                <Link href="/?classCode=SCIE2303" className="classLink">
                  SCIE2303
                </Link>
                <Link href="/?classCode=SCIE2304" className="classLink">
                  SCIE2304
                </Link>
                <Link href="/?classCode=SCIE2305" className="classLink">
                  SCIE2305
                </Link>
                <Link href="/?classCode=SCIE2306" className="classLink">
                  SCIE2306
                </Link>
                <Link href="/?classCode=SCIE2307" className="classLink">
                  SCIE2307
                </Link>
                <Link href="/?classCode=SCIE2308" className="classLink">
                  SCIE2308
                </Link>
                <Link href="/?classCode=SCIE2309" className="classLink">
                  SCIE2309
                </Link>
                <Link href="/?classCode=SCIE2312" className="classLink">
                  SCIE2312
                </Link>
                <Link href="/?classCode=SCIE2313" className="classLink">
                  SCIE2313
                </Link>
                <Link href="/?classCode=SCIE2314" className="classLink">
                  SCIE2314
                </Link>
                <Link href="/?classCode=SCIE2315" className="classLink">
                  SCIE2315
                </Link>
                <Link href="/?classCode=SCIE3101" className="classLink">
                  SCIE3101
                </Link>
                <Link href="/?classCode=SCIE3102A" className="classLink">
                  SCIE3102A
                </Link>
                <Link href="/?classCode=SCIE3103" className="classLink">
                  SCIE3103
                </Link>
                <Link href="/?classCode=SCIE3104" className="classLink">
                  SCIE3104
                </Link>
                <Link href="/?classCode=SCIE3105" className="classLink">
                  SCIE3105
                </Link>
                <Link href="/?classCode=SCIE3106" className="classLink">
                  SCIE3106
                </Link>
                <Link href="/?classCode=SCIE3108" className="classLink">
                  SCIE3108
                </Link>
                <Link href="/?classCode=SCIE3109" className="classLink">
                  SCIE3109
                </Link>
                <Link href="/?classCode=SCIE3110" className="classLink">
                  SCIE3110
                </Link>
                <Link href="/?classCode=SCIE3111" className="classLink">
                  SCIE3111
                </Link>
                <Link href="/?classCode=SCIE3112" className="classLink">
                  SCIE3112
                </Link>
                <Link href="/?classCode=SCIE3303" className="classLink">
                  SCIE3303
                </Link>
                <Link href="/?classCode=SCIE3304" className="classLink">
                  SCIE3304
                </Link>
                <Link href="/?classCode=SCIE3305" className="classLink">
                  SCIE3305
                </Link>
                <Link href="/?classCode=SCIE3306" className="classLink">
                  SCIE3306
                </Link>
                <Link href="/?classCode=SCIE3307" className="classLink">
                  SCIE3307
                </Link>
                <Link href="/?classCode=SCIE3308" className="classLink">
                  SCIE3308
                </Link>
                <Link href="/?classCode=SCIE3309" className="classLink">
                  SCIE3309
                </Link>
                <Link href="/?classCode=SCIE3310" className="classLink">
                  SCIE3310
                </Link>
                <Link href="/?classCode=SCIE3314" className="classLink">
                  SCIE3314
                </Link>
                <Link href="/?classCode=SCIE3315" className="classLink">
                  SCIE3315
                </Link>
                <Link href="/?classCode=SCIE3316" className="classLink">
                  SCIE3316
                </Link>
                <Link href="/?classCode=SCIE3317" className="classLink">
                  SCIE3317
                </Link>
                <Link href="/?classCode=SCIE4101" className="classLink">
                  SCIE4101
                </Link>
                <Link href="/?classCode=SCIE4102" className="classLink">
                  SCIE4102
                </Link>
                <Link href="/?classCode=SCIE4103A" className="classLink">
                  SCIE4103A
                </Link>
                <Link href="/?classCode=SCIE4104A" className="classLink">
                  SCIE4104A
                </Link>
                <Link href="/?classCode=SCIE4108" className="classLink">
                  SCIE4108
                </Link>
                <Link href="/?classCode=SCIE4109" className="classLink">
                  SCIE4109
                </Link>
                <Link href="/?classCode=SCIE4110" className="classLink">
                  SCIE4110
                </Link>
                <Link href="/?classCode=SCIE4111" className="classLink">
                  SCIE4111
                </Link>
                <Link href="/?classCode=SCIE4112" className="classLink">
                  SCIE4112
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacLachlan (MCLN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=MCLN101" className="classLink">
                  MCLN 101
                </Link>
                <Link href="/?classCode=MCLN102" className="classLink">
                  MCLN 102
                </Link>
                <Link href="/?classCode=MCLN103" className="classLink">
                  MCLN 103
                </Link>
                <Link href="/?classCode=MCLN107" className="classLink">
                  MCLN 107
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacNaughton (MACN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=MACN8" className="classLink">
                  MACN 8
                </Link>
                <Link href="/?classCode=MACN9" className="classLink">
                  MACN 9
                </Link>
                <Link href="/?classCode=MACN10" className="classLink">
                  MACN 10
                </Link>
                <Link href="/?classCode=MACN12" className="classLink">
                  MACN 12
                </Link>
                <Link href="/?classCode=MACN13" className="classLink">
                  MACN 13
                </Link>
                <Link href="/?classCode=MACN14" className="classLink">
                  MACN 14
                </Link>
                <Link href="/?classCode=MACN15" className="classLink">
                  MACN 15
                </Link>
                <Link href="/?classCode=MACN16" className="classLink">
                  MACN 16
                </Link>
                <Link href="/?classCode=MACN17" className="classLink">
                  MACN 17
                </Link>
                <Link href="/?classCode=MACN18" className="classLink">
                  MACN 18
                </Link>
                <Link href="/?classCode=MACN20A" className="classLink">
                  MACN 20A
                </Link>
                <Link href="/?classCode=MACN22" className="classLink">
                  MACN 22
                </Link>
                <Link href="/?classCode=MACN23" className="classLink">
                  MACN 23
                </Link>
                <Link href="/?classCode=MACN24" className="classLink">
                  MACN 24
                </Link>
                <Link href="/?classCode=MACN25" className="classLink">
                  MACN 25
                </Link>
                <Link href="/?classCode=MACN30" className="classLink">
                  MACN 30
                </Link>
                <Link href="/?classCode=MACN54" className="classLink">
                  MACN 54
                </Link>
                <Link href="/?classCode=MACN55" className="classLink">
                  MACN 55
                </Link>
                <Link href="/?classCode=MACN56" className="classLink">
                  MACN 56
                </Link>
                <Link href="/?classCode=MACN57" className="classLink">
                  MACN 57
                </Link>
                <Link href="/?classCode=MACN58" className="classLink">
                  MACN 58
                </Link>
                <Link href="/?classCode=MACN101" className="classLink">
                  MACN 101
                </Link>
                <Link href="/?classCode=MACN104" className="classLink">
                  MACN 104
                </Link>
                <Link href="/?classCode=MACN105" className="classLink">
                  MACN 105
                </Link>
                <Link href="/?classCode=MACN113" className="classLink">
                  MACN 113
                </Link>
                <Link href="/?classCode=MACN114" className="classLink">
                  MACN 114
                </Link>
                <Link href="/?classCode=MACN118" className="classLink">
                  MACN 118
                </Link>
                <Link href="/?classCode=MACN120" className="classLink">
                  MACN 120
                </Link>
                <Link href="/?classCode=MACN121" className="classLink">
                  MACN 121
                </Link>
                <Link href="/?classCode=MACN125" className="classLink">
                  MACN 125
                </Link>
                <Link href="/?classCode=MACN128" className="classLink">
                  MACN 128
                </Link>
                <Link href="/?classCode=MACN129" className="classLink">
                  MACN 129
                </Link>
                <Link href="/?classCode=MACN130" className="classLink">
                  MACN 130
                </Link>
                <Link href="/?classCode=MACN131" className="classLink">
                  MACN 131
                </Link>
                <Link href="/?classCode=MACN132" className="classLink">
                  MACN 132
                </Link>
                <Link href="/?classCode=MACN133" className="classLink">
                  MACN 133
                </Link>
                <Link href="/?classCode=MACN135" className="classLink">
                  MACN 135
                </Link>
                <Link href="/?classCode=MACN136" className="classLink">
                  MACN 136
                </Link>
                <Link href="/?classCode=MACN202" className="classLink">
                  MACN 202
                </Link>
                <Link href="/?classCode=MACN203" className="classLink">
                  MACN 203
                </Link>
                <Link href="/?classCode=MACN222" className="classLink">
                  MACN 222
                </Link>
                <Link href="/?classCode=MACN226" className="classLink">
                  MACN 226
                </Link>
                <Link href="/?classCode=MACN228" className="classLink">
                  MACN 228
                </Link>
                <Link href="/?classCode=MACN230" className="classLink">
                  MACN 230
                </Link>
                <Link href="/?classCode=MACN231" className="classLink">
                  MACN 231
                </Link>
                <Link href="/?classCode=MACN232" className="classLink">
                  MACN 232
                </Link>
                <Link href="/?classCode=MACN234" className="classLink">
                  MACN 234
                </Link>
                <Link href="/?classCode=MACN237" className="classLink">
                  MACN 237
                </Link>
                <Link href="/?classCode=MACN238" className="classLink">
                  MACN 238
                </Link>
                <Link href="/?classCode=MACN239" className="classLink">
                  MACN 239
                </Link>
                <Link href="/?classCode=MACN240" className="classLink">
                  MACN 240
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-9"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              H.L Hutt (HUTT)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=HUTT233" className="classLink">
                  HUTT 233
                </Link>
                <Link href="/?classCode=HUTT234" className="classLink">
                  HUTT 234
                </Link>
                <Link href="/?classCode=HUTT235" className="classLink">
                  HUTT 235
                </Link>
                <Link href="/?classCode=HUTT236" className="classLink">
                  HUTT 236
                </Link>
                <Link href="/?classCode=HUTT240A" className="classLink">
                  HUTT 240A
                </Link>
                <Link href="/?classCode=HUTT240B" className="classLink">
                  HUTT 240B
                </Link>
                <Link href="/?classCode=HUTT240C" className="classLink">
                  HUTT 240C
                </Link>
                <Link href="/?classCode=HUTT240D" className="classLink">
                  HUTT 240D
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-10"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacKinnon (MCKN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=MCKN16" className="classLink">
                  MCKN 16
                </Link>
                <Link href="/?classCode=MCKN18" className="classLink">
                  MCKN 18
                </Link>
                <Link href="/?classCode=MCKN19" className="classLink">
                  MCKN 19
                </Link>
                <Link href="/?classCode=MCKN19A" className="classLink">
                  MCKN 19A
                </Link>
                <Link href="/?classCode=MCKN20" className="classLink">
                  MCKN 20
                </Link>
                <Link href="/?classCode=MCKN21" className="classLink">
                  MCKN 21
                </Link>
                <Link href="/?classCode=MCKN24" className="classLink">
                  MCKN 24
                </Link>
                <Link href="/?classCode=MCKN25A" className="classLink">
                  MCKN 25A
                </Link>
                <Link href="/?classCode=MCKN25B" className="classLink">
                  MCKN 25B
                </Link>
                <Link href="/?classCode=MCKN26" className="classLink">
                  MCKN 26
                </Link>
                <Link href="/?classCode=MCKN26A" className="classLink">
                  MCKN 26A
                </Link>
                <Link href="/?classCode=MCKN27" className="classLink">
                  MCKN 27
                </Link>
                <Link href="/?classCode=MCKN28" className="classLink">
                  MCKN 28
                </Link>
                <Link href="/?classCode=MCKN29" className="classLink">
                  MCKN 29
                </Link>
                <Link href="/?classCode=MCKN30B" className="classLink">
                  MCKN 30B
                </Link>
                <Link href="/?classCode=MCKN31" className="classLink">
                  MCKN 31
                </Link>
                <Link href="/?classCode=MCKN101" className="classLink">
                  MCKN 101
                </Link>
                <Link href="/?classCode=MCKN103" className="classLink">
                  MCKN 103
                </Link>
                <Link href="/?classCode=MCKN108" className="classLink">
                  MCKN 108
                </Link>
                <Link href="/?classCode=MCKN109" className="classLink">
                  MCKN 109
                </Link>
                <Link href="/?classCode=MCKN114" className="classLink">
                  MCKN 114
                </Link>
                <Link href="/?classCode=MCKN115" className="classLink">
                  MCKN 115
                </Link>
                <Link href="/?classCode=MCKN116" className="classLink">
                  MCKN 116
                </Link>
                <Link href="/?classCode=MCKN117" className="classLink">
                  MCKN 117
                </Link>
                <Link href="/?classCode=MCKN118" className="classLink">
                  MCKN 118
                </Link>
                <Link href="/?classCode=MCKN118A" className="classLink">
                  MCKN 118A
                </Link>
                <Link href="/?classCode=MCKN119" className="classLink">
                  MCKN 119
                </Link>
                <Link href="/?classCode=MCKN119A" className="classLink">
                  MCKN 119A
                </Link>
                <Link href="/?classCode=MCKN120" className="classLink">
                  MCKN 120
                </Link>
                <Link href="/?classCode=MCKN121" className="classLink">
                  MCKN 121
                </Link>
                <Link href="/?classCode=MCKN128" className="classLink">
                  MCKN 128
                </Link>
                <Link href="/?classCode=MCKN129" className="classLink">
                  MCKN 129
                </Link>
                <Link href="/?classCode=MCKN130" className="classLink">
                  MCKN 130
                </Link>
                <Link href="/?classCode=MCKN131" className="classLink">
                  MCKN 131
                </Link>
                <Link href="/?classCode=MCKN132" className="classLink">
                  MCKN 132
                </Link>
                <Link href="/?classCode=MCKN223" className="classLink">
                  MCKN 223
                </Link>
                <Link href="/?classCode=MCKN224" className="classLink">
                  MCKN 224
                </Link>
                <Link href="/?classCode=MCKN225" className="classLink">
                  MCKN 225
                </Link>
                <Link href="/?classCode=MCKN226" className="classLink">
                  MCKN 226
                </Link>
                <Link href="/?classCode=MCKN227" className="classLink">
                  MCKN 227
                </Link>
                <Link href="/?classCode=MCKN228" className="classLink">
                  MCKN 228
                </Link>
                <Link href="/?classCode=MCKN229" className="classLink">
                  MCKN 229
                </Link>
                <Link href="/?classCode=MCKN230" className="classLink">
                  MCKN 230
                </Link>
                <Link href="/?classCode=MCKN231" className="classLink">
                  MCKN 231
                </Link>
                <Link href="/?classCode=MCKN232" className="classLink">
                  MCKN 232
                </Link>
                <Link href="/?classCode=MCKN233" className="classLink">
                  MCKN 233
                </Link>
                <Link href="/?classCode=MCKN234" className="classLink">
                  MCKN 234
                </Link>
                <Link href="/?classCode=MCKN235" className="classLink">
                  MCKN 235
                </Link>
                <Link href="/?classCode=MCKN236" className="classLink">
                  MCKN 236
                </Link>
                <Link href="/?classCode=MCKN237" className="classLink">
                  MCKN 237
                </Link>
                <Link href="/?classCode=MCKN238" className="classLink">
                  MCKN 238
                </Link>
                <Link href="/?classCode=MCKN303" className="classLink">
                  MCKN 303
                </Link>
                <Link href="/?classCode=MCKN304" className="classLink">
                  MCKN 304
                </Link>
                <Link href="/?classCode=MCKN305" className="classLink">
                  MCKN 305
                </Link>
                <Link href="/?classCode=MCKN306" className="classLink">
                  MCKN 306
                </Link>
                <Link href="/?classCode=MCKN307" className="classLink">
                  MCKN 307
                </Link>
                <Link href="/?classCode=MCKN308" className="classLink">
                  MCKN 308
                </Link>
                <Link href="/?classCode=MCKN309" className="classLink">
                  MCKN 309
                </Link>
                <Link href="/?classCode=MCKN310" className="classLink">
                  MCKN 310
                </Link>
                <Link href="/?classCode=MCKN311" className="classLink">
                  MCKN 311
                </Link>
                <Link href="/?classCode=MCKN312" className="classLink">
                  MCKN 312
                </Link>
                <Link href="/?classCode=MCKN313" className="classLink">
                  MCKN 313
                </Link>
                <Link href="/?classCode=MCKN314" className="classLink">
                  MCKN 314
                </Link>
                <Link href="/?classCode=MCKN315" className="classLink">
                  MCKN 315
                </Link>
                <Link href="/?classCode=MCKN316" className="classLink">
                  MCKN 316
                </Link>
                <Link href="/?classCode=MCKN317" className="classLink">
                  MCKN 317
                </Link>
                <Link href="/?classCode=MCKN318" className="classLink">
                  MCKN 318
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-11"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Macdonald Institute (MINS)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=MINSB3" className="classLink">
                  MINS B3
                </Link>
                <Link href="/?classCode=MINSB5" className="classLink">
                  MINS B5
                </Link>
                <Link href="/?classCode=MINSB7" className="classLink">
                  MINS B7
                </Link>
                <Link href="/?classCode=MINSB11" className="classLink">
                  MINS B11
                </Link>
                <Link href="/?classCode=MINSB13" className="classLink">
                  MINS B13
                </Link>
                <Link href="/?classCode=MINSB17" className="classLink">
                  MINS B17
                </Link>
                <Link href="/?classCode=MINSB23" className="classLink">
                  MINS B23
                </Link>
                <Link href="/?classCode=MINSB33" className="classLink">
                  MINS B33
                </Link>
                <Link href="/?classCode=MINSB37" className="classLink">
                  MINS B37
                </Link>
                <Link href="/?classCode=MINS103" className="classLink">
                  MINS 103
                </Link>
                <Link href="/?classCode=MINS106" className="classLink">
                  MINS 106
                </Link>
                <Link href="/?classCode=MINS 206" className="classLink">
                  MINS 206
                </Link>
                <Link href="/?classCode=MINS 214" className="classLink">
                  MINS 214
                </Link>
                <Link href="/?classCode=MINS 229" className="classLink">
                  MINS 229
                </Link>
                <Link href="/?classCode=MINS 235" className="classLink">
                  MINS 235
                </Link>
                <Link href="/?classCode=MINS 237" className="classLink">
                  MINS 237
                </Link>
                <Link href="/?classCode=MINS 239" className="classLink">
                  MINS 239
                </Link>
                <Link href="/?classCode=MINS 245" className="classLink">
                  MINS 245
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-12"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Crop Science (CRSC)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              <div className="flex flex-col">
                <Link href="/?classCode=CRSC101" className="classLink">
                  CRSC 101
                </Link>
                <Link href="/?classCode=CRSC104" className="classLink">
                  CRSC 104
                </Link>
                <Link href="/?classCode=CRSC105" className="classLink">
                  CRSC 105
                </Link>
                <Link href="/?classCode=CRSC106" className="classLink">
                  CRSC 106
                </Link>
                <Link href="/?classCode=CRSC107" className="classLink">
                  CRSC 107
                </Link>
                <Link href="/?classCode=CRSC109" className="classLink">
                  CRSC 109
                </Link>
                <Link href="/?classCode=CRSC110" className="classLink">
                  CRSC 110
                </Link>
                <Link href="/?classCode=CRSC111" className="classLink">
                  CRSC 111
                </Link>
                <Link href="/?classCode=CRSC112" className="classLink">
                  CRSC 112
                </Link>
                <Link href="/?classCode=CRSC113" className="classLink">
                  CRSC 113
                </Link>
                <Link href="/?classCode=CRSC114" className="classLink">
                  CRSC 114
                </Link>
                <Link href="/?classCode=CRSC115" className="classLink">
                  CRSC 115
                </Link>
                <Link href="/?classCode=CRSC116" className="classLink">
                  CRSC 116
                </Link>
                <Link href="/?classCode=CRSC117" className="classLink">
                  CRSC 117
                </Link>
                <Link href="/?classCode=CRSC118" className="classLink">
                  CRSC 118
                </Link>
                <Link href="/?classCode=CRSC119" className="classLink">
                  CRSC 119
                </Link>
                <Link href="/?classCode=CRSC121A" className="classLink">
                  CRSC 121A
                </Link>
                <Link href="/?classCode=CRSC122" className="classLink">
                  CRSC 122
                </Link>
                <Link href="/?classCode=CRSC123" className="classLink">
                  CRSC 123
                </Link>
                <Link href="/?classCode=CRSC124" className="classLink">
                  CRSC 124
                </Link>
                <Link href="/?classCode=CRSC127" className="classLink">
                  CRSC 127
                </Link>
                <Link href="/?classCode=CRSC133" className="classLink">
                  CRSC 133
                </Link>
                <Link href="/?classCode=CRSC134" className="classLink">
                  CRSC 134
                </Link>
                <Link href="/?classCode=CRSC136" className="classLink">
                  CRSC 136
                </Link>
                <Link href="/?classCode=CRSC138" className="classLink">
                  CRSC 138
                </Link>
                <Link href="/?classCode=CRSC139" className="classLink">
                  CRSC 139
                </Link>
                <Link href="/?classCode=CRSC140" className="classLink">
                  CRSC 140
                </Link>
                <Link href="/?classCode=CRSC141" className="classLink">
                  CRSC 141
                </Link>
                <Link href="/?classCode=CRSC151" className="classLink">
                  CRSC 151
                </Link>
                <Link href="/?classCode=CRSC205" className="classLink">
                  CRSC 205
                </Link>
                <Link href="/?classCode=CRSC210" className="classLink">
                  CRSC 210
                </Link>
                <Link href="/?classCode=CRSC216" className="classLink">
                  CRSC 216
                </Link>
                <Link href="/?classCode=CRSC219" className="classLink">
                  CRSC 219
                </Link>
                <Link href="/?classCode=CRSC222" className="classLink">
                  CRSC 222
                </Link>
                <Link href="/?classCode=CRSC225" className="classLink">
                  CRSC 225
                </Link>
                <Link href="/?classCode=CRSC302" className="classLink">
                  CRSC 302
                </Link>
                <Link href="/?classCode=CRSC307" className="classLink">
                  CRSC 307
                </Link>
                <Link href="/?classCode=CRSC308" className="classLink">
                  CRSC 308
                </Link>
                <Link href="/?classCode=CRSC310" className="classLink">
                  CRSC 310
                </Link>
                <Link href="/?classCode=CRSC318" className="classLink">
                  CRSC 318
                </Link>
                <Link href="/?classCode=CRSC322" className="classLink">
                  CRSC 322
                </Link>
                <Link href="/?classCode=CRSC403" className="classLink">
                  CRSC 403
                </Link>
                <Link href="/?classCode=CRSC411" className="classLink">
                  CRSC 411
                </Link>
                <Link href="/?classCode=CRSC415" className="classLink">
                  CRSC 415
                </Link>
                <Link href="/?classCode=CRSC418" className="classLink">
                  CRSC 418
                </Link>
                <Link href="/?classCode=CRSC419" className="classLink">
                  CRSC 419
                </Link>
                <Link href="/?classCode=CRSC426" className="classLink">
                  CRSC 426
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-13"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Richards (RICH)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
            <div className="flex flex-col">
                <Link href="/?classCode=RICH2520" className="classLink">
                  RICH 2520
                </Link>
                <Link href="/?classCode=RICH2529" className="classLink">
                  RICH 2529
                </Link>
                <Link href="/?classCode=RICH2531" className="classLink">
                  RICH 2531
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-14"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Food Science (FS)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
            <div className="flex flex-col">
                <Link href="/?classCode=FS102" className="classLink">
                  FS 102
                </Link>
                <Link href="/?classCode=FS128" className="classLink">
                  FS 128
                </Link>
                <Link href="/?classCode=FS129" className="classLink">
                  FS 129
                </Link>
                <Link href="/?classCode=FS241" className="classLink">
                  FS 241
                </Link>
                <Link href="/?classCode=FS246" className="classLink">
                  FS 246
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-15"
            className={`mb-4 ${animate ? "slide-in" : ""}`}
          >
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Library
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
