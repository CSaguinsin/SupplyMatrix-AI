"use client"
import { motion } from "framer-motion"
import { Globe, Zap, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Data Collection",
    description: "We gather real-time news and data from thousands of global sources via NewsAPI.ai, covering 190+ countries in multiple languages.",
    icon: Globe,
    color: "teal"
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "Gemini AI processes and contextualizes the data, identifying potential supply chain disruptions with 93% accuracy.",
    icon: Zap,
    color: "blue"
  },
  {
    number: 3,
    title: "Actionable Insights",
    description: "You receive prioritized alerts and AI-generated recommendations tailored to your specific supply chain vulnerabilities.",
    icon: BarChart,
    color: "purple"
  }
]

export default function HowSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20 mb-4">
            Process Overview
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-3xl">
            How Our <span className="text-teal-600">AI Platform</span> Works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Our three-step process transforms raw global data into actionable supply chain intelligence.
          </p>
        </motion.div>

        {/* Content Row - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image/Visual Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="aspect-[1.2] bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-8">
                {/* Dashboard mockup */}
                <div className="relative w-full h-full bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[size:40px_40px] opacity-10" />
                  
                  {/* Mock dashboard content */}
                  <div className="relative z-10 h-full flex flex-col p-4">
                    {/* Dashboard header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-900">Risk Monitoring Dashboard</h3>
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                      </div>
                    </div>
                    
                    {/* Map section */}
                    <div className="flex-1 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <Globe className="h-16 w-16 text-gray-300" />
                    </div>
                    
                    {/* Alerts section */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">Recent Alerts</h4>
                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        {[
                          "Port congestion • Shanghai",
                          "Labor strike • Hamburg",
                          "Typhoon warning • Vietnam"
                        ].map((alert, index) => (
                          <div key={index} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-teal-400 mt-1.5 mr-2" />
                            <p className="text-sm text-gray-700">{alert}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-8">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  whileHover={{ translateX: 5 }}
                  className="flex gap-6"
                >
                  <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-${step.color}-100 text-${step.color}-700`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full bg-${step.color}-50 text-${step.color}-700 font-bold text-sm`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 px-6 py-6 text-base font-medium shadow-lg hover:shadow-teal-200/50">
                  See Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}