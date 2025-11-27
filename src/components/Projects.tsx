import { motion } from "framer-motion"
import SpotlightCard from "./SpotlightCard"

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "Real-time analytics with machine learning insights",
    icon: "📊",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration",
    icon: "🛍️",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time messaging and content sharing platform",
    icon: "💬",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative project planning and tracking",
    icon: "✓",
    tags: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Video Streaming Service",
    description: "HD video delivery with adaptive bitrate",
    icon: "🎬",
    tags: ["AWS", "FFmpeg", "React"],
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Intelligent automation for creative content",
    icon: "✨",
    tags: ["OpenAI", "Next.js", "GPT"],
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-primary rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-full"
              >
                <SpotlightCard
                  className="h-full"
                >
                  <div className="p-6 h-full flex flex-col transition-all duration-300">
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <div
                      className="mt-4 pt-4 border-t group-hover:opacity-100 opacity-0 transition-all duration-300 border-border"
                    >
                      <div className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        <a href="#" className="">Ver más →</a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
