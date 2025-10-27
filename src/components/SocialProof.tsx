import { motion } from "framer-motion"

const companies = [
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "▲" },
  { name: "GitHub", logo: "G" },
  { name: "Shopify", logo: "S" },
  { name: "Atlassian", logo: "A" },
  { name: "Twilio", logo: "T" }
]

export function SocialProof() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12 uppercase tracking-wider font-medium">
            Trusted by leading companies worldwide
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl bg-card border border-border flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
