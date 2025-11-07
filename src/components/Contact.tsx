import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ContactModal from './ContactModal'

const Contact = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const contactInfo = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: t('contact.linkedin'),
      value: 'rodrigo-marques-458431207',
      link: 'https://www.linkedin.com/in/rodrigo-marques-458431207/',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-900/30',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: t('contact.email'),
      value: 'rodrigo.severino.marques@gmail.com',
      link: 'mailto:rodrigo.severino.marques@gmail.com',
      color: 'text-teal-400',
      bgColor: 'bg-teal-900/30',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: t('contact.location'),
      value: 'Seixal, Setúbal, Portugal',
      link: '#',
      color: 'text-green-400',
      bgColor: 'bg-green-900/30',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('contact.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-medium">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card text-center group"
            >
              <div className={`${info.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <div className={info.color}>
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-400 text-sm font-semibold">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('contact.ctaTitle')}
          </h3>
          <p className="text-gray-400 mb-6 font-semibold">
            {t('contact.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.linkedin.com/in/rodrigo-marques-458431207/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500 hover:bg-teal-500 text-white rounded-full font-semibold shadow-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaLinkedin />
              {t('contact.connectLinkedin')}
            </motion.a>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-700 inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              {t('contact.sendEmail')}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Contact

