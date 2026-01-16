import { Link } from 'react-router-dom'
import { FaAnchor, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-950 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaAnchor className="text-3xl text-cyan-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Bamedhaf</h3>
                <p className="text-sm text-cyan-300">Shipping Agency</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-400">{t('home.footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('home.footer.quickLinks')}</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm md:text-base text-gray-400 hover:text-cyan-400 transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/cargo" className="block text-sm md:text-base text-gray-400 hover:text-cyan-400 transition-colors">
                {t('nav.cargo')}
              </Link>
              <Link to="/travel" className="block text-sm md:text-base text-gray-400 hover:text-cyan-400 transition-colors">
                {t('nav.passenger')}
              </Link>
              <Link to="/about" className="block text-sm md:text-base text-gray-400 hover:text-cyan-400 transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-sm md:text-base text-gray-400 hover:text-cyan-400 transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('home.footer.contact')}</h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400">
              <p className="flex items-center gap-2">
                <FaPhone className="text-cyan-400" />
                02245599
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-cyan-400" />
                +967 771111440
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" />
                bamedhafshipping@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('home.footer.location')}</h4>
            <p className="text-sm md:text-base text-gray-400">
              Yemen - Aden - Al-Mualla<br />
              Main Street, next to Hael Mosque<br />
              Alsanfory Building, 3rd Floor
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-500">
          <p>{t('home.footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
