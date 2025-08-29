import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full px-6 py-14 bg-white flex flex-col justify-start items-center gap-6">
      <div className="w-full max-w-[800px] justify-start text-green-700 text-6xl font-extrabold font-['Barlow'] leading-[65.02px]">Frequently Asked Questions (FAQs)</div>
      <div className="w-full max-w-[800px] justify-start text-green-700 text-xl font-semibold font-['Poppins'] leading-tight">Everything you need to know about selling your vehicle with Murcot Auto — fast, fair, and fully transparent.</div>
      <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2.5">
        <Accordion type="single" collapsible className="w-full space-y-2.5">
          <AccordionItem value="item-1" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🔄 How It Works
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">This is your first question</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">And this is the answer to the first question.</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">This is your second question</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">And this is the answer to the second question.</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">This is your third question</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">And this is the answer to the third question.</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              💰 Payment & Loans
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                Content for Payment & Loans section goes here.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🛑 Registration & Paperwork
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                Content for Registration & Paperwork section goes here.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🚗 Vehicle Types & Locations
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                Content for Vehicle Types & Locations section goes here.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🌎 Canada-Wide Distribution & U.S. Export
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                Content for Canada-Wide Distribution & U.S. Export section goes here.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              📈 Why We Can Pay More
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                Content for Why We Can Pay More section goes here.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
