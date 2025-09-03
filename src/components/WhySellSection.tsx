import Link from 'next/link';

export default function WhySellSection() {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden pb-14 bg-green-700 inline-flex flex-col justify-start items-center overflow-hidden w-full">
        <img 
          className="w-full h-[633px] object-cover" 
          src="/03-2025_HAPPYCOUPLE-02 2.png" 
          alt="Happy couple with money and car"
        />
        <div className="w-full max-w-md px-6 pt-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10">
            Why sell to <br/>Murcot Auto?
          </div>
          <div className="self-stretch justify-start">
            <span className="text-white text-xl font-semibold font-['Poppins'] leading-tight">Sell with Confidence<br/></span>
            <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Trusted by Sellers Since 1993<br/></span>
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">Over 30 years of proven experience in vehicle buying.<br/></span>
            <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Serving All of Quebec and Ontario<br/></span>
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">We&apos;re local, and we&apos;re everywhere you need us to be.</span>
          </div>
          <div className="self-stretch flex justify-start items-center">
            <Link href="/get-started" className="px-4 py-2 bg-white rounded-[57.83px] flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-green-700 text-xl font-medium font-['Poppins'] leading-relaxed">Get Started</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full bg-green-700 justify-between items-stretch">
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
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">We&apos;re local, and we&apos;re everywhere you need us to be.</span>
          </div>
          <div className="self-stretch flex justify-start items-center">
            <Link href="/get-started" className="px-4 py-2 bg-white rounded-[57.83px] flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-green-700 text-xl font-medium font-['Poppins'] leading-relaxed">Get Started</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
