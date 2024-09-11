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
                <Link href="/?classCode=ALEX100" className="classLink">ALEX100</Link>
                <Link href="/?classCode=ALEX200" className="classLink">ALEX200</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Thornbrough (THRN)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Rozanski (ROZH)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mb-4">
            <AccordionTrigger className="bg-black text-white p-4 text-2xl">
              Animal Nutrition (ANNU)
            </AccordionTrigger>
            <AccordionContent className="bg-black text-white p-4 text-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
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
