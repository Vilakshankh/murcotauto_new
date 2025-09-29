"use client"

import { useState } from "react"
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
import { Loader2 } from "lucide-react"

interface VehicleFormData {
  year: string;
  make: string;
  model: string;
  kilometers: string;
  vin: string;
  name: string;
  phone: string;
  email: string;
}

export default function VehicleIntakeSection() {
  const form = useForm<VehicleFormData>({
    defaultValues: {
      year: '',
      make: '',
      model: '',
      kilometers: '',
      vin: '',
      name: '',
      phone: '',
      email: ''
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function onSubmit(values: VehicleFormData) {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    // Combine year, make, model into vehicleDetails for API compatibility
    const formData = {
      ...values,
      vehicleDetails: `${values.year} ${values.make} ${values.model}`.trim()
    }
    
    try {
      const response = await fetch('/api/submit-vehicle-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Thank you! Your vehicle quote request has been submitted successfully. We\'ll contact you soon!' })
        form.reset()
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to submit form. Please try again.' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 pb-20 md:pb-32 bg-gradient-to-b from-green-600 to-green-800 flex flex-col justify-start items-center gap-6 md:gap-10 relative overflow-hidden">
      <div className="w-full max-w-[630px] text-center justify-start text-white text-4xl sm:text-5xl md:text-7xl font-extrabold font-['Barlow'] leading-tight md:leading-[60px] px-4">
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
      <div className="w-full max-w-[630px] relative z-20 flex flex-col justify-center items-center">
        <div className="w-full bg-white rounded-[20px] md:rounded-[40px] px-4 sm:px-8 py-6 md:py-10 shadow-lg">
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-6 font-poppins">
            
            {/* Vehicle Information Section */}
            <div className="w-full text-center text-[#328640] text-[48px] font-barlow font-extrabold leading-[47px]">
              Vehicle information
            </div>

            <div className="w-full flex flex-col gap-6">
              {/* Year Field */}
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                      YEAR
                    </div>
                    <FormControl>
                      <Input 
                        type="number"
                        placeholder="Select an option" 
                        required
                        {...field} 
                        className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Make and Model Row */}
              <div className="flex gap-6">
                <FormField
                  control={form.control}
                  name="make"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                        MAKE
                      </div>
                      <FormControl>
                        <Input 
                          type="text"
                          placeholder="Select" 
                          required
                          {...field} 
                          className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                        MODEL
                      </div>
                      <FormControl>
                        <Input 
                          type="text"
                          placeholder="Select" 
                          required
                          {...field} 
                          className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Kilometer Field */}
              <FormField
                control={form.control}
                name="kilometers"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                      KILOMETER
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type="number"
                          placeholder="type here" 
                          required
                          {...field} 
                          className="w-full h-12 px-5 pr-16 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                        />
                        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#33853F] text-[15px] font-bold uppercase tracking-[3px]">
                          KM
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* VIN Field */}
              <FormField
                control={form.control}
                name="vin"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                      VIN
                    </div>
                    <FormControl>
                      <Input 
                        type="text"
                        placeholder="type here" 
                        maxLength={17}
                        required
                        {...field} 
                        className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Information Section */}
            <div className="w-full text-center text-[#328640] text-[48px] font-barlow font-extrabold leading-[47px] mt-8">
              Contact information
            </div>

            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                    FULL NAME
                  </div>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="type here" 
                      maxLength={100}
                      required
                      {...field} 
                      className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                    PHONE NUMBER
                  </div>
                  <FormControl>
                    <Input 
                      type="number"
                      placeholder="type here" 
                      maxLength={50}
                      required
                      {...field} 
                      className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="text-[#979797] text-[15px] font-bold uppercase tracking-[3px] leading-[26px] mb-2">
                    EMAIL ADDRESS
                  </div>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="type here" 
                      required
                      maxLength={250}
                      {...field} 
                      className="w-full h-12 px-5 bg-white rounded-[10px] border-2 border-[#33853F] text-[#1F1F1F] text-[20px] font-medium leading-[26px] placeholder:text-[#E5E5E5] focus-visible:ring-2 focus-visible:ring-[#33853F] focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`w-full p-4 rounded-lg text-center text-sm font-medium ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-[212px] h-[56px] bg-gradient-to-b from-[#328640] to-[#41A552] hover:from-[#2a7236] hover:to-[#38943f] disabled:opacity-50 text-white font-medium text-[18px] leading-[26px] rounded-full transition-colors mt-4 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit form'
              )}
            </Button>
          </form>
        </Form>
        </div>
      </div>
    </section>
  )
}
