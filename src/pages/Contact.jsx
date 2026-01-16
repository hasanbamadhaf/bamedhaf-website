import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaArrowUp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LightRays from '../components/LightRays'
import { useLanguage } from '../contexts/LanguageContext'

function Contact() {
  const { t, language } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      titleKey: "contact.info.phone",
      details: ["02245599", "+967 771111440"],
      link: "tel:02245599"
    },
    {
      icon: FaWhatsapp,
      titleKey: "contact.info.whatsapp",
      details: ["+967 771111440"],
      link: "https://wa.me/967771111440"
    },
    {
      icon: FaEnvelope,
      titleKey: "contact.info.email",
      details: ["bamedhafshipping@gmail.com"],
      link: "mailto:bamedhafshipping@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      titleKey: "contact.info.mainOffice",
      detailsKey: ["contact.offices.adenAddress"],
      link: null
    }
  ]


  return (
    <div className="min-h-screen bg-white text-slate-950" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-slate-950">
        {/* Light Rays Effect */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.3}
          lightSpread={0.5}
          rayLength={1.2}
          fadeDistance={0.8}
          saturation={0.3}
          mouseInfluence={0.03}
          noiseAmount={0.1}
          followMouse={true}
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white">{t('contact.hero.title')}</h1>
            <div className="w-16 h-px bg-white/30 mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-white/50 leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 auto-rows-fr">
            {contactInfo.map((info, index) => {
              const CardWrapper = info.link ? 'a' : 'div'
              const cardProps = info.link ? {
                href: info.link,
                target: info.link.startsWith('http') ? '_blank' : undefined,
                rel: info.link.startsWith('http') ? 'noopener noreferrer' : undefined,
              } : {}

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                  className="h-full"
                >
                  <CardWrapper
                    {...cardProps}
                    className={`block text-center group bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all h-full ${info.link ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                  >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-cyan-100 rounded-full">
                      <info.icon className="text-xl text-cyan-600" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-slate-900">{t(info.titleKey)}</h3>
                    {info.detailsKey ? (
                      info.detailsKey.map((key, idx) => (
                        <p key={idx} className="text-xs md:text-sm text-slate-500 mb-1">{t(key)}</p>
                      ))
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx} className="text-xs md:text-sm text-slate-500 mb-1">{detail}</p>
                      ))
                    )}
                  </CardWrapper>
                </motion.div>
              )
            })}
          </div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center max-w-2xl mx-auto border-t border-slate-200 pt-12"
          >
            <FaClock className="text-4xl text-slate-400 mx-auto mb-6" />
            <h3 className="text-lg md:text-xl font-medium mb-4 text-slate-950">{t('contact.hours.title')}</h3>
            <div className="text-slate-600 space-y-2 text-sm md:text-base">
              <p>{t('contact.hours.weekdays')}</p>
              <p>{t('contact.hours.friday')}</p>
              <p className="text-xs text-slate-400 mt-4 uppercase tracking-wider">{t('contact.hours.urgent')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/assets/huge-background.webp)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-white/20 rounded-sm p-8 md:p-10">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{t('contact.offices.ourOffice')}</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">{t('contact.offices.aden')}</h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                {t('contact.offices.adenAddress')}
              </p>

              {/* Google Maps Embed */}
              <div className="mb-6 rounded-sm overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.957822688588!2d45.008712974902494!3d12.790823487508149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3df5f76498df1bc7%3A0x44ace109b6a237ed!2sFuture%20leadership%20Center!5e1!3m2!1sen!2smy!4v1768578367186!5m2!1sen!2smy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-100 transition-all duration-300"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-base text-white/70">
                  <FaPhone className="text-cyan-400 text-xl" />
                  <span>02245599</span>
                </div>
                <div className="flex items-center gap-3 text-base text-white/70">
                  <FaWhatsapp className="text-cyan-400 text-xl" />
                  <span>+967 771111440</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-white text-slate-950 rounded-sm shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center group hover:-translate-y-1 border border-slate-200"
            aria-label={t('common.scrollToTop')}
          >
            <FaArrowUp className="text-lg group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Contact
