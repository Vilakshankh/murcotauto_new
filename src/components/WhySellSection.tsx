import Link from 'next/link';

export default function WhySellSection() {
  return (
    <div data-state="no" className="w-full bg-green-700 flex justify-between items-stretch">
      <div className="w-1/2 flex items-center justify-center">
        <img 
          src="/whysellpic.png" 
          alt="Why sell to Murcot Auto" 
          className="w-full h-auto max-h-full object-contain"
        />
      </div>
      <div className="flex-1 px-6 py-14 inline-flex flex-col justify-center items-start gap-6">
        <div className="self-stretch justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10">
          Why sell to <br/>Murcot Auto?
        </div>
        <div className="self-stretch justify-start">
          <span className="text-white text-xl font-semibold font-['Poppins'] leading-tight">Sell with Confidence<br/></span>
          <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Trusted by Sellers Since 1993<br/></span>
          <span className="text-white text-base font-normal font-['Poppins'] leading-tight">Over 30 years of proven experience in vehicle buying.<br/></span>
          <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Serving All of Quebec and Ontario<br/></span>
          <span className="text-white text-base font-normal font-['Poppins'] leading-tight">We're local, and we're everywhere you need us to be.</span>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <Link href="/get-started" className="px-4 py-2 bg-white rounded-[57.83px] flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-green-700 text-xl font-medium font-['Poppins'] leading-relaxed">Get Started</div>
          </Link>
          <div className="flex justify-start items-center gap-4">
            <div className="justify-start text-white text-xl font-medium font-['Poppins'] underline leading-relaxed">Read more</div>
            <div className="w-3.5 h-2 relative">
              <div className="w-3.5 h-2 left-0 top-0 absolute bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
