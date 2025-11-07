import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  const projects = [
    {
      title: t('projects.items.tachograph.title'),
      description: t('projects.items.tachograph.description'),
      technologies: t('projects.items.tachograph.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.tachograph.type'),
      category: t('projects.items.tachograph.category'),
      scope: t('projects.items.tachograph.scope'),
      challenges: t('projects.items.tachograph.challenges'),
    },
    {
      title: t('projects.items.fitness.title'),
      description: t('projects.items.fitness.description'),
      technologies: t('projects.items.fitness.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.fitness.type'),
      category: t('projects.items.fitness.category'),
      scope: t('projects.items.fitness.scope'),
      challenges: t('projects.items.fitness.challenges'),
    },
    {
      title: t('projects.items.nftStaking.title'),
      description: t('projects.items.nftStaking.description'),
      technologies: t('projects.items.nftStaking.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.nftStaking.type'),
      category: t('projects.items.nftStaking.category'),
      scope: t('projects.items.nftStaking.scope'),
      challenges: t('projects.items.nftStaking.challenges'),
    },
    {
      title: t('projects.items.rapidbids.title'),
      description: t('projects.items.rapidbids.description'),
      technologies: t('projects.items.rapidbids.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.rapidbids.type'),
      category: t('projects.items.rapidbids.category'),
      scope: t('projects.items.rapidbids.scope'),
      challenges: t('projects.items.rapidbids.challenges'),
    },
    {
      title: t('projects.items.realEstate.title'),
      description: t('projects.items.realEstate.description'),
      technologies: t('projects.items.realEstate.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.realEstate.type'),
      category: t('projects.items.realEstate.category'),
      scope: t('projects.items.realEstate.scope'),
      challenges: t('projects.items.realEstate.challenges'),
    },
    {
      title: t('projects.items.landingPages.title'),
      description: t('projects.items.landingPages.description'),
      technologies: t('projects.items.landingPages.technologies', { returnObjects: true }) as string[],
      type: t('projects.items.landingPages.type'),
      category: t('projects.items.landingPages.category'),
      scope: t('projects.items.landingPages.scope'),
      challenges: t('projects.items.landingPages.challenges'),
    },
  ]

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('projects.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-semibold">
          {t('projects.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-cyan-900/30 rounded-lg">
                    <FaCode className="text-cyan-400 text-xl" />
                  </div>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-1 text-sm font-semibold">
                  {project.type}
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.scope && (
                  <div className="mb-4">
                    <p className="text-cyan-400 text-sm font-semibold mb-1">
                      {t('projects.scope')}:
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                )}

                {project.challenges && (
                  <div className="mb-6">
                    <p className="text-teal-400 text-sm font-semibold mb-1">
                      {t('projects.challenges')}:
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    disabled
                    title={t('projects.projectPrivate')}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600/50 text-white rounded-lg font-medium cursor-not-allowed opacity-60"
                  >
                    <FaExternalLinkAlt />
                    {t('projects.viewProject')}
                  </motion.button>
                  <motion.button
                    disabled
                    title={t('projects.codePrivate')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-white rounded-lg font-medium cursor-not-allowed opacity-60"
                  >
                    <FaGithub />
                    {t('projects.code')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4 font-medium">
            {t('projects.footer')}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {t('projects.workTogether')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects

