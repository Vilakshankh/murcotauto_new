import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function FooterSection() {
  return (
    <>
      {/* Mobile Version */}
      <footer className="block md:hidden w-full h-[922px] px-9 py-12 bg-green-700 inline-flex flex-col justify-center items-center gap-11">
        <div className="w-full max-w-md flex flex-col justify-start items-center gap-3.5">
          <div className="w-full max-w-md text-center justify-start text-white text-4xl font-extrabold font-['Barlow'] leading-10">
            200,000 <br/>satisfied customers <br/>since 1993
          </div>
          <div className="w-80 text-center justify-start text-white text-base font-normal font-['Poppins'] leading-snug">
            We&apos;ve tailored our services to provide the best experience for our customers since day 1.
          </div>
          <Input
            type="email"
            placeholder="Your email"
            className="w-56 h-10 rounded-[95.53px] border-2 border-white bg-transparent text-white text-lg font-medium font-['Poppins'] leading-relaxed placeholder-white/60 focus:border-white focus:outline-none focus:text-white"
          />
          <button className="w-32 h-10 bg-gradient-to-r from-white to-neutral-200 rounded-[95.53px] flex items-center justify-center">
            <span className="text-green-700 text-xl font-medium font-['Poppins'] leading-relaxed">Subscribe</span>
          </button>
        </div>
        
        <div className="self-stretch flex flex-col gap-6">
          {/* About Section */}
          <div className="flex flex-col gap-2 items-center">
            <div className="text-white text-lg font-medium font-['Poppins'] leading-relaxed">About</div>
            <div className="flex flex-col gap-1 items-center">
              <Link href="/#benefits" className="text-white text-base font-normal font-['Poppins'] leading-relaxed hover:text-gray-300 transition-colors">Benefits</Link>
              <Link href="/get-started#contact" className="text-white text-base font-normal font-['Poppins'] leading-relaxed hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Resources Section */}
          <div className="flex flex-col gap-2 items-center">
            <div className="text-white text-lg font-medium font-['Poppins'] leading-relaxed">Resources</div>
            <div className="flex flex-col gap-1 items-center">
              <Link href="/get-started#how-it-works" className="text-white text-base font-normal font-['Poppins'] leading-relaxed hover:text-gray-300 transition-colors">How it works?</Link>
              <Link href="/get-started#faq" className="text-white text-base font-normal font-['Poppins'] leading-relaxed hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/blog" className="text-white text-base font-normal font-['Poppins'] leading-relaxed hover:text-gray-300 transition-colors">Blog</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Link href="/get-started" className="w-44 h-12 bg-white rounded-[100px] flex items-center justify-center">
            <span className="text-green-900 text-xl font-medium font-['Poppins'] leading-relaxed">Ready to sell!</span>
          </Link>
          <img 
            className="w-80 h-24 object-contain" 
            src="/41bb9e933e7fcfc1b9b023b89c0c3346e8f2e37d.png" 
            alt="Murcot Auto"
          />
        </div>
        
      </footer>

      {/* Desktop Version */}
      <footer className="hidden md:block w-full bg-green-700 py-12 sm:py-16 lg:py-20">
        <div className="px-6 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Main Content - Left Side */}
              <div className="sm:col-span-2 lg:col-span-6 space-y-6 sm:space-y-8">
                {/* Main Heading */}
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight">
                  200,000 satisfied customers since 1993
                </h2>

                {/* Description */}
                <p className="text-gray-300 font-light leading-relaxed max-w-md text-sm sm:text-base">
                  We&apos;ve tailored our services to provide the best experience for our customers since day 1.
                </p>

                {/* Newsletter Signup */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 w-full sm:max-w-[250px] h-12 sm:h-10 px-4 rounded-full border border-white bg-transparent text-white text-base sm:text-sm font-medium placeholder-white/60 focus:border-white focus:outline-none focus:text-white"
                  />
                  <button className="w-full sm:w-auto px-6 h-12 sm:h-10 bg-white text-slate-900 rounded-full hover:bg-gray-100 transition-colors">
                    <span className="text-sm font-medium tracking-wide">
                      Subscribe
                    </span>
                  </button>
                </div>

              </div>

              {/* About Links */}
              <div className="lg:col-span-2">
                <h3 className="text-white text-base sm:text-lg font-light mb-3 sm:mb-4">
                  About
                </h3>
                <div className="space-y-2">
                  <Link href="/#benefits" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                    Benefits
                  </Link>
                  <Link href="/get-started#contact" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Resources Links */}
              <div className="lg:col-span-2">
                <h3 className="text-white text-base sm:text-lg font-light mb-3 sm:mb-4">
                  Resources
                </h3>
                <div className="space-y-2">
                  <Link href="/get-started#how-it-works" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                    How it works
                  </Link>
                  <Link href="/get-started#faq" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                    FAQ
                  </Link>
                  <Link href="/blog" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                    Blog
                  </Link>
                </div>
              </div>

              {/* CTA and Logo - Right Side */}
              <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-6 sm:gap-8">
                {/* Ready to Sell Button */}
                <Link href="/get-started" className="block w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-slate-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all tracking-wide shadow-lg text-center">
                  SELL NOW
                </Link>

                {/* Logo */}
                <div className="flex items-center">
                  <img 
                    src="/41bb9e933e7fcfc1b9b023b89c0c3346e8f2e37d.png" 
                    alt="Murcot Auto" 
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
