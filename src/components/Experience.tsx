import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      title: t('experience.jobs.aceve.title'),
      company: t('experience.jobs.aceve.company'),
      location: t('experience.jobs.aceve.location'),
      type: t('experience.jobs.aceve.type'),
      period: t('experience.jobs.aceve.period'),
      technologies: [
        t('experience.technologies.reactjs'),
        t('experience.technologies.reactNative'),
        t('experience.technologies.docker'),
        t('experience.technologies.nginx'),
        t('experience.technologies.webComponents'),
        t('experience.technologies.materialUI'),
        t('experience.technologies.gitlab'),
        t('experience.technologies.jest'),
        t('experience.technologies.unitTesting'),
      ],
      description: t('experience.jobs.aceve.description'),
    },
    {
      title: t('experience.jobs.hexa.title'),
      company: t('experience.jobs.hexa.company'),
      location: t('experience.jobs.hexa.location'),
      type: t('experience.jobs.hexa.type'),
      period: t('experience.jobs.hexa.period'),
      technologies: [
        t('experience.technologies.reactjs'),
        t('experience.technologies.reactNative'),
        t('experience.technologies.docker'),
        t('experience.technologies.nginx'),
        t('experience.technologies.webComponents'),
        t('experience.technologies.materialUI'),
        t('experience.technologies.gitlab'),
        t('experience.technologies.jest'),
        t('experience.technologies.unitTesting'),
      ],
      description: t('experience.jobs.hexa.description'),
    },
    {
      title: t('experience.jobs.freelance.title'),
      company: t('experience.jobs.freelance.company'),
      location: t('experience.jobs.freelance.location'),
      type: t('experience.jobs.freelance.type'),
      period: t('experience.jobs.freelance.period'),
      technologies: [
        t('experience.technologies.react'),
        t('experience.technologies.blockchain'),
        t('experience.technologies.smartContracts'),
        t('experience.technologies.dapp'),
        t('experience.technologies.nodejs'),
        t('experience.technologies.git'),
        t('experience.technologies.digitalOcean'),
        t('experience.technologies.ubuntu'),
      ],
      description: t('experience.jobs.freelance.description'),
      achievements: [
        t('experience.jobs.freelance.achievements.0'),
        t('experience.jobs.freelance.achievements.1'),
        t('experience.jobs.freelance.achievements.2'),
        t('experience.jobs.freelance.achievements.3'),
        t('experience.jobs.freelance.achievements.4'),
      ],
    },
    {
      title: t('experience.jobs.topgolf.title'),
      company: t('experience.jobs.topgolf.company'),
      location: t('experience.jobs.topgolf.location'),
      type: t('experience.jobs.topgolf.type'),
      period: t('experience.jobs.topgolf.period'),
      technologies: [
        t('experience.technologies.technicalTroubleshooting'),
        t('experience.technologies.maintenanceManagement'),
      ],
      description: t('experience.jobs.topgolf.description'),
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('experience.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-semibold">
          {t('experience.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card relative pl-8 border-l-4 border-cyan-500"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-teal-500" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-900/30 rounded-lg">
                  <FaBriefcase className="text-cyan-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-cyan-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

