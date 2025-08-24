export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 mt-16 sm:mt-32">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Title */}
            <div className="lg:col-span-1">
              <h2 className="text-black text-base sm:text-lg font-light tracking-tight leading-tight mb-4 lg:mb-0">
                Contact us
              </h2>
            </div>

            {/* Right Side - Form and Contact Info */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                
                {/* Contact Form */}
                <div className="space-y-6">
                  {/* Form Heading */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 tracking-tight leading-tight mb-3">
                      Drop Us a Line
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                      We are always looking to buy your vehicle!
                    </p>
                  </div>

                  {/* Form Fields */}
                  <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                      <label className="block text-slate-900 text-sm font-light tracking-wide mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full h-12 px-4 rounded-lg border border-gray-300 text-slate-900 text-sm font-light placeholder-slate-400 focus:border-slate-600 focus:outline-none"
                      />
                    </div>

                    {/* Name Input */}
                    <div>
                      <label className="block text-slate-900 text-sm font-light tracking-wide mb-2">
                        Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        className="w-full h-12 px-4 rounded-lg border border-gray-300 text-slate-900 text-sm font-light placeholder-slate-400 focus:border-slate-600 focus:outline-none"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-slate-900 text-sm font-light tracking-wide mb-2">
                        Message
                      </label>
                      <textarea 
                        placeholder="Drop us a line"
                        rows={6}
                        className="w-full p-4 rounded-lg border border-gray-300 text-slate-900 text-sm font-light placeholder-slate-400 focus:border-slate-600 focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    {/* Send Button */}
                    <button 
                      type="submit"
                      className="px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all tracking-wide shadow-lg"
                    >
                      Send
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Get in Touch Heading */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                    Get in Touch
                  </h3>                  
                  {/* Description */}
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    Murcot Auto treats you like family — that&apos;s why so many trust us to sell their car with ease.
                  </p>



                  {/* Contact Information */}
                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="text-slate-900 font-light">
                        +1 514 927 1539
                      </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-2 text-white" fill="currentColor" viewBox="0 0 20 16">
                          <path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <span className="text-slate-900 font-light">
                        info@murcotauto.com
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 my-6"></div>

                  {/* Social Media Section */}
                  <h4 className="text-xl font-light text-slate-900 tracking-tight">
                    Follow Us
                  </h4>

                  {/* Social Links */}
                  <div className="space-y-3">
                    {/* LinkedIn */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                        </svg>
                      </div>
                      <a href="#" className="text-slate-600 font-light hover:text-slate-900 transition-colors">
                        LinkedIn
                      </a>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2.3c2.667 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.374.057 4.042 0 2.667-.01 2.987-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.374.057-4.041.057-2.667 0-2.987-.01-4.042-.057-2.717-.124-3.975-1.416-4.099-4.1-.048-1.054-.057-1.374-.057-4.041 0-2.667.01-2.987.057-4.042.124-2.69 1.387-3.976 4.1-4.099 1.054-.048 1.374-.057 4.041-.057zm0-2.3c-2.716 0-3.056.012-4.123.06-3.631.167-5.65 2.182-5.816 5.817-.05 1.067-.061 1.407-.061 4.123s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
                        </svg>
                      </div>
                      <a href="#" className="text-slate-600 font-light hover:text-slate-900 transition-colors">
                        Instagram
                      </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04c0-.82.23-1.38 1.41-1.38h1.51V2.11c-.26-.03-1.15-.11-2.19-.11-2.18 0-3.66 1.33-3.66 3.76v2.1H6v2.84h2.46V18z"/>
                        </svg>
                      </div>
                      <a href="#" className="text-slate-600 font-light hover:text-slate-900 transition-colors">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
