import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SpotlightCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30"
            animate={{
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute size-64 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl"
                animate={{
                    x: mousePosition.x - 128,
                    y: mousePosition.y - 128,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 90 }}
            />
        </motion.div>
    )
}
