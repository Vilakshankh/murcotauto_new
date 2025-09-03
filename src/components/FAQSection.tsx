import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full px-4 sm:px-6 py-14 bg-white flex flex-col justify-start items-center gap-6">
      <div className="w-full max-w-[800px] text-center sm:text-left justify-start text-green-700 text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Barlow'] leading-tight md:leading-[65.02px]">🙋‍♂️ Frequently Asked Questions</div>
      <div className="w-full max-w-[800px] text-center sm:text-left justify-start text-green-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight">Everything you need to know about selling your vehicle with Murcot Auto — fast, fair, and fully transparent.</div>
      <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2.5">
        <Accordion type="single" collapsible className="w-full space-y-2.5">
          <AccordionItem value="item-1" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🔄 How It Works
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">How does the selling process work?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    It&apos;s simple:<br/><br/>
                    • Submit your vehicle details<br/>
                    • Get your cash offer — usually within the hour<br/>
                    • We come to you, pick it up, and pay you directly<br/><br/>
                    No dealership visits, no stress.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Can you help if I&apos;m buying a new car from a dealership?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    Yes — absolutely.<br/>
                    We offer accommodation (or &quot;convenience&quot;) sales at most dealerships. This means:<br/><br/>
                    • You keep your tax savings like a trade-in<br/>
                    • We buy your old vehicle and deliver payment directly at the dealership<br/>
                    • You get the best of both worlds: our higher offer plus your full tax credit<br/><br/>
                    Note: This service applies at any franchise dealership, except Tesla.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">How fast can I sell my car?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">Most customers complete their sale in 24–48 hours, and often the same day if you&apos;re ready.</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              💰 Payment & Loans
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">How do I get paid?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">We pay you on the spot by certified cheque or e-transfer — at your home or at the dealership, whichever is more convenient.</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Can you pay off my loan or lease?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">Yes.<br/>We deal directly with your lender, pay off the balance, and pay you the difference. You don&apos;t have to coordinate anything — we handle it all.</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🛑 Registration & Paperwork
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-2">
                <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Do I need to go to the SAAQ or Service Ontario?</div>
                <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">Nope.<br/>We take care of all government paperwork — including registration transfers and lien releases. No need to line up at a licensing office.</div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🚗 Vehicle Types & Locations
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Do you buy leased, financed, or damaged vehicles?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    Yes — we buy most cars, SUVs, and trucks, even if they&apos;re:<br/><br/>
                    • Still financed<br/>
                    • Leased<br/>
                    • Scratched, dented, or higher mileage
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Do I need to safety or inspect my vehicle before selling?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">Not at all.<br/>We buy vehicles as-is. You don&apos;t need to fix or inspect anything.</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Where do you operate?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    We buy vehicles across Quebec and Ontario, including:<br/><br/>
                    • Montreal, Laval, Gatineau, Ottawa<br/>
                    • Toronto and surrounding regions<br/><br/>
                    We come to you — wherever is most convenient.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              🌎 Canada-Wide Distribution & U.S. Export
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-2">
                <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">What happens to my vehicle after I sell it?</div>
                <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                  We don&apos;t just sell locally.<br/>
                  Murcot Auto moves vehicles through a wholesale network across Canada and the U.S. — getting your vehicle in front of the strongest-paying buyer, not just the closest one.
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="bg-white rounded-[10px] outline outline-2 outline-green-700 border-none">
            <AccordionTrigger className="px-4 py-6 bg-white rounded-[10px] text-slate-700 text-lg sm:text-xl font-semibold font-['Poppins'] leading-tight hover:no-underline [&[data-state=open]>svg]:rotate-180">
              📈 Why We Can Pay More
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 bg-white rounded-bl-[10px] rounded-br-[10px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Why is your offer often higher than a dealership trade-in?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    We don&apos;t sell to just one person — we source and sell to:<br/><br/>
                    • U.S. buyers<br/>
                    • Canadian dealers<br/>
                    • Franchise groups across the country<br/><br/>
                    This gives us the flexibility to pay more than local retail trade-in offers in many cases.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Do dealerships really call you to price trade-ins?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    All the time.<br/>
                    Dealers rely on wholesalers like us to:<br/><br/>
                    • Evaluate trade-ins<br/>
                    • Move inventory<br/>
                    • Get real-time pricing guidance<br/><br/>
                    In fact, many sell their own trade-ins directly to us. We&apos;ve been doing this since 1993.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-slate-700 text-base font-semibold font-['Poppins'] leading-tight">Can wholesale pricing really beat private sale or retail?</div>
                  <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
                    Yes — especially in today&apos;s market.<br/>
                    Vehicles with strong demand in the U.S., trucks, low-km units, or hard-to-find trims can often sell above local retail in the right network.<br/>
                    And we know exactly where to send them.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
