import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { Globe } from "./Globe"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container relative z-10 px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Real-time global monitoring
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Monitor API Latency
              <span className="block text-accent">Across the Globe</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Track your API performance from multiple regions in real-time. 
              Identify bottlenecks, optimize response times, and deliver lightning-fast experiences to users worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Trial
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2">
                <Play className="mr-2" weight="fill" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Global Regions</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
