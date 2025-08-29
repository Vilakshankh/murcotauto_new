export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="flex justify-center items-center gap-9">
            <div className="w-80 p-14 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-center items-center gap-6">
              <img 
                src="/efficient-v2.png" 
                alt="Efficient car selling process" 
                className="w-64 h-56 object-contain"
              />
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-center justify-start text-green-700 text-xl font-extrabold font-['Barlow'] leading-normal">Efficient</div>
                <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal font-['Poppins'] leading-tight">Get a firm offer in minutes and complete the sale quickly — no long waits, no drawn-out negotiations.</div>
              </div>
            </div>
            <div className="w-80 p-14 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-center items-center gap-6">
              <img 
                src="/secure-v2.svg" 
                alt="Secure car selling process" 
                className="w-60 h-56 object-contain"
              />
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-center justify-start text-green-700 text-xl font-extrabold font-['Barlow'] leading-normal">Secure</div>
                <div className="self-stretch text-center justify-start text-slate-900/40 text-base font-normal font-['Poppins'] leading-tight">Get paid safely with no risk — no dealing with strangers or unreliable payment methods. We handle everything, including paperwork and loan payoffs. You just hand us the keys!</div>
              </div>
            </div>
            <div className="w-80 p-14 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-center items-center gap-6">
              <img 
                src="/hasslefree-v2.svg" 
                alt="Hassle-free car selling process" 
                className="w-60 h-56 object-contain"
              />
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-center justify-start text-green-700 text-xl font-extrabold font-['Barlow'] leading-normal">Hassle-Free</div>
                <div className="self-stretch text-center justify-start text-slate-900/40 text-base font-normal font-['Poppins'] leading-tight">We come to you, pick up the vehicle, and take care of everything — no stress, no pressure.</div>
              </div>
            </div>
          </div>
          
          {/* Murcot Auto Logo */}
          <div className="mt-16 sm:mt-20">
            <img 
              src="/MA_LOGO.png" 
              alt="Murcot Auto" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
