"use client"
import { ArrowRight, BarChart, Globe, Shield, Zap, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Floating globes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 -translate-y-1/2 opacity-5"
          animate={{
            rotate: 360,
            transition: {
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Globe className="w-[400px] h-[400px] text-teal-500/20" />
        </motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/4 -translate-y-1/2 opacity-5"
          animate={{
            rotate: -360,
            transition: {
              duration: 150,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Globe className="w-[300px] h-[300px] text-blue-500/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-10 ">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20"
              >
                <Zap className="h-4 w-4 mr-2 text-teal-600" />
                Now powered by Gemini AI & NewsAPI.ai
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]"
              >
                <span className="text-gray-900">Navigate Global Supply Chain</span>
                <span className="text-teal-600"> Risks with AI</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-lg text-gray-600 md:text-xl lg:text-xl/relaxed"
              >
                Real-time AI-powered insights into global supply chain disruptions. 
                Monitor risks, predict impacts, and protect your business with 
                our intelligent dashboard.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 min-[400px]:flex-row items-center"
            >
              <Button className="group bg-teal-600 hover:bg-teal-700 px-8 py-6 text-base font-medium shadow-lg hover:shadow-teal-200/50 transition-all duration-300">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200 h-12 w-12">
                  <Play className="h-5 w-5 text-teal-600 fill-teal-600" />
                </Button>
                <span className="text-sm font-medium text-gray-700">See how it works</span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <p>Trusted by 500+ global companies</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span>4.9/5 from 120 reviews</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              {/* Dashboard background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-600/5" />
              
              {/* Dashboard content */}
              <div className="relative z-10 p-1">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 p-3 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 mx-4" />
                </div>
                
                {/* Dashboard content */}
                <div className="p-4">
                  {/* Map section */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 flex items-center justify-center">
                    <Globe className="h-32 w-32 text-gray-300" />
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      { value: "24", label: "Active Alerts", trend: "up" },
                      { value: "87%", label: "Accuracy", trend: "up" },
                      { value: "3.2h", label: "Avg. Response", trend: "down" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Recent alerts */}
                  <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">Recent Disruptions</h3>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { location: "Shanghai Port", issue: "Congestion", level: "High" },
                        { location: "Hamburg", issue: "Labor Strike", level: "Medium" },
                        { location: "Vietnam", issue: "Typhoon", level: "Critical" }
                      ].map((alert, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`mt-1 h-2 w-2 rounded-full ${
                            alert.level === "Critical" ? "bg-red-500" : 
                            alert.level === "High" ? "bg-orange-400" : "bg-yellow-400"
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{alert.location}</p>
                            <p className="text-xs text-gray-500">{alert.issue}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            alert.level === "Critical" ? "bg-red-50 text-red-600" : 
                            alert.level === "High" ? "bg-orange-50 text-orange-600" : "bg-yellow-50 text-yellow-600"
                          }`}>
                            {alert.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <BarChart className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">+12% Risk Detected</p>
                  <p className="text-xs text-gray-500">Last 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}