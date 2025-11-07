import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white mb-2">
              Rodrigo Marques
            </p>
            <p className="text-sm text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/rodrigo-marques-458431207/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rodrigo-Severino-Marques"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rodrigo.severino.marques@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 flex items-center justify-center text-white transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            {t('footer.madeWith')} <FaHeart className="text-red-500" /> {t('footer.by')}
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

