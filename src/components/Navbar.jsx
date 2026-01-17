// Navbar.jsx - Navigation bar with mobile menu and language switcher

import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { language, toggleLanguage, t } = useLanguage()

  const handleLanguageChange = () => {
    toggleLanguage()
    navigate('/')
    setLangDropdownOpen(false)
  }

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/cargo', label: t('nav.cargo') },
    { path: '/travel', label: t('nav.passenger') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-sm md:text-base font-medium tracking-wide bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent hover:from-cyan-50 hover:via-cyan-100 hover:to-blue-200 transition-all duration-300">
              Bamedhaf Shipping Agency
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-[1.55rem] left-0 right-0 h-0.5 bg-cyan-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'العربية'}</span>
                <span className={`text-xs transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}>▲</span>
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 w-36 bg-white border border-slate-200 rounded-sm shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        handleLanguageChange()
                      }}
                      className="w-full flex items-center justify-center px-4 py-3 text-sm transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    >
                      <span>{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2 bg-cyan-500 text-white text-sm font-medium rounded-md hover:bg-cyan-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white shadow-lg"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-slate-950'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4 border-t border-slate-200 space-y-3 px-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                  <button
                    onClick={() => {
                      handleLanguageChange()
                      setIsOpen(false)
                    }}
                    className="w-full text-sm text-slate-500 hover:text-slate-900 transition-colors py-2 font-medium"
                  >
                    {language === 'en' ? 'عربي' : 'English'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
