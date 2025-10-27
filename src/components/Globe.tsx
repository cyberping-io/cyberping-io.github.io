import { useEffect, useRef } from "react"

const locations = [
  { name: "San Francisco", x: 20, y: 35, delay: 0 },
  { name: "New York", x: 30, y: 32, delay: 0.2 },
  { name: "London", x: 49, y: 28, delay: 0.4 },
  { name: "Frankfurt", x: 52, y: 27, delay: 0.6 },
  { name: "Singapore", x: 75, y: 55, delay: 0.8 },
  { name: "Tokyo", x: 80, y: 35, delay: 1.0 },
  { name: "Sydney", x: 82, y: 75, delay: 1.2 },
  { name: "São Paulo", x: 35, y: 72, delay: 1.4 },
  { name: "Mumbai", x: 68, y: 52, delay: 1.6 },
  { name: "Toronto", x: 28, y: 30, delay: 1.8 },
]

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    
    ctx.scale(dpr, dpr)

    const drawMap = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)
      
      ctx.strokeStyle = "oklch(0.75 0.15 200 / 0.2)"
      ctx.lineWidth = 1
      
      for (let i = 0; i < 8; i++) {
        const y = (i / 7) * rect.height
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(rect.width, y)
        ctx.stroke()
      }
      
      for (let i = 0; i < 12; i++) {
        const x = (i / 11) * rect.width
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, rect.height)
        ctx.stroke()
      }
    }

    drawMap()

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect()
      canvas.width = newRect.width * dpr
      canvas.height = newRect.height * dpr
      ctx.scale(dpr, dpr)
      drawMap()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full aspect-[4/3] bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden shadow-2xl">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {locations.map((location, index) => (
        <div
          key={location.name}
          className="absolute"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
            transform: "translate(-50%, -50%)",
            animationDelay: `${location.delay}s`,
          }}
        >
          <div className="relative">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse-dot" />
            <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: `${location.delay}s` }} />
          </div>
          
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 whitespace-nowrap hidden sm:block">
            <div className="text-xs font-medium text-foreground bg-card/90 backdrop-blur-sm px-2 py-1 rounded border border-border/50 shadow-lg">
              {location.name}
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground bg-card/90 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-border/50">
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
        </span>
        <span className="hidden xs:inline">All systems operational</span>
        <span className="xs:hidden">Operational</span>
      </div>
    </div>
  )
}
