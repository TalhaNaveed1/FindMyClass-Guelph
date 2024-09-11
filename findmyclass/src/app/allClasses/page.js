import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function AllClasses() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full">
      <div>
        <h1 className="text-white font-sans font-bold text-8xl my-16">
          The Full Class List
        </h1>
        <Accordion type="single" collapsible className="mb-10">
          <AccordionItem value="item-1" className="mb-4">
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
          <AccordionItem value="item-2" className="mb-4">
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
          <AccordionItem value="item-3" className="mb-4">
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
          <AccordionItem value="item-4" className="mb-4">
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
          <AccordionItem value="item-5" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              War Memorial (WMEM)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Science Complex (SCIE)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacLachlan (MCLN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacNaughton (MACN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              H.L Hutt (HUTT)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              MacKinnon (MCKN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Macdonald Institute (MINS)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Crop Science (CRSC)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13" className="mb-4">
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
