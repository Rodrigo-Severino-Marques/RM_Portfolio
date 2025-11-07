import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud, FaLock } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: t('about.features.fullstack.title'),
      description: t('about.features.fullstack.description'),
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: t('about.features.database.title'),
      description: t('about.features.database.description'),
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: t('about.features.cloud.title'),
      description: t('about.features.cloud.description'),
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: t('about.features.security.title'),
      description: t('about.features.security.description'),
    },
  ]

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('about.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-semibold">
          {t('about.subtitle')}
        </p>

        <div className="card mb-8">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            {t('about.paragraph1')}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            {t('about.paragraph2')}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t('about.paragraph3')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card text-center"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About

