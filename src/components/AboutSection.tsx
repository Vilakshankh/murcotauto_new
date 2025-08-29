export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="w-full flex justify-start items-center">
        <div className="flex-1 self-stretch p-14 bg-green-700 flex flex-col justify-center items-center gap-4">
          <div className="self-stretch justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10">About Us</div>
          <div className="self-stretch justify-start">
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">
              Murcot Auto was founded in 1993, starting in the heart of the used car wholesale world — buying and selling vehicles through auctions and between dealers across Canada. Over time, we built strong ties with dealerships, exporters, and buyers, becoming a trusted name nationwide.<br/><br/>In the last 10+ years, we expanded to buy directly from the public, helping thousands of sellers get top value without the pressure, trade-in tactics, or wasted time of private sales.<br/><br/>
            </span>
            <span className="text-white text-xl font-bold font-['Poppins'] leading-loose">Straightforward. Experienced. Trusted since 1993.</span>
          </div>
        </div>
        <img className="w-[552.55px] self-stretch object-cover" src="/aboutus.jpg" alt="About Murcot Auto" />
      </div>
      
      {/* Map Image */}
      <img className="w-full h-72 object-cover" src="/map.png" alt="Murcot Auto Location Map" />
    </section>
  );
}
