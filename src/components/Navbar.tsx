
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectsDropdown } from "./ProjectsDropdown"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const updateIndicator = () => {
      const activeOrHovered = hoveredIndex !== null ? hoveredIndex : activeIndex
      const element = navItemsRef.current[activeOrHovered]

      if (element) {
        setIndicatorStyle({
          width: element.offsetWidth,
          left: element.offsetLeft,
        })
      }
    }

    updateIndicator()
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [hoveredIndex, activeIndex])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projectIndex = 2

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/70 backdrop-blur-lg border-b border-border/50 shadow-sm"
        : "bg-background/40 backdrop-blur-md border-b border-border/20"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold tracking-tight hover:text-muted-foreground transition-colors">
            Erick Cárcamo
          </a>

          <div className="flex items-center gap-8">
            <div className="relative flex items-center">
              <motion.div
                className="absolute bottom-0 h-1 bg-primary rounded-full"
                animate={{
                  width: indicatorStyle.width,
                  left: indicatorStyle.left,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />

              <div className="flex items-center gap-6 relative z-10 pb-1">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      navItemsRef.current[index] = el
                    }}
                    onMouseEnter={() => index !== projectIndex && setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative"
                  >
                    {index === projectIndex ? (
                      <motion.button
                        onMouseEnter={() => setIsProjectsOpen(true)}
                        onMouseLeave={() => setIsProjectsOpen(false)}
                        className="text-sm font-medium px-1 py-2 transition-colors flex items-center gap-1.5 relative z-20 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{item.label}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </motion.svg>
                      </motion.button>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a
                          href={item.href}
                          onClick={() => setActiveIndex(index)}
                          className="text-sm font-medium px-1 py-2 transition-colors relative z-20"
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-0 w-full pointer-events-auto z-40"
                >
                  <div className="max-w-6xl mx-auto px-4"
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                  >
                    <ProjectsDropdown />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
