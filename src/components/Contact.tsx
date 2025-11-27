import { motion } from "framer-motion"

const contacts = [
  { label: "Email", value: "gusthideon.web@gmail.com", icon: "✉️", href: "mailto:john@example.com" },
  { label: "LinkedIn", value: "@erick", icon: "💼", href: "#" },
  { label: "GitHub", value: "@gustavitoo", icon: "🐙", href: "#" },
]

export default function Contact() {
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
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Conectemos</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-primary rounded-full mx-auto mb-4"
            />
            <p className="text-muted-foreground text-lg">¿Tienes un proyecto en mente? Me encantaría escucharte</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <p className="text-xs text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-semibold group-hover:text-primary transition-colors text-center">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-primary/20 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Enviarme un email</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground border-t border-border pt-8"
          >
            <p>© 2025 Erick Cárcamo. Todos los derechos reservados.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
