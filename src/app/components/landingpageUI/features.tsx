"use client"
import { Globe, Zap, BarChart3, Shield, LineChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const features = [
  {
    icon: Globe,
    title: "Global Monitoring",
    description: "Track supply chain events across 190+ countries with real-time news integration from NewsAPI.ai",
    highlight: "Real-time data",
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  },
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Gemini AI analyzes and summarizes disruption data into actionable executive briefings",
    highlight: "AI summaries",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: BarChart3,
    title: "Risk Assessment",
    description: "Quantify and visualize supplier risks with customizable dashboards and heat maps",
    highlight: "Visual analytics",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Shield,
    title: "Proactive Alerts",
    description: "Instant notifications about potential disruptions affecting your suppliers with severity ratings",
    highlight: "Custom thresholds",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: LineChart,
    title: "Trend Analysis",
    description: "Identify patterns and predict future disruptions with 12-month historical data analysis",
    highlight: "Predictive models",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: ArrowRight,
    title: "Action Recommendations",
    description: "AI-generated mitigation strategies tailored to your specific supply chain vulnerabilities",
    highlight: "Actionable insights",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
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
            Supply Chain Intelligence
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-3xl">
            Transform Your Supply Chain <span className="text-teal-600">Risk Management</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Our AI-driven platform provides comprehensive tools to monitor, analyze, and respond to supply chain disruptions before they impact your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${feature.bgColor} ${feature.color}`}>
                    {feature.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-base font-medium shadow-lg hover:shadow-teal-200/50">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}