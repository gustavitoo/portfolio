import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([])

  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("theme") === "dark")

  useEffect(() => {
    const handleThemeChange = () => {
      const newDarkMode = localStorage.getItem("theme") === "dark"
      setDarkMode(newDarkMode)
    }

    window.addEventListener("storage", handleThemeChange)
    return () => window.removeEventListener("storage", handleThemeChange)
  }, [darkMode])

  useEffect(() => {
    const spawnStar = () => {
      const star: Star = {
        id: Date.now(),
        x: Math.random() * 1000 - 500,
        y: -140,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 1 + 1.4,
        delay: Math.random() * 0.3,
      }

      setStars(prev => [...prev.slice(-90), star])
    }

    const interval = setInterval(spawnStar, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      className="mt-16 relative h-64 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border overflow-hidden flex items-center justify-center"
    >
      {stars.map(star => (
        <motion.div
          key={star.id}
          initial={{
            opacity: 0,
            x: star.x,
            y: star.y,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: star.x + 150,
            y: star.y + 350,
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
          }}
          className={`absolute rounded-full pointer-events-none`}
          style={{
            width: star.size,
            height: star.size,
            backgroundColor: darkMode ? "white" : "black",
            boxShadow: `0px 0px 6px 2px rgba(255,255,255,0.7)`,
          }}
        />
      ))}

      <div className="text-center relative z-10">
        <motion.div className="text-6xl mb-4"
          animate={{
            rotateZ: [-110, 30, -110],
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
            },
          }}
        >
          🚀
        </motion.div>
        <p className="text-muted-foreground">Listo para impulsar tu siguiente proyecto</p>
      </div>
    </motion.div>
  )
}
