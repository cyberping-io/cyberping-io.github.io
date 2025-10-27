import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small projects and startups",
    features: [
      "10 monitoring locations",
      "5 minute intervals",
      "1,000 checks per month",
      "Email alerts",
      "7 day data retention",
      "Community support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "99",
    description: "For growing teams and businesses",
    features: [
      "30 monitoring locations",
      "1 minute intervals",
      "10,000 checks per month",
      "Email & Slack alerts",
      "30 day data retention",
      "Priority support",
      "Custom dashboards",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large organizations",
    features: [
      "50+ monitoring locations",
      "Real-time intervals (10s)",
      "Unlimited checks",
      "All alert channels + webhooks",
      "Unlimited data retention",
      "Dedicated support",
      "White-label reports",
      "SSO & advanced security",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export function Pricing() {
  return (
    <section className="py-24 md:py-32" id="pricing">
      <div className="container px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`p-8 h-full flex flex-col ${plan.popular ? 'border-accent shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && <span className="text-3xl font-bold">$</span>}
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle size={20} weight="fill" className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
