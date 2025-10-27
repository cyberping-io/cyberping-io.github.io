import { Button } from "@/components/ui/button"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" }
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">CyberPing</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Free Trial
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
