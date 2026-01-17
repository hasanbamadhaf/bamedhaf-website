// CargoServices.jsx - Cargo and shipping services page with gallery

import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaShip, FaBox, FaAnchor, FaTruck, FaWarehouse, FaClipboardCheck, FaShieldAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

function CargoServices() {
  const { t } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Gallery images - 17 slots
  const galleryImages = [
    '/assets/cargo-gallery-1.webp',
    '/assets/cargo-gallery-2.webp',
    '/assets/cargo-gallery-3.webp',
    '/assets/cargo-gallery-4.webp',
    '/assets/cargo-gallery-5.webp',
    '/assets/cargo-gallery-6.webp',
    '/assets/cargo-gallery-7.webp',
    '/assets/cargo-gallery-8.webp',
    '/assets/cargo-gallery-9.webp',
    '/assets/cargo-gallery-10.webp',
    '/assets/cargo-gallery-11.webp',
    '/assets/cargo-gallery-12.webp',
    '/assets/cargo-gallery-13.webp',
    '/assets/cargo-gallery-14.webp',
    '/assets/cargo-gallery-15.webp',
    '/assets/cargo-gallery-16.webp',
    '/assets/cargo-gallery-17.webp',
  ]

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
  const services = [
    {
      icon: FaAnchor,
      title: t('cargo.service1.title'),
      shortDescription: t('cargo.service1.short'),
      description: t('cargo.service1.description'),
      features: [
        t('cargo.service1.feature1'),
        t('cargo.service1.feature2'),
        t('cargo.service1.feature3'),
        t('cargo.service1.feature4'),
        t('cargo.service1.feature5'),
        t('cargo.service1.feature6')
      ],
      image: "/assets/cargo1.webp"
    },
    {
      icon: FaShip,
      title: t('cargo.service2.title'),
      shortDescription: t('cargo.service2.short'),
      description: t('cargo.service2.description'),
      features: [
        t('cargo.service2.feature1'),
        t('cargo.service2.feature2'),
        t('cargo.service2.feature3'),
        t('cargo.service2.feature4'),
        t('cargo.service2.feature5'),
        t('cargo.service2.feature6')
      ],
      image: "/assets/cargo2.webp"
    },
    {
      icon: FaClipboardCheck,
      title: t('cargo.service3.title'),
      shortDescription: t('cargo.service3.short'),
      description: t('cargo.service3.description'),
      features: [
        t('cargo.service3.feature1'),
        t('cargo.service3.feature2'),
        t('cargo.service3.feature3'),
        t('cargo.service3.feature4'),
        t('cargo.service3.feature5'),
        t('cargo.service3.feature6')
      ],
      image: "/assets/cargo3.webp"
    },
    {
      icon: FaTruck,
      title: t('cargo.service4.title'),
      shortDescription: t('cargo.service4.short'),
      description: t('cargo.service4.description'),
      features: [
        t('cargo.service4.feature1'),
        t('cargo.service4.feature2'),
        t('cargo.service4.feature3'),
        t('cargo.service4.feature4'),
        t('cargo.service4.feature5'),
        t('cargo.service4.feature6')
      ],
      image: "/assets/cargo4.webp"
    },
    {
      icon: FaWarehouse,
      title: t('cargo.service5.title'),
      shortDescription: t('cargo.service5.short'),
      description: t('cargo.service5.description'),
      features: [
        t('cargo.service5.feature1'),
        t('cargo.service5.feature2'),
        t('cargo.service5.feature3'),
        t('cargo.service5.feature4'),
        t('cargo.service5.feature5'),
        t('cargo.service5.feature6')
      ],
      image: "/assets/cargo5.webp"
    },
    {
      icon: FaBox,
      title: t('cargo.service6.title'),
      shortDescription: t('cargo.service6.short'),
      description: t('cargo.service6.description'),
      features: [
        t('cargo.service6.feature1'),
        t('cargo.service6.feature2'),
        t('cargo.service6.feature3'),
        t('cargo.service6.feature4'),
        t('cargo.service6.feature5'),
        t('cargo.service6.feature6')
      ],
      image: "/assets/cargo6.webp"
    }
  ]

  const ports = [
    t('cargo.ports.aden'),
    t('cargo.ports.hodeidah'),
    t('cargo.ports.mukalla'),
    t('cargo.ports.saleef'),
    t('cargo.ports.mokha'),
    t('cargo.ports.international')
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Image */}
      <section className="relative h-screen overflow-hidden">
        <Navbar />
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-bottom md:bg-center"
          style={{ backgroundImage: 'url(/assets/cargo-ship.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
          >
            {t('cargo.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {t('cargo.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Redesigned with Images */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('cargo.services.heading')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
              {t('cargo.services.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-sm">
                    <div className="aspect-[4/3] bg-slate-900">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/assets/cargo-ship.webp'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-white/40 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <p
                      className="text-sm md:text-base text-white/60 mb-8 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
                        {t('cargo.services.keyFeatures')}
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + (idx * 0.05) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center mt-0.5 group-hover/item:bg-cyan-500/20 transition-colors">
                              <FaShieldAlt className="text-cyan-400 text-xs" />
                            </div>
                            <span className="text-sm md:text-base text-white/70 font-semibold group-hover/item:text-white transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-950">{t('cargo.whoWeServe.title')}</h2>
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: '👤',
                title: t('cargo.whoWeServe.individuals'),
                description: t('cargo.whoWeServe.individualsDesc')
              },
              {
                icon: '🏢',
                title: t('cargo.whoWeServe.companies'),
                description: t('cargo.whoWeServe.companiesDesc')
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{client.icon}</div>
                <h3 className="text-lg md:text-xl font-medium mb-3 text-slate-950">{client.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports & Destinations */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('cargo.ports.title')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/50">{t('cargo.ports.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {ports.map((port, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <FaAnchor className="text-2xl text-white/40 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
                <p className="text-sm md:text-base text-white/60">{port}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Gallery Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-slate-950">
        {/* Background Image - Desktop only */}
        <div
          className="desktop-bg-only absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/cargo-backimage.webp)' }}
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
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">{t('cargo.gallery.title')}</h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/70">{t('cargo.gallery.subtitle')}</p>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer break-inside-avoid mb-6 md:mb-8"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={image}
                    alt={`${t('cargo.gallery.altText')} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/assets/cargo-ship.webp'
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-300"></div>

                  {/* View Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-slate-950 text-xs font-medium uppercase tracking-wider">
                      {t('cargo.gallery.view')}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            alt={t('cargo.gallery.lightboxAlt')}
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
              {t('cargo.cta.title')}
            </h2>
            <p className="text-base md:text-lg text-white/50 mb-12 max-w-2xl mx-auto">
              {t('cargo.cta.subtitle')}
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
                <span>{t('cargo.cta.whatsapp')}</span>
              </motion.a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-white/30 text-white font-medium rounded-sm text-sm md:text-base tracking-wide hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                {t('cargo.cta.contactUs')}
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

export default CargoServices
