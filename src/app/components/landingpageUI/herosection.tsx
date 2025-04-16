"use client"
import { ArrowRight, BarChart, Check, ExternalLink, Globe, ShieldCheck, Zap, AlertTriangle, ChevronRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroPic from "../../../../public/heroPicture.jpg"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative blurred circles - matching navbar teal-600 colors */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] opacity-[0.15] rounded-full bg-gradient-to-tr from-teal-500 to-teal-600 blur-[120px]" />
        <div className="absolute top-[60%] -left-[5%] w-[600px] h-[600px] opacity-[0.1] rounded-full bg-gradient-to-br from-teal-600 to-blue-600 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="relative z-10 py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          {/* Unique asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-0">
            {/* Left content area - takes up 5 columns */}
            <div className="lg:col-span-5 lg:pr-12 flex flex-col justify-center">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-3 py-1.5 mb-6 border border-teal-100/60"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 group-hover:bg-teal-700">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="ml-2 text-sm font-medium text-teal-600">
                  AI-Powered Intelligence
                </span>
              </motion.div>

              {/* Heading with creative staggered design - using gray-900 and teal-600 like navbar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                  <div className="inline-block">
                    <span>Predict</span>
                    <div className="h-2 w-full bg-teal-600 mt-1 rounded-full" />
                  </div>
                  {" "}<span className="text-teal-600">supply chain</span>{" "}
                  <div className="inline-block mt-1">
                    <span>disruptions</span>
                    <div className="h-2 w-full bg-teal-600 mt-1 rounded-full" />
                  </div>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 mb-8 max-w-xl"
              >
                Real-time AI-powered insights into global supply chain disruptions. 
                Monitor risks, predict impacts, and protect your business with 
                our intelligent dashboard.
              </motion.p>

              {/* Feature points with custom styled checks */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 space-y-4"
              >
                {[
                  "24/7 real-time monitoring of global supply chains",
                  "AI prediction of potential disruptions before they occur",
                  "Actionable insights to mitigate supply chain risks"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium rounded-lg shadow-md hover:shadow-teal-200/50 transition-all">
                  Try for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-6 text-base font-medium rounded-lg">
                  How it works
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Stats/Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-14 pt-6 border-t border-gray-100"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">99.9%</p>
                    <p className="text-sm text-gray-700">Prediction accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-700">Global enterprises</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">48.4%</p>
                    <p className="text-sm text-gray-700">Risk reduction</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right visualization area - takes up 7 columns with offset for asymmetric design */}
            <div className="lg:col-span-7 lg:col-start-6 relative">
              {/* Main Dashboard Visualization */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Dashboard highlight glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-2xl blur-xl opacity-70" />

                {/* Main dashboard container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                  {/* Dashboard header */}
                  <div className="p-4 bg-teal-600 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      <h3 className="font-medium">Global Supply Chain Monitor</h3>
                    </div>
                    <div className="flex items-center text-xs bg-white/20 px-2.5 py-1 rounded-full">
                      <div className="h-2 w-2 bg-teal-200 rounded-full animate-pulse mr-1"></div>
                      <span>Live</span>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-5 bg-white border-t border-gray-100">
                    {/* World map with custom visualization elements */}
                    <div className="relative mb-5 rounded-lg overflow-hidden">
                      <div className="h-[320px] relative">
                        {/* Base map */}
                        <Image 
                          src={HeroPic} 
                          alt="Global Supply Chain Map" 
                          className="w-full h-full object-cover rounded-xl"
                        />
                        
                        {/* Creative overlay with visualized supply chains */}
                        <div className="absolute inset-0 bg-gray-900/10"></div>
                        
                        {/* Supply route lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <motion.path 
                            d="M120,80 C160,140 240,90 300,130" 
                            stroke="rgba(13, 148, 136, 0.7)" /* teal-600 */
                            strokeWidth="2"
                            strokeDasharray="6 3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0.3 }}
                            animate={{ pathLength: 1, opacity: 0.7 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
                          />
                          <motion.path 
                            d="M90,150 C120,100 190,180 240,100" 
                            stroke="rgba(13, 148, 136, 0.7)" /* teal-600 */
                            strokeWidth="2"
                            strokeDasharray="6 3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0.3 }}
                            animate={{ pathLength: 1, opacity: 0.7 }}
                            transition={{ duration: 3.5, delay: 0.2, repeat: Infinity, repeatType: 'loop' }}
                          />
                          <motion.path 
                            d="M200,200 C240,150 290,190 340,150" 
                            stroke="rgba(13, 148, 136, 0.7)" /* teal-600 */
                            strokeWidth="2"
                            strokeDasharray="6 3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0.3 }}
                            animate={{ pathLength: 1, opacity: 0.7 }}
                            transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: 'loop' }}
                          />
                        </svg>
                        
                        {/* Hotspot nodes */}
                        <motion.div 
                          className="absolute top-[25%] left-[30%]"
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="h-4 w-4 rounded-full bg-red-500 shadow-lg shadow-red-500/30">
                            <div className="absolute -inset-2 rounded-full border-2 border-red-400/40 animate-ping" />
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-[40%] left-[65%]"
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, delay: 0.7, repeat: Infinity }}
                        >
                          <div className="h-4 w-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30">
                            <div className="absolute -inset-2 rounded-full border-2 border-amber-400/40 animate-ping" />
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-[63%] left-[43%]"
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                        >
                          <div className="h-4 w-4 rounded-full bg-teal-500 shadow-lg shadow-teal-500/30">
                            <div className="absolute -inset-2 rounded-full border-2 border-teal-400/40 animate-ping" />
                          </div>
                        </motion.div>
                        
                        {/* Active alert window */}
                        <motion.div 
                          className="absolute top-5 right-5 max-w-[240px]"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1, duration: 0.6 }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-red-100 overflow-hidden">
                            <div className="bg-red-500 px-3 py-2 text-white text-xs font-medium flex items-center">
                              <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
                              Critical Alert
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium text-sm text-gray-900">Shanghai Port Congestion</h4>
                              <div className="mt-1 space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-500">Severity:</span>
                                  <span className="font-medium text-red-600">High</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-500">Suppliers Affected:</span>
                                  <span className="font-medium text-gray-700">48</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-500">Est. Impact:</span>
                                  <span className="font-medium text-gray-700">$2.4M</span>
                                </div>
                              </div>
                              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end">
                                <Button variant="ghost" size="sm" className="h-7 text-xs text-teal-600 hover:text-teal-700 hover:bg-teal-50 px-2 py-0 rounded-md">
                                  View Details <ChevronRight className="h-3 w-3 ml-0.5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Risk Metrics & KPI section */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[
                        { label: "Active Alerts", value: 24, trend: "+3", color: "text-amber-500" },
                        { label: "AI Accuracy", value: "93%", trend: "+2.1%", color: "text-teal-600" },
                        { label: "Avg Response", value: "2.4h", trend: "-0.8h", color: "text-teal-600" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-xs text-gray-500">{stat.label}</p>
                            <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-amber-500' : 'text-teal-600'}`}>
                              {stat.trend}
                            </span>
                          </div>
                          <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Risk Table */}
                    <div className="bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center px-4 py-3 border-b border-gray-200">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">Critical Supply Chain Risks</h3>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs h-8 text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                          View All <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                        </Button>
                      </div>
                      <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-100">
                            <tr className="text-left text-xs text-gray-500">
                              <th className="px-4 py-2 font-medium">Location</th>
                              <th className="px-4 py-2 font-medium">Issue</th>
                              <th className="px-4 py-2 font-medium">Severity</th>
                              <th className="px-4 py-2 font-medium">Suppliers</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {[
                              { location: "Shanghai", issue: "Port Congestion", severity: "Critical", suppliers: 48 },
                              { location: "Hamburg", issue: "Labor Strike", severity: "High", suppliers: 23 },
                              { location: "Vietnam", issue: "Typhoon Warning", severity: "Medium", suppliers: 36 }
                            ].map((risk, i) => (
                              <tr key={i} className="hover:bg-gray-50 text-sm">
                                <td className="px-4 py-3 font-medium text-gray-900">{risk.location}</td>
                                <td className="px-4 py-3 text-gray-700">{risk.issue}</td>
                                <td className="px-4 py-3">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    risk.severity === "Critical" ? "bg-red-100 text-red-800" :
                                    risk.severity === "High" ? "bg-amber-100 text-amber-800" :
                                    "bg-blue-100 text-blue-800"
                                  }`}>
                                    {risk.severity}
                                  </span>
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-700">{risk.suppliers}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements for visual interest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -left-14 -bottom-10 z-20"
              >
                <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-4 max-w-[220px]">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-teal-50 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">Risk Score Improved</p>
                      <p className="text-xs text-gray-700 mt-0.5">Your supply chain risk score improved by 16% this quarter</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -right-8 top-10 z-20"
              >
                <div className="bg-teal-600 text-white shadow-xl rounded-xl p-3 max-w-[180px]">
                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">AI Insights</p>
                      <p className="text-xs text-teal-100 mt-0.5">3 new predictions available</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Dotted connection lines between floating elements */}
              <svg className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                <motion.path 
                  d="M100,400 C80,300 200,250 300,350" 
                  stroke="rgba(13, 148, 136, 0.3)" /* teal-600 */
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path 
                  d="M600,100 C500,150 400,120 350,180" 
                  stroke="rgba(13, 148, 136, 0.3)" /* teal-600 */
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}