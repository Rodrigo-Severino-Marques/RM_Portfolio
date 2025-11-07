import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-emerald-500/5 transition-opacity duration-300" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-blob transition-opacity duration-300" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-blob animation-delay-2000 transition-opacity duration-300" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-600 rounded-full mix-blend-normal filter blur-xl opacity-10 animate-blob animation-delay-4000 transition-opacity duration-300" />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 p-1">
                    <img
                      src="/profile.jpg"
                      alt="Rodrigo Marques"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{t('hero.title')}</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-400 font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {t('hero.verified')}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
          >
            {t('hero.role')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-semibold"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/rodrigo-marques-458431207/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-teal-500 flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/Rodrigo-Severino-Marques"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:rodrigo.severino.marques@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-teal-500 hover:bg-emerald-500 flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              {t('hero.viewWork')}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-700"
            >
              {t('hero.getInTouch')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

