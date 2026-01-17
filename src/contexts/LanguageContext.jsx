// LanguageContext.jsx - Provides English/Arabic translations throughout the app

import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.cargo': 'Cargo Services',
    'nav.passenger': 'Passenger Trips',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'nav.call': 'Call',

    // Home Page
    // Hero Section
    'home.hero.tagline': 'Your trusted partner',
    'home.hero.description': 'Over 20 years of excellence in maritime services connecting Yemen and the Horn of Africa',
    'home.hero.feature1': 'Safe & Reliable',
    'home.hero.feature2': 'Professional Crew',
    'home.hero.feature3': '24/7 Support',
    'home.hero.passenger.title': 'Passenger Services',
    'home.hero.passenger.subtitle': 'Aden ↔ Berbera maritime travel',
    'home.hero.passenger.button': 'Book Now',
    'home.hero.cargo.title': 'Cargo Services',
    'home.hero.cargo.subtitle': 'Ocean freight & logistics solutions',
    'home.hero.cargo.button': 'Learn More',
    // Who We Are Section
    'home.whoWeAre.badge': 'Who We Are',
    'home.whoWeAre.excellenceBadge': 'Maritime Excellence',
    'home.whoWeAre.title': 'Building Trust Through Excellence',
    'home.whoWeAre.description': 'Over the years, Bamedhaf Shipping Agency has proven itself as a strong and reliable force in maritime services across Yemen, the Horn of Africa, and beyond, with an ever-growing ambition for geographical expansion. We take pride in delivering dependable shipping solutions supported by strong partnerships, innovative operations, and uncompromising quality standards.',
    'home.whoWeAre.companyName': 'Bamedhaf Shipping Agency',
    'home.whoWeAre.region': 'Yemen, and beyond',
    'home.whoWeAre.feature1': 'Established presence across major Yemeni ports',
    'home.whoWeAre.feature2': 'Strategic partnerships with international shipping lines',
    'home.whoWeAre.feature3': 'Commitment to safety and reliability',
    'home.whoWeAre.feature4': 'Customer-focused approach to maritime solutions',
    'home.whoWeAre.button': 'Learn More About Us',
    // Ports Section
    'home.ports.title': 'List of Ports Covered',
    // Why Choose Section
    'home.why.title': 'Why Choose Bamedhaf',
    'home.why.reliable.title': 'Reliable & Secure',
    'home.why.reliable.desc': 'Decades of operations with strict safety standards for both cargo and passengers.',
    'home.why.professional.title': 'Professional Service',
    'home.why.professional.desc': 'Experienced crew and operations teams ensuring clear communication and smooth journeys.',
    'home.why.regional.title': 'Regional Reach',
    'home.why.regional.desc': 'Strong connections across Yemen and the Horn of Africa with trusted partners and agents.',
    // Stats Section
    'home.stats.experience': 'Years Experience',
    'home.stats.shipments': 'Successful Shipments',
    'home.stats.countries': 'Connected Countries',
    'home.stats.satisfaction': 'Client Satisfaction',
    // Vision & Mission
    'home.vision.title': 'Our Vision',
    'home.vision.description': 'To be the leading maritime services provider in Yemen and the Horn of Africa, recognized for delivering unmatched quality, innovation, and sustainable value to our clients and partners across the region and beyond.',
    'home.mission.title': 'Our Mission',
    'home.mission.description': 'To connect regional and international markets through safe, reliable, and efficient maritime services. We are committed to operational excellence, customer satisfaction, and building trusted partnerships across the shipping industry.',
    // FAQ Section
    'home.faq.heading': 'FAQS',
    'home.faq.title': 'Frequently Asked Question?',
    'home.faq.q1': 'What ports do you serve in Yemen?',
    'home.faq.a1': 'We provide comprehensive services at all major Yemeni ports including Aden, Hodeidah, Mukalla, Saleef, and Ras Isa Terminal. Our experienced teams are stationed at each location to ensure seamless operations.',
    'home.faq.q2': 'Do you handle both cargo and passenger services?',
    'home.faq.a2': 'Yes, we offer both cargo shipping services and passenger travel services. Our cargo division handles sea freight forwarding, customs clearance, and inland transportation, while our passenger services provide safe maritime travel between Aden and Berbera.',
    'home.faq.q3': 'How can I book passenger tickets or cargo shipments?',
    'home.faq.a3': 'You can contact us directly via WhatsApp at +967 771111440 or call our office at 02-245599. Our team will guide you through the booking process and provide all necessary information about schedules, rates, and requirements.',
    // CTA Section
    'home.cta.title': 'Ready to Ship or Travel?',
    'home.cta.subtitle': 'Reach out to our team - we\'ll guide you through the next steps.',
    'home.cta.whatsapp': 'WhatsApp',
    'home.cta.call': 'Call Now',
    'home.footer.tagline': 'Your trusted maritime partner in Yemen for over 20 years',
    'home.footer.quickLinks': 'Quick Links',
    'home.footer.contact': 'Contact',
    'home.footer.location': 'Location',
    'home.footer.copyright': '© 2025 Bamedhaf Shipping Agency. All rights reserved.',

    // Common
    'common.backHome': 'Back to Home',
    'common.more': 'MORE',
    'common.contactUs': 'Contact Us',
    'common.getQuote': 'Get a Quote',
    'common.learnMore': 'Learn More',

    // Passenger Trips
    'passenger.hero.title1': 'Premier Shipping Agency in Yemen',
    'passenger.hero.subtitle1': 'with offices in Hodeidah, Sana\'a, Aden, Mokha, Mukalla and Saleef',
    'passenger.hero.title2': 'Passenger Trips',
    'passenger.hero.subtitle2': 'Travel between Aden and Berbera with comfort and safety',
    'passenger.hero.title3': 'Safe & Comfortable Journey',
    'passenger.hero.subtitle3': 'Experience premium maritime travel services with us',
    'passenger.title': 'Passenger Trips',
    'passenger.subtitle': 'Coming soon - Travel between Aden and Berbera',

    // Cargo Services
    'cargo.hero.title': 'Comprehensive Cargo Services',
    'cargo.hero.subtitle': 'From sea freight to land transportation, we provide end-to-end cargo solutions for businesses across Yemen and international destinations',
    'cargo.services.title': 'Our Services',
    'cargo.ports.title': 'Ports & Destinations',
    'cargo.ports.subtitle': 'We serve major ports across Yemen and beyond',
    'cargo.why.title': 'Why Choose Bamedhaf?',
    'cargo.cta.title': 'Ready to Ship Your Cargo?',
    'cargo.cta.subtitle': 'Contact us today for a customized shipping solution',

    // About
    'about.hero.title': 'About Bamedhaf',
    'about.hero.subtitle': 'Over 20 years of excellence in maritime and cargo services across Yemen',
    'about.story.title': 'Our Story',
    'about.vision.title': 'Our Vision',
    'about.mission.title': 'Our Mission',
    'about.values.title': 'Our Core Values',
    'about.journey.title': 'Our Journey',
    'about.offices.title': 'Our Offices',
    'about.offices.subtitle': 'Serving you from multiple locations across Yemen',

    // Contact
    'contact.hero.title': 'Get In Touch',
    'contact.hero.subtitle': 'Have questions? We\'re here to help',
    'contact.info.phone': 'Phone',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.email': 'Email',
    'contact.info.mainOffice': 'Main Office',
    'contact.info.sendMessage': 'Send Message',
    'contact.info.contact': 'Contact',
    'contact.hours.title': 'Working Hours',
    'contact.hours.weekdays': 'Saturday - Thursday: 8:00 AM - 5:00 PM',
    'contact.hours.friday': 'Friday: Closed',
    'contact.hours.urgent': 'Available 24/7 for urgent matters',
    'contact.offices.title': 'Our Offices',
    'contact.offices.subtitle': 'Strategic presence across key maritime markets',
    'contact.offices.ourOffice': 'Our Office',
    'contact.offices.aden': 'Aden, Yemen',
    'contact.offices.adenAddress': 'Al-Mualla, Main Street, next to Hael Mosque, Alsanfory Building, 3rd Floor',
    'contact.offices.hodeidah': 'Hodeidah',
    'contact.offices.hodeidahAddress': 'Port Area, Commercial District',
    'contact.offices.sanaa': 'Sana\'a',
    'contact.offices.sanaaAddress': 'Business Center, Airport Road',
    'contact.offices.mukalla': 'Mukalla',
    'contact.offices.mukallaAddress': 'Port District, Coastal Road',
    'contact.offices.mokha': 'Mokha',
    'contact.offices.mokhaAddress': 'Port Vicinity',
    'contact.offices.saleef': 'Saleef',
    'contact.offices.saleefAddress': 'Port Area',
    'contact.offices.contactMain': 'Contact Main Office',

    // Cargo Services Page
    'cargo.hero.title': 'Comprehensive Cargo Services',
    'cargo.hero.description': 'From sea freight to land transportation, we provide end-to-end cargo solutions for businesses across Yemen and international destinations',
    'cargo.services.heading': 'Our Services',
    'cargo.services.subtitle': 'Comprehensive cargo solutions tailored to your business needs',
    'cargo.services.keyFeatures': 'Key Features',

    // Cargo Service 1 - Port Agency
    'cargo.service1.title': 'Port Agency & Husbandry',
    'cargo.service1.short': 'Complete port agency services for vessels arriving at Yemeni ports',
    'cargo.service1.description': 'As a <strong>leading port agency in Yemen</strong>, We deliver <strong>end-to-end port agency and husbandry services</strong> for our cargo vessels calling at Yemeni ports, ensuring <strong>efficient turnaround</strong> and <strong>seamless cargo operations</strong>. As the vessel\'s appointed representative, we manage <strong>port coordination, berth scheduling</strong>, and liaison with terminals, stevedores, and local authorities to support safe and timely cargo handling. Our services include <strong>full documentation management, customs and port formalities</strong>, and dedicated crew support where required, ensuring <strong>compliance with local regulations</strong> and minimizing operational delays for shipowners, operators, and charterers.',
    'cargo.service1.feature1': '24/7 Vessel Representation at Major Ports',
    'cargo.service1.feature2': 'Port Authority Coordination & Communication',
    'cargo.service1.feature3': 'Crew Change & Shore Leave Arrangements',
    'cargo.service1.feature4': 'Complete Maritime Documentation Services',
    'cargo.service1.feature5': 'Provisions & Ship Supply Coordination',
    'cargo.service1.feature6': 'Emergency Response & Support Services',

    // Cargo Service 2 - Sea Freight
    'cargo.service2.title': 'Sea Freight Forwarding',
    'cargo.service2.short': 'Global import and export sea freight services',
    'cargo.service2.description': 'Connect your business to the world through our <strong>comprehensive sea freight forwarding services</strong>. We provide reliable global sea freight forwarding solutions for <strong>import and export cargo</strong>, connecting Yemen to key international trade routes. Whether transporting <strong>raw materials, finished goods, oil, or live animals</strong> including sheep, cattle, and camels we manage <strong>containerized cargo, break bulk, and specialized shipments</strong> with precision and care. Through our established relationships with <strong>major shipping lines</strong>, we secure <strong>competitive freight rates, dependable sailing schedules</strong>, and efficient transit times, ensuring <strong>safe, compliant, and efficient cargo movement</strong> from origin to destination.',
    'cargo.service2.feature2': 'Break Bulk & Project Cargo Handling',
    'cargo.service2.feature3': 'Import & Export Services Worldwide',
    'cargo.service2.feature4': 'Competitive Freight Rates & Contracts',
    'cargo.service2.feature5': 'Real-time Shipment Tracking',
    'cargo.service2.feature6': 'Door-to-Door Logistics Solutions',

    // Cargo Service 3 - Customs
    'cargo.service3.title': 'Customs Clearance & Documentation',
    'cargo.service3.short': 'Expert customs and regulatory compliance services',
    'cargo.service3.description': 'Navigate <strong>Yemen\'s customs regulations</strong> with confidence through our <strong>professional customs clearance and documentation services</strong>. Our <strong>experienced customs brokers</strong> manage all import and export formalities, ensuring <strong>full compliance with local laws, tariffs, and regulatory requirements</strong>. By handling <strong>accurate documentation, customs declarations</strong>, and close coordination with relevant authorities, we <strong>expedite the clearance process, minimize delays</strong>, and prevent costly errors—allowing your cargo to move smoothly and efficiently through Yemeni ports.',
    'cargo.service3.feature1': 'Full Customs Clearance Services',
    'cargo.service3.feature2': 'Import & Export Documentation',
    'cargo.service3.feature3': 'Tariff Classification & Valuation',
    'cargo.service3.feature4': 'Regulatory Compliance Management',
    'cargo.service3.feature5': 'Certificate of Origin Processing',
    'cargo.service3.feature6': 'Inspection Coordination & Support',

    // Cargo Service 4 - Inland Transportation
    'cargo.service4.title': 'Inland Transportation',
    'cargo.service4.short': 'Reliable overland cargo distribution across Yemen',
    'cargo.service4.description': 'Extend your cargo reach beyond the ports with our <strong>reliable inland transportation services</strong> across Yemen. We operate a <strong>fleet of well-maintained trucks</strong> capable of handling a wide range of cargo types and volumes, ensuring <strong>safe movement across the country\'s diverse terrain</strong>. From the ports of <strong>Aden and Hodeidah to major cities</strong> and inland destinations, our experienced drivers and logistics team ensure <strong>timely, secure, and efficient delivery</strong> of your goods to their final destination.',
    'cargo.service4.feature1': 'Dedicated Truck Fleet for All Cargo Types',
    'cargo.service4.feature2': 'Coverage Across All Major Yemeni Cities',
    'cargo.service4.feature3': 'Secure & GPS-Tracked Transportation',
    'cargo.service4.feature4': 'Flexible Scheduling & Route Planning',
    'cargo.service4.feature5': 'Last-Mile Delivery Solutions',
    'cargo.service4.feature6': 'Specialized Heavy & Oversized Cargo Transport',

    // Cargo Service 5 - Warehouse
    'cargo.service5.title': 'Warehouse & Storage Solutions',
    'cargo.service5.short': 'Safe and secure temporary storage facilities',
    'cargo.service5.description': 'When your cargo needs time between arrival and delivery, we can provide <strong>secure and reliable warehousing solutions</strong> tailored to your operational needs. Our services include <strong>flexible short- and long-term storage options</strong> supported by <strong>modern inventory management systems</strong>, ensuring your goods remain <strong>safe, accessible, and properly handled</strong>. We can also arrange <strong>climate-appropriate storage, full tracking, and accurate documentation</strong>, allowing you to maintain visibility and control over your cargo at every stage.',
    'cargo.service5.feature1': 'Secure Warehouse Facilities at Key Locations',
    'cargo.service5.feature2': 'Short & Long-term Storage Options',
    'cargo.service5.feature3': 'Climate-Controlled Storage Available',
    'cargo.service5.feature4': 'Professional Inventory Management',
    'cargo.service5.feature5': 'Loading & Unloading Services',
    'cargo.service5.feature6': 'Cargo Consolidation & Deconsolidation',

    // Cargo Service 6 - Specialized
    'cargo.service6.title': 'Specialized Cargo Handling',
    'cargo.service6.short': 'Flexible solutions for diverse cargo types',
    'cargo.service6.description': 'Not all cargo fits into standard categories, and we understand that. Our <strong>specialized cargo handling services</strong> can accommodate a wide range of goods, from <strong>delicate equipment to oversized and heavy machinery</strong>, as well as <strong>oil-related cargo and project shipments</strong>. Working in compliance with <strong>local regulations and international safety standards</strong>, we develop <strong>tailored handling and transport solutions</strong> to meet specific cargo requirements, ensuring <strong>safe, efficient, and controlled movement</strong> regardless of complexity or sensitivity.',
    'cargo.service6.feature2': 'Oversized & Out-of-Gauge Cargo',
    'cargo.service6.feature3': 'Temperature-Sensitive Goods',
    'cargo.service6.feature4': 'Dangerous Goods (IMDG Compliant)',
    'cargo.service6.feature5': 'Project Cargo Logistics',
    'cargo.service6.feature6': 'Custom Packaging & Crating Services',

    // Cargo - Who We Serve
    'cargo.whoWeServe.title': 'Who We Serve',
    'cargo.whoWeServe.individuals': 'Individuals',
    'cargo.whoWeServe.individualsDesc': 'Personal shipments and small business cargo with flexible, affordable solutions',
    'cargo.whoWeServe.companies': 'Companies & Traders',
    'cargo.whoWeServe.companiesDesc': 'Reliable shipping services for businesses of all sizes, from local traders to large enterprises',
    'cargo.whoWeServe.ngos': 'NGOs & International Organizations',
    'cargo.whoWeServe.ngosDesc': 'Experienced in handling shipments for NGOs and international organizations with professional service',

    // Cargo - Ports
    'cargo.ports.title': 'Ports & Destinations',
    'cargo.ports.subtitle': 'We serve major ports across Yemen and beyond',
    'cargo.ports.aden': 'Aden Port',
    'cargo.ports.hodeidah': 'Hodeidah Port',
    'cargo.ports.mukalla': 'Mukalla Port',
    'cargo.ports.saleef': 'Saleef Port',
    'cargo.ports.mokha': 'mokha port',
    'cargo.ports.international': 'International Connections',

    // Cargo - Gallery
    'cargo.gallery.title': 'Our Team in Action',
    'cargo.gallery.subtitle': 'See our cargo handling and shipping operations in action',
    'cargo.gallery.altText': 'Team Operation',
    'cargo.gallery.view': 'View',
    'cargo.gallery.lightboxAlt': 'Cargo Operation',

    // Cargo - CTA
    'cargo.cta.title': 'Ready to Ship Your Cargo?',
    'cargo.cta.subtitle': 'Contact us today for a customized shipping solution',
    'cargo.cta.whatsapp': 'WhatsApp',
    'cargo.cta.contactUs': 'Contact Us',

    // Passenger Trips Page
    'passenger.hero.title': 'Sail between Aden & Berbera',
    'passenger.hero.description': 'Safe and comfortable maritime travel between Yemen and Somaliland',

    // Passenger - What's Included
    'passenger.included.title': 'What\'s Included',
    'passenger.included.ac.title': 'Air-Conditioned Seating',
    'passenger.included.ac.description': 'Comfortable climate-controlled environment',
    'passenger.included.food.title': 'Free Food & Drinks',
    'passenger.included.food.description': 'Complimentary meals and beverages',
    'passenger.included.facilities.title': 'Separate Facilities',
    'passenger.included.facilities.description': 'Clean bathrooms for men and women',
    'passenger.included.entertainment.title': 'Entertainment',
    'passenger.included.entertainment.description': 'TVs for your journey',

    // Passenger - Travel Requirements
    'passenger.requirements.title': 'Travel Requirements',
    'passenger.requirements.subtitle': 'Prepare these documents before travel (requirements may vary by date)',
    'passenger.requirements.step1': '01',
    'passenger.requirements.req1.title': 'Somaliland Approval',
    'passenger.requirements.req1.description': 'Obtain approval from the Somaliland Commercial Office in Aden',
    'passenger.requirements.req1.tip': 'Tip: Bring your passport when applying',
    'passenger.requirements.step2': '02',
    'passenger.requirements.req2.title': 'Passport Copy',
    'passenger.requirements.req2.description': 'Provide a clear copy of a valid passport (photo page)',
    'passenger.requirements.req2.tip': 'Make sure the text is readable and not cropped',
    'passenger.requirements.step3': '03',
    'passenger.requirements.req3.title': 'Personal Photos',
    'passenger.requirements.req3.description': 'Two personal photos (4×6 size)',
    'passenger.requirements.req3.tip': 'White background recommended',
    'passenger.requirements.help.title': 'Need help preparing documents?',
    'passenger.requirements.help.description': 'Message us on WhatsApp and we\'ll guide you step-by-step',
    'passenger.requirements.help.button': 'WhatsApp Support',

    // Passenger - Fare Cards
    'passenger.fare.title': 'Fare Cards',
    'passenger.fare.subtitle': 'Weekly trips depending on weather and demand',
    'passenger.fare.adult': 'Adult',
    'passenger.fare.adultAge': '12+ years',
    'passenger.fare.adultPrice': '$155',
    'passenger.fare.child': 'Child',
    'passenger.fare.childAge': '2–11 years',
    'passenger.fare.childPrice': '$95',
    'passenger.fare.infant': 'Infant',
    'passenger.fare.infantAge': 'Under 2 years',
    'passenger.fare.infantPrice': '$5',
    'passenger.fare.perPerson': 'per person',
    'passenger.fare.whatsIncluded': 'What\'s Included:',
    'passenger.fare.reservedSeat': 'Reserved Seat',
    'passenger.fare.carryOn': '1 Carry-on Bag',
    'passenger.fare.checkedBag': '1 Checked Bag',
    'passenger.fare.lapSeat': 'Lap Seat',
    'passenger.fare.smallBag': '1 Small Bag',
    'passenger.fare.complimentary': 'Complimentary',
    'passenger.fare.bookWhatsapp': 'Book via WhatsApp',

    // Passenger - Gallery
    'passenger.gallery.title': 'Experience Gallery',
    'passenger.gallery.altText': 'Gallery',

    // Passenger - CTA
    'passenger.cta.title': 'Ready to Travel?',
    'passenger.cta.subtitle': 'Contact us today to book your trip',
    'passenger.cta.whatsapp': 'WhatsApp',
    'passenger.cta.callNow': 'Call Now',

    // About Page
    'about.hero.title': 'About Bamedhaf',
    'about.hero.description': 'Over 20 years of excellence in maritime and cargo services across Yemen',

    // About - Our Story
    'about.story.title': 'Our Story',
    'about.story.paragraph1': 'Founded in 2003, Bamedhaf Shipping Agency has grown to become one of Yemen\'s most trusted maritime service providers. With headquarters in Aden and offices strategically located across the country, we serve as a vital link between Yemen and the global shipping industry.',
    'about.story.paragraph2': 'Our journey has been marked by consistent growth, unwavering commitment to our clients, and adaptation to the evolving needs of the maritime industry.',

    // About - Vision & Mission
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the leading shipping and logistics provider in Yemen, recognized for exceptional service, reliability, and innovation in connecting our nation to global markets.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To provide comprehensive, reliable, and cost-effective maritime services that enable businesses to thrive, while maintaining the highest standards of professionalism.',

    // About - Values
    'about.values.title': 'Our Core Values',
    'about.values.trust.title': 'Trust & Reliability',
    'about.values.trust.description': 'Building long-lasting relationships through consistent, dependable service',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'Committed to the highest standards in maritime and cargo services',
    'about.values.professional.title': 'Professionalism',
    'about.values.professional.description': 'Expert team with deep industry knowledge and experience',
    'about.values.global.title': 'Global Reach',
    'about.values.global.description': 'Connecting Yemen to the world through our extensive network',

    // About - Journey/Timeline
    'about.journey.title': 'Our Journey',
    'about.journey.2003.title': 'Company Founded',
    'about.journey.2003.description': 'Operations launched with a focus on maritime and shipping services, establishing a strong operational base in the region.',
    'about.journey.2008.title': 'Strategic Partnerships',
    'about.journey.2008.description': 'Built trusted partnerships with key industry players to support maritime, shipping, and logistics operations.',
    'about.journey.2015.title': 'Regional Expansion',
    'about.journey.2015.description': 'Expanded service coverage to Yemen and key regional trade routes across the Middle East, East Africa, and Asia.',
    'about.journey.2025.title': 'Today',
    'about.journey.2025.description': 'Delivering integrated maritime and logistics services, supporting regional and international trade through reliable, compliant, and efficient solutions.',

    // About - Regional Operations
    'about.regional.title': 'Regional Operations',
    'about.regional.subtitle': 'Strategic presence across key maritime markets',
    'about.regional.ourOffice': 'Our Office',
    'about.regional.aden': 'Aden, Yemen',
    'about.regional.address': 'Al-Mualla, Main Street, next to Hael Mosque, Alsanfory Building, 3rd Floor',
    'about.regional.portsTitle': 'Ports We Serve',
    'about.regional.port1': 'Djibouti',
    'about.regional.port2': 'Somalia',
    'about.regional.port3': 'Aden',
    'about.regional.port4': 'Mukalla',
    'about.regional.port5': 'Hodeidah',
    'about.regional.port6': 'Almokha',
    'about.regional.port7': 'Ras Isa',
    'about.regional.port8': 'Jizan',
    'about.regional.port9': 'Salalah',
    'about.regional.port10': 'Muscat',
    'about.regional.port11': 'UAE',
    'about.regional.port12': 'Sudan',
    'about.regional.port13': 'India',
    'about.regional.expansion': '...and beyond. We\'re willing to expand our services to meet your specific needs.',

    // About - Stats
    'about.stats.years': 'Years in Business',
    'about.stats.vessels': 'Vessels Served',
    'about.stats.offices': 'Office Locations',
    'about.stats.support': 'Customer Support',

    // About - CTA
    'about.cta.title': 'Ready to Work With Us?',
    'about.cta.subtitle': 'Join hundreds of satisfied clients who trust Bamedhaf for their shipping needs',
    'about.cta.whatsapp': 'WhatsApp',
    'about.cta.contactUs': 'Contact Us',

    // Common UI Elements
    'common.scrollToTop': 'Scroll to top',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.cargo': 'خدمات الشحن',
    'nav.passenger': 'رحلات الركاب',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.whatsapp': 'واتساب',
    'nav.call': 'اتصل',

    // Home Page
    // Hero Section
    'home.hero.tagline': 'شريكك الموثوق',
    'home.hero.description': 'أكثر من 20 عامًا من التميز في الخدمات البحرية التي تربط اليمن وخارجه',
    'home.hero.feature1': 'آمن وموثوق',
    'home.hero.feature2': 'طاقم محترف',
    'home.hero.feature3': 'دعم على مدار الساعة',
    'home.hero.passenger.title': 'خدمات الركاب',
    'home.hero.passenger.subtitle': 'السفر البحري بين عدن وبربرة',
    'home.hero.passenger.button': 'احجز الآن',
    'home.hero.cargo.title': 'خدمات الشحن',
    'home.hero.cargo.subtitle': 'حلول الشحن البحري واللوجستي',
    'home.hero.cargo.button': 'اعرف المزيد',
    // Who We Are Section
    'home.whoWeAre.badge': 'من نحن',
    'home.whoWeAre.excellenceBadge': 'التميز البحري',
    'home.whoWeAre.title': 'بناء الثقة من خلال التميز',
    'home.whoWeAre.description': 'على مر السنين، أثبتت وكالة بامدهاف للشحن نفسها كقوة قوية وموثوقة في الخدمات البحرية في اليمن وخارجه، مع طموح متزايد باستمرار للتوسع الجغرافي. نحن نفخر بتقديم حلول شحن موثوقة مدعومة بشراكات قوية وعمليات مبتكرة ومعايير جودة لا هوادة فيها',
    'home.whoWeAre.companyName': 'وكالة بامدهاف للشحن',
    'home.whoWeAre.region': 'اليمن وخارجه',
    'home.whoWeAre.feature1': 'تواجد راسخ في جميع الموانئ اليمنية الرئيسية',
    'home.whoWeAre.feature2': 'شراكات استراتيجية مع خطوط الشحن الدولية',
    'home.whoWeAre.feature3': 'الالتزام بالسلامة والموثوقية',
    'home.whoWeAre.feature4': 'نهج يركز على العملاء في الحلول البحرية',
    'home.whoWeAre.button': 'اعرف المزيد عنا',
    // Ports Section
    'home.ports.title': 'قائمة الموانئ المغطاة',
    // Why Choose Section
    'home.why.title': 'لماذا تختار بامدهاف',
    'home.why.reliable.title': 'موثوق وآمن',
    'home.why.reliable.desc': 'عقود من العمليات مع معايير سلامة صارمة لكل من البضائع والركاب',
    'home.why.professional.title': 'خدمة احترافية',
    'home.why.professional.desc': 'طاقم وفرق عمليات ذوي خبرة يضمنون التواصل الواضح والرحلات السلسة',
    'home.why.regional.title': 'الوصول الإقليمي',
    'home.why.regional.desc': 'اتصالات قوية في جميع أنحاء اليمن والعالم مع شركاء ووكلاء موثوقين',
    // Stats Section
    'home.stats.experience': 'سنوات من الخبرة',
    'home.stats.shipments': 'شحنات ناجحة',
    'home.stats.countries': 'دول متصلة',
    'home.stats.satisfaction': 'رضا العملاء',
    // Vision & Mission
    'home.vision.title': 'رؤيتنا',
    'home.vision.description': 'أن نكون مزود الخدمات البحرية الرائد في اليمن والعالم، معترف بنا لتقديم جودة لا مثيل لها، والابتكار، والقيمة المستدامة لعملائنا وشركائنا في جميع أنحاء المنطقة وخارجها',
    'home.mission.title': 'مهمتنا',
    'home.mission.description': 'ربط الأسواق الإقليمية والدولية من خلال خدمات بحرية آمنة وموثوقة وفعالة. نحن ملتزمون بالتميز التشغيلي ورضا العملاء وبناء شراكات موثوقة في صناعة الشحن',
    // FAQ Section
    'home.faq.heading': 'الأسئلة الشائعة',
    'home.faq.title': 'الأسئلة المتكررة؟',
    'home.faq.q1': 'ما هي الموانئ التي تخدمونها في اليمن؟',
    'home.faq.a1': 'نقدم خدمات شاملة في جميع الموانئ اليمنية الرئيسية بما في ذلك عدن والحديدة والمكلا والصليف والمخا ورأس عيسى. فرقنا ذات الخبرة متواجدة في كل موقع لضمان عمليات سلسة',
    'home.faq.q2': 'هل تتعاملون مع خدمات الشحن والركاب؟',
    'home.faq.a2': 'نعم، نقدم خدمات شحن البضائع وخدمات سفر الركاب. قسم الشحن لدينا يتعامل مع الشحن البحري والتخليص الجمركي والنقل البري، بينما توفر خدمات الركاب لدينا سفرًا بحريًا آمنًا بين عدن وبربرة',
    'home.faq.q3': 'كيف يمكنني حجز تذاكر الركاب أو شحنات البضائع؟',
    'home.faq.a3': 'يمكنك الاتصال بنا مباشرة عبر واتساب على الرقم 771111440 967+ أو الاتصال بمكتبنا على الرقم 02-245599. سيوجهك فريقنا خلال عملية الحجز ويقدم لك جميع المعلومات اللازمة حول المواعيد والأسعار والمتطلبات',
    // CTA Section
    'home.cta.title': 'هل أنت مستعد للشحن أو السفر؟',
    'home.cta.subtitle': 'تواصل مع فريقنا - سنوجهك خلال الخطوات التالية',
    'home.cta.whatsapp': 'واتساب',
    'home.cta.call': 'اتصل الآن',
    'home.footer.tagline': 'شريكك البحري الموثوق في اليمن لأكثر من 20 عامًا',
    'home.footer.quickLinks': 'روابط سريعة',
    'home.footer.contact': 'اتصل بنا',
    'home.footer.location': 'الموقع',
    'home.footer.copyright': '© 2025 وكالة بامدهاف للشحن. جميع الحقوق محفوظة',

    // Common
    'common.backHome': 'العودة للرئيسية',
    'common.more': 'المزيد',
    'common.contactUs': 'اتصل بنا',
    'common.getQuote': 'احصل على عرض سعر',
    'common.learnMore': 'اعرف المزيد',

    // Passenger Trips
    'passenger.hero.title1': 'وكالة الشحن الرائدة في اليمن',
    'passenger.hero.subtitle1': 'مع مكاتب في الحديدة وصنعاء وعدن والمخا والمكلا والصليف',
    'passenger.hero.title2': 'رحلات الركاب',
    'passenger.hero.subtitle2': 'السفر بين عدن وبربرة بكل راحة وأمان',
    'passenger.hero.title3': 'رحلة آمنة ومريحة',
    'passenger.hero.subtitle3': 'اختبر خدمات السفر البحري الممتازة معنا',
    'passenger.title': 'رحلات الركاب',
    'passenger.subtitle': 'قريبًا - السفر بين عدن وبربرة',

    // Cargo Services
    'cargo.hero.title': 'خدمات شحن شاملة',
    'cargo.hero.subtitle': 'من الشحن البحري إلى النقل البري، نوفر حلول شحن متكاملة للشركات في اليمن والوجهات الدولية',
    'cargo.services.title': 'خدماتنا',
    'cargo.ports.title': 'الموانئ والوجهات',
    'cargo.ports.subtitle': 'نخدم الموانئ الرئيسية في اليمن وخارجها',
    'cargo.why.title': 'لماذا تختار بامدهف؟',
    'cargo.cta.title': 'هل أنت مستعد لشحن بضائعك؟',
    'cargo.cta.subtitle': 'اتصل بنا اليوم للحصول على حل شحن مخصص',

    // About
    'about.hero.title': 'عن بامدهاف',
    'about.hero.subtitle': 'أكثر من 20 عامًا من التميز في خدمات الشحن البحري في اليمن',
    'about.story.title': 'قصتنا',
    'about.vision.title': 'رؤيتنا',
    'about.mission.title': 'مهمتنا',
    'about.values.title': 'قيمنا الأساسية',
    'about.journey.title': 'رحلتنا',
    'about.offices.title': 'مكاتبنا',
    'about.offices.subtitle': 'نخدمك من مواقع متعددة في جميع أنحاء اليمن',

    // Contact
    'contact.hero.title': 'تواصل معنا',
    'contact.hero.subtitle': 'هل لديك أسئلة؟ نحن هنا للمساعدة',
    'contact.info.phone': 'الهاتف',
    'contact.info.whatsapp': 'واتساب',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.mainOffice': 'المكتب الرئيسي',
    'contact.info.sendMessage': 'إرسال رسالة',
    'contact.info.contact': 'اتصل',
    'contact.hours.title': 'ساعات العمل',
    'contact.hours.weekdays': 'السبت - الخميس: 8:00 صباحًا - 5:00 مساءً',
    'contact.hours.friday': 'الجمعة: مغلق',
    'contact.hours.urgent': 'متاح على مدار الساعة طوال أيام الأسبوع للأمور العاجلة',
    'contact.offices.title': 'مكاتبنا',
    'contact.offices.subtitle': 'تواجد استراتيجي في الأسواق البحرية الرئيسية',
    'contact.offices.ourOffice': 'مكتبنا',
    'contact.offices.aden': 'عدن، اليمن',
    'contact.offices.adenAddress': 'المعلا، الشارع الرئيسي، بجوار مسجد هائل، مبنى الصنفوري، الطابق الثالث',
    'contact.offices.hodeidah': 'الحديدة',
    'contact.offices.hodeidahAddress': 'منطقة الميناء، المنطقة التجارية',
    'contact.offices.sanaa': 'صنعاء',
    'contact.offices.sanaaAddress': 'مركز الأعمال، طريق المطار',
    'contact.offices.mukalla': 'المكلا',
    'contact.offices.mukallaAddress': 'منطقة الميناء، الطريق الساحلي',
    'contact.offices.mokha': 'المخا',
    'contact.offices.mokhaAddress': 'بالقرب من الميناء',
    'contact.offices.saleef': 'الصليف',
    'contact.offices.saleefAddress': 'منطقة الميناء',
    'contact.offices.contactMain': 'اتصل بالمكتب الرئيسي',

    // Cargo Services Page
    'cargo.hero.title': 'خدمات شحن شاملة',
    'cargo.hero.description': 'من الشحن البحري إلى النقل البري، نوفر حلول شحن متكاملة للشركات في اليمن والوجهات الدولية',
    'cargo.services.heading': 'خدماتنا',
    'cargo.services.subtitle': 'حلول شحن شاملة مصممة خصيصًا لاحتياجات عملك',
    'cargo.services.keyFeatures': 'الميزات الرئيسية',

    // Cargo Service 1 - Port Agency
    'cargo.service1.title': 'وكالة الموانئ والخدمات البحرية',
    'cargo.service1.short': 'خدمات وكالة موانئ كاملة للسفن القادمة إلى الموانئ اليمنية',
    'cargo.service1.description': 'كـ <strong>وكالة موانئ رائدة في اليمن</strong>، نقدم <strong>خدمات وكالة موانئ وخدمات بحرية شاملة</strong> لسفن الشحن التي تتعامل مع الموانئ اليمنية، مما يضمن <strong>دوران فعال</strong> و<strong>عمليات شحن سلسة</strong>. كممثلين معتمدين للسفينة، نقوم بإدارة <strong>التنسيق مع الموانئ، جدولة الأرصفة</strong>، والتواصل مع المحطات وشركات الشحن والسلطات المحلية لدعم مناولة الشحنات بشكل آمن وفي الوقت المناسب. تشمل خدماتنا <strong>إدارة كاملة للوثائق، الإجراءات الجمركية والميناء</strong>، ودعم مخصص للطاقم عند الحاجة، مما يضمن <strong>الامتثال للوائح المحلية</strong> وتقليل التأخيرات التشغيلية لمالكي السفن والمشغلين والمستأجرين',
    'cargo.service1.feature1': 'تمثيل السفن على مدار الساعة في الموانئ الرئيسية',
    'cargo.service1.feature2': 'التنسيق والتواصل مع سلطة الميناء',
    'cargo.service1.feature3': 'ترتيبات تبديل الطاقم والإجازة الساحلية',
    'cargo.service1.feature4': 'خدمات التوثيق البحري الكاملة',
    'cargo.service1.feature5': 'تنسيق المؤن وإمدادات السفن',
    'cargo.service1.feature6': 'خدمات الاستجابة للطوارئ والدعم',

    // Cargo Service 2 - Sea Freight
    'cargo.service2.title': 'الشحن البحري',
    'cargo.service2.short': 'خدمات الشحن البحري العالمية للاستيراد والتصدير',
    'cargo.service2.description': 'اربط عملك بالعالم من خلال <strong>خدمات الشحن البحري الشاملة</strong>. نوفر حلول شحن بحري عالمية موثوقة لـ<strong>شحنات الاستيراد والتصدير</strong>، تربط اليمن بطرق التجارة الدولية الرئيسية. سواء كنت تنقل <strong>المواد الخام أو البضائع الجاهزة أو النفط أو الحيوانات الحية</strong> بما في ذلك الأغنام والماشية والإبل، نحن نتعامل مع <strong>الشحنات الحاوية والبضائع السائبة والشحنات المتخصصة</strong> بدقة وعناية. من خلال علاقاتنا الراسخة مع <strong>خطوط الشحن الرئيسية</strong>، نضمن <strong>أسعار شحن تنافسية، جداول إبحار موثوقة</strong>، وأوقات عبور فعالة، مما يضمن <strong>حركة شحن آمنة ومتوافقة وفعالة</strong> من المصدر إلى الوجهة',
    'cargo.service2.feature2': 'التعامل مع البضائع السائبة وشحنات المشاريع',
    'cargo.service2.feature3': 'خدمات الاستيراد والتصدير في جميع أنحاء العالم',
    'cargo.service2.feature4': 'أسعار شحن تنافسية وعقود',
    'cargo.service2.feature5': 'تتبع الشحنات في الوقت الفعلي',
    'cargo.service2.feature6': 'حلول لوجستية من الباب إلى الباب',

    // Cargo Service 3 - Customs
    'cargo.service3.title': 'التخليص الجمركي والتوثيق',
    'cargo.service3.short': 'خدمات خبراء الامتثال الجمركي والتنظيمي',
    'cargo.service3.description': 'تنقل بثقة في <strong>اللوائح الجمركية اليمنية</strong> من خلال <strong>خدمات التخليص الجمركي والتوثيق الاحترافية</strong>. يدير <strong>وسطاء الجمارك ذوي الخبرة</strong> لدينا جميع الإجراءات الرسمية للاستيراد والتصدير، مما يضمن <strong>الامتثال الكامل للقوانين المحلية والتعريفات الجمركية والمتطلبات التنظيمية</strong>. من خلال التعامل مع <strong>الوثائق الدقيقة والإقرارات الجمركية</strong> والتنسيق الوثيق مع السلطات ذات الصلة، نحن <strong>نسرع عملية التخليص ونقلل التأخيرات</strong> ونمنع الأخطاء المكلفة - مما يسمح لشحنتك بالتحرك بسلاسة وكفاءة عبر الموانئ اليمنية',
    'cargo.service3.feature1': 'خدمات التخليص الجمركي الكاملة',
    'cargo.service3.feature2': 'وثائق الاستيراد والتصدير',
    'cargo.service3.feature3': 'تصنيف التعريفات والتقييم',
    'cargo.service3.feature4': 'إدارة الامتثال التنظيمي',
    'cargo.service3.feature5': 'معالجة شهادات المنشأ',
    'cargo.service3.feature6': 'تنسيق ودعم التفتيش',

    // Cargo Service 4 - Inland Transportation
    'cargo.service4.title': 'النقل البري',
    'cargo.service4.short': 'توزيع موثوق للشحنات البرية في جميع أنحاء اليمن',
    'cargo.service4.description': 'وسع نطاق شحنتك خارج الموانئ من خلال <strong>خدمات النقل البري الموثوقة</strong> في جميع أنحاء اليمن. نحن نشغل <strong>أسطولًا من الشاحنات المحافظ عليها جيدًا</strong> قادرة على التعامل مع مجموعة واسعة من أنواع الشحنات وأحجامها، مما يضمن <strong>حركة آمنة عبر التضاريس المتنوعة للبلاد</strong>. من موانئ <strong>عدن والحديدة إلى المدن الرئيسية</strong> والوجهات الداخلية، يضمن سائقونا ذوو الخبرة وفريق اللوجستيات لدينا <strong>تسليمًا في الوقت المناسب وآمنًا وفعالًا</strong> لبضائعك إلى وجهتها النهائية',
    'cargo.service4.feature1': 'أسطول شاحنات مخصص لجميع أنواع الشحنات',
    'cargo.service4.feature2': 'تغطية جميع المدن اليمنية الرئيسية',
    'cargo.service4.feature3': 'نقل آمن ومتتبع بنظام تحديد المواقع',
    'cargo.service4.feature4': 'جدولة مرنة وتخطيط للمسارات',
    'cargo.service4.feature5': 'حلول التسليم في الميل الأخير',
    'cargo.service4.feature6': 'نقل الشحنات الثقيلة والكبيرة الحجم المتخصصة',

    // Cargo Service 5 - Warehouse
    'cargo.service5.title': 'حلول المستودعات والتخزين',
    'cargo.service5.short': 'مرافق تخزين مؤقتة آمنة ومأمونة',
    'cargo.service5.description': 'عندما تحتاج شحنتك إلى وقت بين الوصول والتسليم، يمكننا توفير <strong>حلول تخزين آمنة وموثوقة</strong> مصممة خصيصًا لاحتياجاتك التشغيلية. تشمل خدماتنا <strong>خيارات تخزين قصيرة وطويلة الأجل مرنة</strong> مدعومة بـ<strong>أنظمة إدارة المخزون الحديثة</strong>، مما يضمن بقاء بضائعك <strong>آمنة وسهلة الوصول والتعامل معها بشكل صحيح</strong>. يمكننا أيضًا ترتيب <strong>تخزين مناسب للمناخ وتتبع كامل ووثائق دقيقة</strong>، مما يسمح لك بالحفاظ على الرؤية والسيطرة على شحنتك في كل مرحلة',
    'cargo.service5.feature1': 'مرافق مستودعات آمنة في المواقع الرئيسية',
    'cargo.service5.feature2': 'خيارات التخزين قصيرة وطويلة الأجل',
    'cargo.service5.feature3': 'تخزين مكيف متاح',
    'cargo.service5.feature4': 'إدارة احترافية للمخزون',
    'cargo.service5.feature5': 'خدمات التحميل والتفريغ',
    'cargo.service5.feature6': 'دمج الشحنات وتفكيكها',

    // Cargo Service 6 - Specialized
    'cargo.service6.title': 'مناولة الشحنات المتخصصة',
    'cargo.service6.short': 'حلول مرنة لأنواع الشحنات المتنوعة',
    'cargo.service6.description': 'ليست جميع الشحنات تناسب الفئات القياسية، ونحن نفهم ذلك. يمكن أن تستوعب <strong>خدمات مناولة الشحنات المتخصصة</strong> لدينا مجموعة واسعة من البضائع، من <strong>المعدات الدقيقة إلى الآلات الكبيرة والثقيلة</strong>، بالإضافة إلى <strong>الشحنات المتعلقة بالنفط وشحنات المشاريع</strong>. العمل بما يتماشى مع <strong>اللوائح المحلية ومعايير السلامة الدولية</strong>، نقوم بتطوير <strong>حلول مناولة ونقل مخصصة</strong> لتلبية متطلبات الشحن المحددة، مما يضمن <strong>حركة آمنة وفعالة ومراقبة</strong> بغض النظر عن التعقيد أو الحساسية',
    'cargo.service6.feature2': 'الشحنات الكبيرة وخارج المقاييس',
    'cargo.service6.feature3': 'البضائع الحساسة لدرجة الحرارة',
    'cargo.service6.feature4': 'البضائع الخطرة (متوافقة مع IMDG)',
    'cargo.service6.feature5': 'لوجستيات شحنات المشاريع',
    'cargo.service6.feature6': 'خدمات التعبئة والتغليف المخصصة',

    // Cargo - Who We Serve
    'cargo.whoWeServe.title': 'من نخدم',
    'cargo.whoWeServe.individuals': 'الأفراد',
    'cargo.whoWeServe.individualsDesc': 'الشحنات الشخصية وشحنات الأعمال الصغيرة مع حلول مرنة وبأسعار معقولة',
    'cargo.whoWeServe.companies': 'الشركات والتجار',
    'cargo.whoWeServe.companiesDesc': 'خدمات شحن موثوقة للشركات من جميع الأحجام، من التجار المحليين إلى المؤسسات الكبيرة',
    'cargo.whoWeServe.ngos': 'المنظمات غير الحكومية والمنظمات الدولية',
    'cargo.whoWeServe.ngosDesc': 'ذوو خبرة في التعامل مع شحنات المنظمات غير الحكومية والمنظمات الدولية بخدمة احترافية',

    // Cargo - Ports
    'cargo.ports.title': 'الموانئ والوجهات',
    'cargo.ports.subtitle': 'نخدم الموانئ الرئيسية في اليمن وخارجها',
    'cargo.ports.aden': 'ميناء عدن',
    'cargo.ports.hodeidah': 'ميناء الحديدة',
    'cargo.ports.mukalla': 'ميناء المكلا',
    'cargo.ports.saleef': 'ميناء الصليف',
    'cargo.ports.mokha': 'ميناء المخا',
    'cargo.ports.international': 'اتصالات دولية',

    // Cargo - Gallery
    'cargo.gallery.title': 'فريقنا في العمل',
    'cargo.gallery.subtitle': 'شاهد عمليات مناولة الشحنات والشحن لدينا',
    'cargo.gallery.altText': 'عملية الفريق',
    'cargo.gallery.view': 'عرض',
    'cargo.gallery.lightboxAlt': 'عملية الشحن',

    // Cargo - CTA
    'cargo.cta.title': 'هل أنت مستعد لشحن بضائعك؟',
    'cargo.cta.subtitle': 'اتصل بنا اليوم للحصول على حل شحن مخصص',
    'cargo.cta.whatsapp': 'واتساب',
    'cargo.cta.contactUs': 'اتصل بنا',

    // Passenger Trips Page
    'passenger.hero.title': 'أبحر بين عدن وبربرة',
    'passenger.hero.description': 'سفر بحري آمن ومريح بين اليمن وصوماليلاند',

    // Passenger - What's Included
    'passenger.included.title': 'ما هو مشمول',
    'passenger.included.ac.title': 'مقاعد مكيفة',
    'passenger.included.ac.description': 'بيئة مريحة مع تحكم في المناخ',
    'passenger.included.food.title': 'طعام ومشروبات مجانية',
    'passenger.included.food.description': 'وجبات ومشروبات مجانية',
    'passenger.included.facilities.title': 'مرافق منفصلة',
    'passenger.included.facilities.description': 'حمامات نظيفة للرجال والنساء',
    'passenger.included.entertainment.title': 'الترفيه',
    'passenger.included.entertainment.description': 'أجهزة تلفاز لرحلتك',

    // Passenger - Travel Requirements
    'passenger.requirements.title': 'متطلبات السفر',
    'passenger.requirements.subtitle': 'جهز هذه الوثائق قبل السفر (قد تختلف المتطلبات حسب التاريخ)',
    'passenger.requirements.step1': '01',
    'passenger.requirements.req1.title': 'موافقة صوماليلاند',
    'passenger.requirements.req1.description': 'احصل على موافقة من المكتب التجاري لصوماليلاند في عدن',
    'passenger.requirements.req1.tip': 'نصيحة: أحضر جواز سفرك عند التقديم',
    'passenger.requirements.step2': '02',
    'passenger.requirements.req2.title': 'نسخة من جواز السفر',
    'passenger.requirements.req2.description': 'قدم نسخة واضحة من جواز سفر صالح (صفحة الصورة)',
    'passenger.requirements.req2.tip': 'تأكد من أن النص قابل للقراءة وغير مقصوص',
    'passenger.requirements.step3': '03',
    'passenger.requirements.req3.title': 'صور شخصية',
    'passenger.requirements.req3.description': 'صورتان شخصيتان (حجم 4×6)',
    'passenger.requirements.req3.tip': 'يُنصح بخلفية بيضاء',
    'passenger.requirements.help.title': 'تحتاج مساعدة في إعداد الوثائق؟',
    'passenger.requirements.help.description': 'راسلنا على واتساب وسنوجهك خطوة بخطوة',
    'passenger.requirements.help.button': 'دعم واتساب',


    // Passenger - Gallery
    'passenger.gallery.title': 'معرض الصور',
    'passenger.gallery.altText': 'معرض',

    // Passenger - CTA
    'passenger.cta.title': 'هل أنت مستعد للسفر؟',
    'passenger.cta.subtitle': 'اتصل بنا اليوم لحجز رحلتك',
    'passenger.cta.whatsapp': 'واتساب',
    'passenger.cta.callNow': 'اتصل الآن',

    // About Page
    'about.hero.title': 'عن بامدهاف',
    'about.hero.description': 'أكثر من 20 عامًا من التميز في خدمات الشحن البحري في اليمن',

    // About - Our Story
    'about.story.title': 'قصتنا',
    'about.story.paragraph1': 'تأسست وكالة بامدهف للشحن في عام 2003، ونمت لتصبح واحدة من أكثر مقدمي الخدمات البحرية الموثوقين في اليمن. مع المقر الرئيسي في عدن ومكاتب موزعة استراتيجيًا في جميع أنحاء البلاد، نعمل كحلقة وصل حيوية بين اليمن وصناعة الشحن العالمية',
    'about.story.paragraph2': 'تميزت رحلتنا بالنمو المستمر والالتزام الثابت بعملائنا والتكيف مع الاحتياجات المتطورة لصناعة الشحن البحري',

    // About - Vision & Mission
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'أن نكون مزود الشحن واللوجستيات الرائد في اليمن، معترف بنا للخدمة الاستثنائية والموثوقية والابتكار في ربط بلدنا بالأسواق العالمية',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'تقديم خدمات بحرية شاملة وموثوقة وفعالة من حيث التكلفة تمكن الشركات من الازدهار، مع الحفاظ على أعلى معايير الاحترافية',

    // About - Values
    'about.values.title': 'قيمنا الأساسية',
    'about.values.trust.title': 'الثقة والموثوقية',
    'about.values.trust.description': 'بناء علاقات طويلة الأمد من خلال خدمة متسقة وموثوقة',
    'about.values.excellence.title': 'التميز',
    'about.values.excellence.description': 'الالتزام بأعلى المعايير في الخدمات البحرية والشحن',
    'about.values.professional.title': 'الاحترافية',
    'about.values.professional.description': 'فريق خبير مع معرفة وخبرة صناعية عميقة',
    'about.values.global.title': 'الوصول العالمي',
    'about.values.global.description': 'ربط اليمن بالعالم من خلال شبكتنا الواسعة',

    // About - Journey/Timeline
    'about.journey.title': 'رحلتنا',
    'about.journey.2003.title': 'تأسيس الشركة',
    'about.journey.2003.description': 'انطلاق عملياتنا بخدمات بحرية وشحن متخصصة، ووضع أساس تشغيلي قوي في القطاع البحري.',
    'about.journey.2008.title': 'شراكات استراتيجية',
    'about.journey.2008.description': 'بناء شراكات موثوقة مع جهات رئيسية في قطاع الشحن والخدمات اللوجستية لدعم عملياتنا التشغيلية.',
    'about.journey.2015.title': 'التوسع الإقليمي',
    'about.journey.2015.description': 'توسيع نطاق خدماتنا ليشمل اليمن وخطوط التجارة الإقليمية الرئيسية في الشرق الأوسط وشرق أفريقيا وآسيا.',
    'about.journey.2025.title': 'اليوم',
    'about.journey.2025.description': 'نقدّم حلولًا متكاملة في الخدمات البحرية واللوجستية، وندعم حركة التجارة الإقليمية والدولية بخدمات موثوقة وفعّالة ومتوافقة مع الأنظمة.',

    // About - Regional Operations
    'about.regional.title': 'العمليات الإقليمية',
    'about.regional.subtitle': 'تواجد استراتيجي في الأسواق البحرية الرئيسية',
    'about.regional.ourOffice': 'مكتبنا',
    'about.regional.aden': 'عدن، اليمن',
    'about.regional.address': 'المعلا، الشارع الرئيسي، بجوار مسجد هائل، مبنى الصنفوري، الطابق الثالث',
    'about.regional.portsTitle': 'الموانئ التي نخدمها',
    'about.regional.port1': 'جيبوتي',
    'about.regional.port2': 'الصومال',
    'about.regional.port3': 'عدن',
    'about.regional.port4': 'المكلا',
    'about.regional.port5': 'الحديدة',
    'about.regional.port6': 'المخا',
    'about.regional.port7': 'رأس عيسى',
    'about.regional.port8': 'جازان',
    'about.regional.port9': 'صلالة',
    'about.regional.port10': 'مسقط',
    'about.regional.port11': 'الإمارات',
    'about.regional.port12': 'السودان',
    'about.regional.port13': 'الهند',
    'about.regional.expansion': '...وخارجها. نحن على استعداد لتوسيع خدماتنا لتلبية احتياجاتك المحددة',

    // About - Stats
    'about.stats.years': 'سنوات في العمل',
    'about.stats.vessels': 'السفن المخدومة',
    'about.stats.offices': 'مواقع المكاتب',
    'about.stats.support': 'دعم العملاء',

    // About - CTA
    'about.cta.title': 'هل أنت مستعد للعمل معنا؟',
    'about.cta.subtitle': 'انضم إلى مئات العملاء الراضين الذين يثقون ببامدهف لاحتياجات الشحن الخاصة بهم',
    'about.cta.whatsapp': 'واتساب',
    'about.cta.contactUs': 'اتصل بنا',

    // Common UI Elements
    'common.scrollToTop': 'العودة للأعلى',
  }
}
