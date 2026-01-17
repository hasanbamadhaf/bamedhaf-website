// PassengerTrips.jsx - Passenger ferry travel page with masonry gallery

import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Masonry from '../components/Masonry'
import { useState, useEffect, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function PassengerTrips() {
  const { t } = useLanguage()
  // Gallery images - add your 12 image filenames here
  const galleryImages = [
    '/assets/gallery-1.webp',
    '/assets/gallery-2.webp',
    '/assets/gallery-3.webp',
    '/assets/gallery-4.webp',
    '/assets/gallery-5.webp',
    '/assets/gallery-6.webp',
    '/assets/gallery-7.webp',
    '/assets/gallery-8.webp',
    '/assets/gallery-9.webp',
    '/assets/gallery-10.webp',
    '/assets/gallery-11.webp',
    '/assets/gallery-12.webp',
    '/assets/gallery-13.webp',
    '/assets/gallery-14.webp',
    '/assets/gallery-15.webp',
    '/assets/gallery-16.webp',
    '/assets/gallery-17.webp',
    '/assets/gallery-18.webp',
    '/assets/gallery-19.webp',
    '/assets/gallery-20.webp',
    '/assets/gallery-21.webp',
    '/assets/gallery-22.webp',
    '/assets/gallery-23.webp',
    '/assets/gallery-24.webp',
    '/assets/gallery-25.webp',
    '/assets/gallery-26.webp',
    '/assets/gallery-27.webp',
    '/assets/gallery-28.webp',
    '/assets/gallery-29.webp',
    '/assets/gallery-30.webp',
    '/assets/gallery-31.webp',
    '/assets/gallery-32.webp',
  ]

  const [selectedImage, setSelectedImage] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Transform gallery images into masonry items format
  const masonryItems = useMemo(() => {
    // Generate varied heights for masonry effect
    const heights = [400, 500, 450, 550, 420, 480, 520, 460, 530, 490, 440, 510, 470, 500, 450, 520, 480, 460, 530, 490, 440, 510, 470, 500, 450, 520, 480, 460, 530, 490, 440, 500];

    return galleryImages.map((img, index) => ({
      id: `gallery-${index}`,
      img: img,
      height: heights[index % heights.length],
      onClick: (item) => setSelectedImage(item.img)
    }));
  }, [galleryImages]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Image */}
      <section className="relative h-screen overflow-hidden">
        <Navbar />
        <div
          className="absolute inset-0 bg-cover bg-bottom md:bg-center"
          style={{ backgroundImage: 'url(/assets/passenger-ship.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
          >
            {t('passenger.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {t('passenger.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('passenger.included.title')}</h2>
            <div className="w-16 h-px mx-auto bg-white/30"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: '❄️', title: t('passenger.included.ac.title'), description: t('passenger.included.ac.description') },
              { icon: '🍽️', title: t('passenger.included.food.title'), description: t('passenger.included.food.description') },
              { icon: '🚻', title: t('passenger.included.facilities.title'), description: t('passenger.included.facilities.description') },
              { icon: '📺', title: t('passenger.included.entertainment.title'), description: t('passenger.included.entertainment.description') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                <h3 className="text-base md:text-lg font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Requirements */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-950">{t('passenger.requirements.title')}</h2>
            <div className="w-16 h-px bg-slate-300 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600">{t('passenger.requirements.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                step: t('passenger.requirements.step1'),
                title: t('passenger.requirements.req1.title'),
                description: t('passenger.requirements.req1.description'),
                tip: t('passenger.requirements.req1.tip')
              },
              {
                step: t('passenger.requirements.step2'),
                title: t('passenger.requirements.req2.title'),
                description: t('passenger.requirements.req2.description'),
                tip: t('passenger.requirements.req2.tip')
              },
              {
                step: t('passenger.requirements.step3'),
                title: t('passenger.requirements.req3.title'),
                description: t('passenger.requirements.req3.description'),
                tip: t('passenger.requirements.req3.tip')
              }
            ].map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 border border-slate-200 rounded-sm p-6 md:p-8 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number and divider */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-slate-400 font-medium tracking-widest text-sm">
                    {req.step}
                  </div>
                  <div className="h-px flex-1 ml-4 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"></div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl md:text-2xl font-medium mb-3 text-slate-950">{req.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">{req.description}</p>

                {/* Tip box */}
                <div className="rounded-sm bg-slate-100 border border-slate-200 px-4 py-3">
                  <p className="text-xs md:text-sm text-slate-600">{req.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm border border-slate-200 bg-slate-50 p-6 md:p-8 max-w-6xl mx-auto"
          >
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl font-medium text-slate-950 mb-2">
                {t('passenger.requirements.help.title')}
              </p>
              <p className="text-sm md:text-base text-slate-600">
                {t('passenger.requirements.help.description')}
              </p>
            </div>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/967771111440"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-slate-950 text-white font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-slate-900 transition-all whitespace-nowrap"
            >
              <FaWhatsapp className="text-xl" />
              <span>{t('passenger.requirements.help.button')}</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Card Style */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-slate-950">
        {/* Background Image - Desktop only */}
        <div
          className="desktop-bg-only absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/passenger-background.webp)' }}
        />
        {/* Dark Overlay for readability */}
        <div className="desktop-bg-only absolute inset-0 bg-slate-950/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('passenger.gallery.title')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </motion.div>

          {/* Masonry Gallery */}
          <div className="h-[3800px] md:h-[3100px] lg:h-[2200px] xl:h-[2000px]">
            <Masonry
              items={masonryItems}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
              stagger={0.05}
              duration={0.6}
            />

          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt={t('passenger.gallery.altText')}
            className="max-w-full max-h-full object-contain rounded-sm"
          />
          <button
            className="absolute top-8 right-8 text-white text-4xl hover:text-white/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-950 border-t border-white/5">
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
              {t('passenger.cta.title')}
            </h2>
            <p className="text-base md:text-lg text-white/50 mb-12 max-w-2xl mx-auto">
              {t('passenger.cta.subtitle')}
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
                <span>{t('passenger.cta.whatsapp')}</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:02245599"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-white/30 text-white font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                <FaPhone className="text-lg" />
                <span>{t('passenger.cta.callNow')}</span>
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

export default PassengerTrips
