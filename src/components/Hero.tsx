import { motion } from "framer-motion"
import RocketAnimationCard from "./RocketAnimationCard"

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Erick Cárcamo
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollador Full-stack especializado en crear experiencias web modernas, rápidas y escalables. Con más de
            5 años de experiencia construyendo productos digitales innovadores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 justify-center pt-4"
          >
            <button className="cursor-pointer px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Ver mi trabajo
            </button>
            <a href="assets/cv_download.pdf" download="CV.pdf" className="cursor-pointer">
              <button className="cursor-pointer px-8 py-3 border border-border rounded-full font-medium hover:border-foreground transition-all duration-300 hover:scale-105">
                Descargar CV
              </button>
            </a>
          </motion.div>
        </motion.div>

        <RocketAnimationCard />
      </div>
    </section>
  )
}
