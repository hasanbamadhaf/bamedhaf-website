import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaHistory, FaEye, FaBullseye, FaHandshake, FaAward, FaCertificate, FaGlobe, FaArrowUp, FaShip, FaUsers, FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LightRays from '../components/LightRays'
import { useLanguage } from '../contexts/LanguageContext'

function About() {
  const { t } = useLanguage()
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

  const stats = [
    { number: "20+", label: t('about.stats.years') },
    { number: "1000+", label: t('about.stats.vessels') },
    { number: "6", label: t('about.stats.offices') },
    { number: "24/7", label: t('about.stats.support') }
  ]

  const values = [
    {
      icon: FaHandshake,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description')
    },
    {
      icon: FaAward,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: FaCertificate,
      title: t('about.values.professional.title'),
      description: t('about.values.professional.description')
    },
    {
      icon: FaGlobe,
      title: t('about.values.global.title'),
      description: t('about.values.global.description')
    }
  ]

  const milestones = [
    {
      year: "2003",
      title: t('about.journey.2003.title'),
      description: t('about.journey.2003.description')
    },
    {
      year: "",
      title: t('about.journey.2008.title'),
      description: t('about.journey.2008.description')
    },
    {
      year: "",
      title: t('about.journey.2015.title'),
      description: t('about.journey.2015.description')
    },
    {
      year: "",
      title: t('about.journey.2025.title'),
      description: t('about.journey.2025.description')
    }
  ]

  const offices = [
    { city: "Aden", location: "Al-Mualla, Main Street, next to Hael Mosque, Alsanfory Building, 3rd Floor" },
    { city: "Hodeidah", location: "Port Area, Commercial District" },
    { city: "Sana'a", location: "Business Center, Airport Road" },
    { city: "Mukalla", location: "Port District, Coastal Road" },
    { city: "Mokha", location: "Port Vicinity" },
    { city: "Saleef", location: "Port Area" }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-slate-950">
        <Navbar />
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
          >
            {t('about.hero.title')}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-16 h-px bg-white/30 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
          >
            {t('about.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-5xl font-light mb-8 text-white">{t('about.story.title')}</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t('about.story.paragraph2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="space-y-8"
            >
              <div className="p-6 md:p-8 bg-white/5 border-l-2 border-cyan-400">
                <h3 className="text-xl md:text-2xl font-medium mb-3 text-white">{t('about.vision.title')}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>

              <div className="p-6 md:p-8 bg-white/5 border-l-2 border-cyan-400">
                <h3 className="text-xl md:text-2xl font-medium mb-3 text-white">{t('about.mission.title')}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-950">{t('about.values.title')}</h2>
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-slate-200 rounded-sm group-hover:border-slate-400 transition-colors">
                  <value.icon className="text-2xl text-slate-600 group-hover:text-slate-950 transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-medium mb-3 text-slate-950">{value.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-950">{t('about.journey.title')}</h2>
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-cyan-500 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="relative"
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Left/Right Content */}
                    <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                      <div className="bg-white border border-slate-200 rounded-sm p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-slate-900">{milestone.title}</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Dot - Offset toward card side */}
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? 'right-1/2 translate-x-1/4' : 'left-1/2 -translate-x-1/4'
                    }`}>
                      <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Operations */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/assets/huge-background.png)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('about.regional.title')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/60">{t('about.regional.subtitle')}</p>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-white/20 rounded-sm p-8 md:p-10">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{t('about.regional.ourOffice')}</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">{t('about.regional.aden')}</h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                {t('about.regional.address')}
              </p>

              {/* Google Maps Embed */}
              <div className="mb-6 rounded-sm overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5!2d45.0286!3d12.7855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631d4a1bc4c3c1d%3A0x8c5d5d5d5d5d5d5d!2sBamedhaf%20Shipping%20Agency!5e0!3m2!1sen!2s!4v1705000000000!5m2!1sen!2s"
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

          {/* Ports We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white">{t('about.regional.portsTitle')}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {[
                  t('about.regional.port1'),
                  t('about.regional.port2'),
                  t('about.regional.port3'),
                  t('about.regional.port4'),
                  t('about.regional.port5'),
                  t('about.regional.port6'),
                  t('about.regional.port7'),
                  t('about.regional.port8'),
                  t('about.regional.port9'),
                  t('about.regional.port10'),
                  t('about.regional.port11'),
                  t('about.regional.port12'),
                  t('about.regional.port13')
                ].map((port, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-2 text-sm md:text-base text-white/70"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>{port}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-base text-white/50 italic">
                  {t('about.regional.expansion')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
              {t('about.cta.title')}
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/967771111440"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-slate-950 font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-white/90 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span>{t('about.cta.whatsapp')}</span>
              </motion.a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-white/30 text-white font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                {t('about.cta.contactUs')}
              </Link>
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

export default About
