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
    <section className="py-24 border-t border-border">
      <div className="container px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-12 uppercase tracking-wider font-medium">
            Trusted by leading companies worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-24 h-24 rounded-xl bg-card border border-border flex items-center justify-center text-3xl font-bold text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all">
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
