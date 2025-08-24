import { Scan, Phone, Mail } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading - Centered */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              How it works
            </h2>
          </div>

          {/* Steps Container - Horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-slate-600 text-3xl sm:text-4xl mb-3 sm:mb-4 font-light">
                01
              </div>
              <h3 className="heading-secondary text-lg sm:text-xl mb-3 sm:mb-4">
                Tell us about your vehicle
              </h3>
              <p className="text-primary text-sm sm:text-base leading-relaxed">
                Fill out our quick online form with your vehicle's details. Takes just a minute.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-slate-600 text-3xl sm:text-4xl mb-3 sm:mb-4 font-light">
                02
              </div>
              <h3 className="heading-secondary text-lg sm:text-xl mb-3 sm:mb-4">
                Get a cash offer fast
              </h3>
              <p className="text-primary text-sm sm:text-base leading-relaxed">
                We review your submission and send you a competitive offer within the hour.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-slate-600 text-3xl sm:text-4xl mb-3 sm:mb-4 font-light">
                03
              </div>
              <h3 className="heading-secondary text-lg sm:text-xl mb-3 sm:mb-4">
                Free pickup
              </h3>
              <p className="text-primary text-sm sm:text-base leading-relaxed">
                We come to you — at home, work, or your dealership if you're trading in.
              </p>
            </div>
          </div>

          {/* Vehicle Details Form - Centered */}
          <div className="max-w-2xl mx-auto">
            <h3 className="heading-secondary text-xl sm:text-2xl text-center mb-6 sm:mb-8">
              Enter Vehicle Details
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              {/* VIN Number */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Scan className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500" />
                </div>
                <input 
                  type="text" 
                  name="vin"
                  placeholder="Enter V.I.N Number"
                  maxLength={17}
                  required
                  className="w-full h-10 sm:h-12 pl-8 sm:pl-10 pr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Kilometers */}
              <div>
                <input 
                  type="number" 
                  name="kilometers"
                  placeholder="Enter Kilometers"
                  required
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Vehicle Year, Make and Model */}
              <div>
                <input 
                  type="text" 
                  name="vehicle-details"
                  placeholder="Vehicle Year, Make and Model"
                  required
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Name */}
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  maxLength={100}
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500" />
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone"
                  maxLength={50}
                  className="w-full h-10 sm:h-12 pl-8 sm:pl-10 pr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  required
                  maxLength={250}
                  className="w-full h-10 sm:h-12 pl-8 sm:pl-10 pr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Promo Code */}
              <div>
                <input 
                  type="text" 
                  name="promo-code"
                  placeholder="Promo Code"
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}