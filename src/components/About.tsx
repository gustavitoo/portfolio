import { motion } from "framer-motion"
import SpotlightCard from "./SpotlightCard"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "APIs REST"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  { category: "AI/ML", items: ["LLMs", "Prompt Engineering", "Vector DBs", "RAG"] },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Title */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-12 h-1 bg-primary rounded-full"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                Soy un apasionado desarrollador web con una mentalidad de emprendedor. Me encanta resolver problemas
                complejos y crear soluciones elegantes que hagan la diferencia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Especializado en desarrollo Full-stack moderno, he trabajado con startups y empresas tech líderes,
                siempre enfocado en la calidad, el rendimiento y la experiencia del usuario.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy codificando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos
                open source o mentorando a otros desarrolladores.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SpotlightCard>
                <div className="p-6 hover:border-primary/50 transition-all">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <p className="text-muted-foreground mt-2">Proyectos completados</p>
                </div>
              </SpotlightCard>

              <SpotlightCard>
                <div className="p-6 hover:border-primary/50 transition-all">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-muted-foreground mt-2">Clientes satisfechos</p>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="p-6 hover:border-primary/50 transition-all">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <p className="text-muted-foreground mt-2">Años de experiencia</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8">Habilidades</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SpotlightCard className="bg-card">
                    <div className="p-6">
                      <h4 className="font-semibold mb-4">{skillGroup.category}</h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          >
                            ✓ {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
