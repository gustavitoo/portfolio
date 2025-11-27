import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "Real-time analytics with machine learning insights",
    icon: "📊",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration",
    icon: "🛍️",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time messaging and content sharing platform",
    icon: "💬",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative project planning and tracking",
    icon: "✓",
  },
  {
    id: 5,
    title: "Video Streaming Service",
    description: "HD video delivery with adaptive bitrate",
    icon: "🎬",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Intelligent automation for creative content",
    icon: "✨",
  },
]

export function ProjectsDropdown() {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg"
    >
      <div className="p-8">
        <h3 className="text-lg font-semibold mb-6">Proyectos destacados</h3>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group cursor-pointer group"
            >
              <div className="bg-background border border-border rounded-lg p-4 h-full hover:border-primary/50 transition-all duration-300">
                <motion.div className="text-3xl mb-3" whileHover={{ rotate: 12 }}>
                  {project.icon}
                </motion.div>
                <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                  {project.description}
                </p>
                <div
                  className="mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 duration-300"
                >
                  Ver más →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
