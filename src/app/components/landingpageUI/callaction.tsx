"use client"


import { Button } from "@/components/ui/button"

export default function CallAction() {
    return(
        <>
        <section className="py-16 bg-teal-600">
        <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Supply Chain?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your 14-day free trial today and see how Supply Matrix AI can help your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white ">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}