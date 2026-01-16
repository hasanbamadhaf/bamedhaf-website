import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  FaShip,
  FaArrowRight,
  FaWhatsapp,
  FaPhone,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaStar,
  FaShieldAlt,
  FaArrowUp,
} from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortsMap from '../components/PortsMap'
import { useLanguage } from '../contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

// FAQ Accordion Item Component
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-base md:text-xl font-semibold text-[#0f4c75] pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="w-6 h-6 flex items-center justify-center text-[#0f4c75] text-3xl font-light">
            +
          </div>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// WaveText component for animated wavy text
const WaveText = ({ text, className }) => {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-3">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.3, delay: (wordIndex * 0.2) + (charIndex * 0.05) },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (wordIndex * 0.2) + (charIndex * 0.05),
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

function Home() {
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO – Three section layout with text and two ships */}
      <section className="relative min-h-screen md:h-screen overflow-hidden">
        <Navbar />
        <div className="h-full grid grid-cols-1 md:grid-cols-3">
          {/* Left Section - Text Block */}
          <div className="relative bg-slate-950 flex flex-col items-center justify-center px-6 md:px-8 pt-24 pb-12 md:py-12 text-center md:text-left">
            <div className="max-w-md">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-light text-white mb-6 leading-tight">
                  {t('home.hero.tagline')}
                </h1>
                <div className="w-16 h-px bg-white/30 mb-6 mx-auto md:mx-0"></div>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
                  {t('home.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <div className="flex items-center gap-3 text-white/70 text-sm">
                    <FaCheckCircle className="text-cyan-400 text-base" />
                    <span className="font-bold">{t('home.hero.feature1')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-sm">
                    <FaCheckCircle className="text-cyan-400 text-base" />
                    <span className="font-bold">{t('home.hero.feature2')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-sm">
                    <FaCheckCircle className="text-cyan-400 text-base" />
                    <span className="font-bold">{t('home.hero.feature3')}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section - Two Ships Stacked */}
          <div className="md:col-span-2 grid grid-rows-2">
            {/* Top - Passenger Ship */}
            <div className="relative group">
              <div className="block h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/passenger-ship.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/60" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 mt-16"
                  >
                    {t('home.hero.passenger.title')}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-sm md:text-base text-white/70 max-w-md mb-6"
                  >
                    {t('home.hero.passenger.subtitle')}
                  </motion.p>
                  <Link to="/contact">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-medium rounded-sm hover:bg-slate-100 transition-all"
                    >
                      <span>{t('home.hero.passenger.button')}</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom - Cargo Ship */}
            <div className="relative group">
              <div className="block h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/cargo-ship.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/60" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 mt-16"
                  >
                    {t('home.hero.cargo.title')}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-sm md:text-base text-white/70 max-w-md mb-6"
                  >
                    {t('home.hero.cargo.subtitle')}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-slate-950 transition-all"
                  >
                    <span>{t('home.hero.cargo.button')}</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Video Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative"
            >
              <div className="relative">
                {/* Circular Video/Image Container */}
                <div className="relative w-full max-w-md mx-auto aspect-square">
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-slate-800">
                    <img
                      src="/assets/who-we-are.webp"
                      alt="Who We Are"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute bottom-8 right-0 bg-slate-950 px-6 py-3 rounded-sm shadow-lg border border-cyan-500">
                    <p className="text-lg font-semibold text-white">{t('home.whoWeAre.excellenceBadge')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-6">
                <span className="text-sm font-medium text-cyan-400">{t('home.whoWeAre.badge')}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                {t('home.whoWeAre.title')}
              </h2>

              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
                {t('home.whoWeAre.description')}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  t('home.whoWeAre.feature1'),
                  t('home.whoWeAre.feature2'),
                  t('home.whoWeAre.feature3'),
                  t('home.whoWeAre.feature4')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center mt-0.5">
                      <FaCheckCircle className="text-slate-950 text-sm" />
                    </div>
                    <p className="text-sm md:text-base text-white/70 font-bold">{item}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 text-slate-950 font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-cyan-400 transition-all"
              >
                {t('home.whoWeAre.button')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIST OF PORTS COVERED */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Animated floating shapes */}
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
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
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-2 text-slate-950">
              {t('home.ports.title')}
            </h2>
            <div className="w-24 h-1 bg-slate-950 mx-auto"></div>
          </motion.div>

          {/* Ports Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto"
          >
            <img
              src="/assets/yemen-ports.webp"
              alt="Yemen map with ports"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/assets/huge-background.webp)' }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('home.why.title')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: FaShieldAlt,
                title: t('home.why.reliable.title'),
                description: t('home.why.reliable.desc'),
              },
              {
                icon: FaCheckCircle,
                title: t('home.why.professional.title'),
                description: t('home.why.professional.desc'),
              },
              {
                icon: FaGlobe,
                title: t('home.why.regional.title'),
                description: t('home.why.regional.desc'),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false }}
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-white/20 rounded-sm group-hover:border-white/40 transition-colors">
                  <feature.icon className="text-2xl text-white/60 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-3 text-white">{feature.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/assets/huge-background.webp)' }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { icon: FaClock, number: '20+', label: t('home.stats.experience') },
              { icon: FaShip, number: '500+', label: t('home.stats.shipments') },
              { icon: FaGlobe, number: '10+', label: t('home.stats.countries') },
              { icon: FaStar, number: '100%', label: t('home.stats.satisfaction') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="text-center group"
              >
                <stat.icon className="text-3xl md:text-4xl text-white/40 mx-auto mb-4 group-hover:text-white/60 transition-colors" />
                <div className="text-3xl md:text-5xl font-light mb-2 text-white">{stat.number}</div>
                <p className="text-xs md:text-sm text-white/70 tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Vision - Dark Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/huge-background.webp)' }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-950/90"></div>
            <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">{t('home.vision.title')}</h2>
            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              {t('home.vision.description')}
            </p>
            </div>
          </motion.div>

          {/* Mission - Cyan Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/huge-background.webp)' }}
            />
            {/* Subtle Gray Overlay */}
            <div className="absolute inset-0 bg-slate-700/80"></div>
            <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">{t('home.mission.title')}</h2>
            <p className="text-sm md:text-base text-white/80 max-w-md leading-relaxed">
              {t('home.mission.description')}
            </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative -mt-1">
        <motion.svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            fill="#0ea5e9"
            opacity="0.1"
            animate={{
              d: [
                "M0,20 C150,90 350,10 600,60 C850,110 1050,30 1200,90 L1200,120 L0,120 Z",
                "M0,5 C150,45 350,5 600,30 C850,55 1050,15 1200,45 L1200,120 L0,120 Z",
                "M0,20 C150,90 350,10 600,60 C850,110 1050,30 1200,90 L1200,120 L0,120 Z",
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            fill="#f8fafc"
            animate={{
              d: [
                "M0,40 C200,110 400,30 600,80 C800,130 1000,50 1200,110 L1200,120 L0,120 Z",
                "M0,25 C200,65 400,20 600,50 C800,75 1000,35 1200,65 L1200,120 L0,120 Z",
                "M0,40 C200,110 400,30 600,80 C800,130 1000,50 1200,110 L1200,120 L0,120 Z",
              ]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.svg>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              <p className="text-xs font-semibold text-slate-950 uppercase tracking-widest mb-4">{t('home.faq.heading')}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f4c75] leading-tight">
                {t('home.faq.title')}
              </h2>
            </motion.div>

            {/* Right - FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="space-y-6"
            >
              {[
                {
                  question: t('home.faq.q1'),
                  answer: t('home.faq.a1')
                },
                {
                  question: t('home.faq.q2'),
                  answer: t('home.faq.a2')
                },
                {
                  question: t('home.faq.q3'),
                  answer: t('home.faq.a3')
                }
              ].map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden border-t border-gray-800">
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/967771111440"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-slate-950 font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-gray-100 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span>{t('home.cta.whatsapp')}</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:02245599"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-gray-700 text-white font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-white/5 transition-all"
              >
                <FaPhone className="text-lg" />
                <span>{t('home.cta.call')}</span>
              </motion.a>
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
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Home
