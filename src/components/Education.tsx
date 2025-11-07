import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  const education = [
    {
      institution: t('education.degrees.bucks.institution'),
      degree: t('education.degrees.bucks.degree'),
      grade: t('education.degrees.bucks.grade'),
      period: t('education.degrees.bucks.period'),
      location: t('education.degrees.bucks.location'),
      description: t('education.degrees.bucks.description'),
      project: {
        title: t('education.degrees.bucks.project.title'),
        description: t('education.degrees.bucks.project.description'),
      },
      skills: [
        t('education.skills.projectManagement'),
        t('education.skills.networkSecurity'),
        t('education.skills.databaseDesign'),
        t('education.skills.cloudComputing'),
        t('education.skills.ciscoNetworking'),
        t('education.skills.webDev'),
        t('education.skills.programming'),
      ],
    },
    {
      institution: t('education.degrees.guildford3.institution'),
      degree: t('education.degrees.guildford3.degree'),
      grade: t('education.degrees.guildford3.grade'),
      period: t('education.degrees.guildford3.period'),
      location: t('education.degrees.guildford3.location'),
      description: t('education.degrees.guildford3.description'),
      skills: [
        t('education.skills.it'),
        t('education.skills.technicalSupport'),
        t('education.skills.softwareDev'),
        t('education.skills.problemSolving'),
        t('education.skills.networking'),
      ],
    },
    {
      institution: t('education.degrees.guildford2.institution'),
      degree: t('education.degrees.guildford2.degree'),
      grade: t('education.degrees.guildford2.grade'),
      period: t('education.degrees.guildford2.period'),
      location: t('education.degrees.guildford2.location'),
      description: t('education.degrees.guildford2.description'),
      skills: [
        t('education.skills.itFundamentals'),
        t('education.skills.teamCollaboration'),
        t('education.skills.hardwareMaintenance'),
        t('education.skills.problemSolving'),
        t('education.skills.visualBasic'),
      ],
    },
  ]

  return (
    <section id="education" className="section-container bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('education.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-semibold">
          {t('education.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-teal-900/30 rounded-lg">
                  <FaGraduationCap className="text-teal-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-teal-400 font-semibold mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-teal-900/30 rounded">
                      <FaAward />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {edu.description}
              </p>

              {edu.project && (
                <div className="mb-4 p-4 bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-white mb-2">
                    {edu.project.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {edu.project.description}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {edu.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-sm font-semibold"
                  >
                    {skill}
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

export default Education

