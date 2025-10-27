import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { Features } from "./components/Features"
import { Pricing } from "./components/Pricing"
import { SocialProof } from "./components/SocialProof"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App