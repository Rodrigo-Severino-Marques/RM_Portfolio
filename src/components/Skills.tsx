import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaServer,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
  SiEthereum,
  SiHedera,
  SiSolidity,
  SiDocker,
  SiGitlab,
  SiNginx,
  SiJest,
  SiPrettier,
  SiMui,
} from 'react-icons/si'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: 'React', icon: FaReact, level: 95, color: 'text-blue-500' },
        { name: 'React Native', icon: FaReact, level: 90, color: 'text-cyan-500' },
        { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-600' },
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-yellow-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 80, color: 'text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: 'text-cyan-400' },
        { name: 'Material UI', icon: SiMui, level: 85, color: 'text-blue-400' },
        { name: 'Web Components', icon: FaReact, level: 80, color: 'text-teal-400' },
      ],
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85, color: 'text-green-600' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-600' },
        { name: 'GitLab', icon: SiGitlab, level: 85, color: 'text-orange-500' },
        { name: 'Docker', icon: SiDocker, level: 80, color: 'text-blue-500' },
        { name: 'Nginx', icon: SiNginx, level: 75, color: 'text-green-500' },
        { name: 'MySQL', icon: FaDatabase, level: 80, color: 'text-blue-700' },
        { name: 'Vercel', icon: SiVercel, level: 90, color: 'text-white' },
        { name: 'Digital Ocean', icon: FaCloud, level: 75, color: 'text-blue-500' },
        { name: 'Ubuntu', icon: FaServer, level: 80, color: 'text-orange-600' },
        { name: 'Jest', icon: SiJest, level: 85, color: 'text-red-400' },
        { name: 'Prettier', icon: SiPrettier, level: 90, color: 'text-pink-400' },
      ],
    },
    {
      title: t('skills.categories.blockchain'),
      skills: [
        { name: 'Ethereum', icon: SiEthereum, level: 85, color: 'text-cyan-400' },
        { name: 'Hedera Network', icon: SiHedera, level: 80, color: 'text-teal-400' },
        { name: 'Solidity', icon: SiSolidity, level: 80, color: 'text-gray-300' },
        { name: 'dApp Development', icon: SiEthereum, level: 85, color: 'text-teal-500' },
        { name: 'Smart Contracts', icon: SiSolidity, level: 80, color: 'text-white' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{t('skills.title')}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg font-semibold">
          {t('skills.subtitle')}
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gray-700/50 rounded-lg border border-gray-600"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent className={`${skill.color} text-2xl`} />
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

