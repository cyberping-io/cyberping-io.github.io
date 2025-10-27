import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "CyberPing has been instrumental in helping us maintain sub-100ms API response times across all regions. The insights are invaluable.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    avatar: "SC",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "We reduced our API latency by 40% after identifying bottlenecks with CyberPing's multi-region monitoring. Game changer for our team.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "DataStream",
    avatar: "MR",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "The real-time monitoring gives us confidence that our APIs are performing optimally for users worldwide. Worth every penny.",
    author: "Emily Watson",
    role: "Lead DevOps Engineer",
    company: "CloudNine",
    avatar: "EW",
    gradient: "from-orange-500 to-red-500"
  },
  {
    quote: "CyberPing's intuitive dashboard and alerts help us catch performance issues before they impact customers. Highly recommend.",
    author: "David Kim",
    role: "Senior Backend Developer",
    company: "ApiHub",
    avatar: "DK",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    quote: "The detailed latency metrics from multiple regions helped us optimize our CDN strategy and improve global user experience significantly.",
    author: "Lisa Anderson",
    role: "Head of Infrastructure",
    company: "GlobalTech",
    avatar: "LA",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    quote: "Simple to set up, powerful insights, and excellent support. CyberPing is now an essential part of our monitoring stack.",
    author: "James Park",
    role: "Engineering Manager",
    company: "DevTools Pro",
    avatar: "JP",
    gradient: "from-teal-500 to-cyan-500"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-4 sm:mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Loved by Developers
            <span className="block text-accent">Worldwide</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See what engineering teams have to say about monitoring their APIs with CyberPing
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 h-full flex flex-col hover:shadow-lg hover:border-accent/30 transition-all duration-300 bg-card/80 backdrop-blur">
                <Quotes className="text-accent mb-4 sm:mb-6" size={32} weight="fill" />
                
                <blockquote className="flex-grow mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-base sm:text-lg shadow-lg flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm sm:text-base truncate">
                      {testimonial.author}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                    <div className="text-xs sm:text-sm text-accent font-medium truncate">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
