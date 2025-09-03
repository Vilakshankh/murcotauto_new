"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function VehicleIntakeSection() {
  const form = useForm()

  function onSubmit(values: Record<string, unknown>) {
    console.log(values)
  }

  return (
    <section className="w-full py-20 md:py-40 px-4 sm:px-6 pb-32 md:pb-48 bg-gradient-to-b from-green-600 to-green-800 flex flex-col justify-start items-center gap-8 md:gap-14 relative overflow-hidden">
      <div className="w-full max-w-[630px] text-center justify-start text-white text-4xl sm:text-5xl md:text-7xl font-extrabold font-['Barlow'] leading-tight md:leading-[86px] px-4">
        Get a quote for your vehicle today!
      </div>
      
      {/* Standing Images - positioned to lean on the form, hidden on mobile */}
      <img 
        className="hidden lg:block absolute left-[200px] top-68 w-40 xl:w-56 h-[600px] xl:h-[756px] z-10" 
        src="/standing left.png" 
        alt="Person with phone"
      />
      <img 
        className="hidden lg:block absolute right-[200px] top-60 w-48 xl:w-64 h-[690px] xl:h-[869px] z-10" 
        src="/standing right.png" 
        alt="Person with phone"
      />
      
      {/* Form Container */}
      <div className="w-full max-w-[630px] px-4 sm:px-6 py-6 md:py-10 relative z-20 flex flex-col justify-center items-center gap-6">
        <div className="w-full h-auto min-h-[700px] md:h-[800px] left-0 top-0 absolute bg-white rounded-[20px] md:rounded-[40px] z-0" />
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full relative z-10 flex flex-col gap-4 md:gap-6 items-center px-4">
            <h2 className="text-center text-green-700 text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Barlow'] leading-tight mb-2 md:mb-4">
              Enter Vehicle details
            </h2>
            
            {/* VIN Field with Barcode Icon */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              <FormField
                control={form.control}
                name="vin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Enter V.I.N Number" 
                        maxLength={17}
                        required
                        {...field} 
                        className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <img 
                src="https://static.wixstatic.com/media/5683bb_0d744ed157c84d3db570ebcca5920e04~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/barcode.png" 
                alt="barcode" 
                className="absolute right-3 top-3 w-6 h-6"
              />
            </div>

            {/* Kilometers Field */}
            <FormField
              control={form.control}
              name="kilometers"
              render={({ field }) => (
                <FormItem className="w-full max-w-xs sm:max-w-md">
                  <FormControl>
                    <Input 
                      type="number"
                      placeholder="Enter Kilometers" 
                      required
                      {...field} 
                      className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full max-w-xs sm:max-w-md">
                  <FormControl>
                    <Input 
                      placeholder="Name" 
                      maxLength={100}
                      {...field} 
                      className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Vehicle Year, Make and Model Field */}
            <FormField
              control={form.control}
              name="vehicleDetails"
              render={({ field }) => (
                <FormItem className="w-full max-w-xs sm:max-w-md">
                  <FormControl>
                    <Input 
                      placeholder="Vehicle Year, Make and Model" 
                      required
                      {...field} 
                      className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field with Icon */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="Phone" 
                        maxLength={50}
                        {...field} 
                        className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <img 
                src="https://static.wixstatic.com/media/5683bb_2360359c87bf4e41861b12c74b1dab4e~mv2.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/telephone%20(5).png" 
                alt="telephone" 
                className="absolute right-3 top-3 w-5 h-5"
              />
            </div>

            {/* Email Field with Icon */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Email" 
                        required
                        maxLength={250}
                        {...field} 
                        className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <img 
                src="https://static.wixstatic.com/media/5683bb_6cec0ec9bab9466ba425d274b7cab5ff~mv2.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/email%20(10).png" 
                alt="email" 
                className="absolute right-3 top-3 w-5 h-5"
              />
            </div>

            {/* Promo Code Field */}
            <FormField
              control={form.control}
              name="promoCode"
              render={({ field }) => (
                <FormItem className="w-full max-w-xs sm:max-w-md">
                  <FormControl>
                    <Input 
                      placeholder="Promo Code" 
                      {...field} 
                      className="w-full h-12 px-4 bg-white border border-gray-300 rounded text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-32 sm:w-36 h-10 sm:h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors text-sm sm:text-base mt-2"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
