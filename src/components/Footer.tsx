import { Button } from "@/components/ui/button"
import { GithubLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Status Page", href: "#status" }
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" }
  ],
  Resources: [
    { label: "Support", href: "#support" },
    { label: "Community", href: "#community" },
    { label: "Guides", href: "#guides" },
    { label: "API Status", href: "#api-status" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">CyberPing</h3>
              <p className="text-xs sm:text-sm text-secondary-foreground/70 max-w-xs">
                Monitor your API latency performance across multiple global regions in real-time.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Button size="icon" variant="ghost" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-secondary-foreground/10">
                <TwitterLogo size={18} className="sm:w-5 sm:h-5" weight="fill" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-secondary-foreground/10">
                <GithubLogo size={18} className="sm:w-5 sm:h-5" weight="fill" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-secondary-foreground/10">
                <LinkedinLogo size={18} className="sm:w-5 sm:h-5" weight="fill" />
              </Button>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-secondary-foreground/70 text-center md:text-left">
            © 2024 CyberPing.io. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-secondary-foreground/70">
            <a href="#privacy" className="hover:text-secondary-foreground transition-colors">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-secondary-foreground transition-colors">Terms</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-secondary-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
