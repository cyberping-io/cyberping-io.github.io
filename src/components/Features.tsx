import { Card } from "@/components/ui/card"
import { 
  GlobeHemisphereWest, 
  Lightning, 
  ChartLine, 
  Shield, 
  Clock, 
  BellRinging 
} from "@phosphor-icons/react"
import { motion } from "framer-motion"

const features = [
  {
    icon: GlobeHemisphereWest,
    title: "Multi-Region Monitoring",
    description: "Test your APIs from 50+ global locations simultaneously. Get real-time insights into regional performance differences."
  },
  {
    icon: Lightning,
    title: "Real-Time Analytics",
    description: "Instant latency measurements with millisecond precision. Monitor performance trends and identify issues as they happen."
  },
  {
    icon: ChartLine,
    title: "Performance Insights",
    description: "Comprehensive dashboards with historical data, trends, and predictive analytics to optimize your infrastructure."
  },
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability with guaranteed uptime. Monitor your APIs with confidence and trust."
  },
  {
    icon: Clock,
    title: "Custom Intervals",
    description: "Set monitoring frequency from seconds to hours. Balance between granular data and resource efficiency."
  },
  {
    icon: BellRinging,
    title: "Smart Alerts",
    description: "Intelligent alerting via email, Slack, or webhooks. Get notified only when it matters with customizable thresholds."
  }
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Everything you need to monitor API performance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Powerful features designed for developers and businesses who demand excellence
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={20} className="sm:w-6 sm:h-6 text-accent" weight="duotone" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
