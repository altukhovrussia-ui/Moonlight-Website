/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, createContext, useContext } from 'react';
import { translations, Language } from './translations';

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}>({
  language: 'en',
  setLanguage: () => { },
  t: translations.en,
  isModalOpen: false,
  setIsModalOpen: () => { },
});

export const useLanguage = () => useContext(LanguageContext);
import {
  Play,
  Smartphone,
  Video,
  Tag,
  Building2,
  Clapperboard,
  Tv,
  Palette,
  CheckCircle2,
  Star,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Globe,
  Hexagon,
  Shield,
  Zap,
  Cpu,
  ChevronDown,
  FileText,
  Camera,
  Scissors,
  Package,
  Clock,
  Users,
  Eye,
  RefreshCw,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ─── Glow Menu: animation variants ─── */
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

const NAV_SECTIONS = [
  {
    id: 'services',
    labelKey: 'services' as const,
    icon: Clapperboard,
    gradient: 'radial-gradient(circle, rgba(255,60,60,0.18) 0%, rgba(255,30,30,0.06) 50%, transparent 100%)',
  },
  {
    id: 'work',
    labelKey: 'work' as const,
    icon: Eye,
    gradient: 'radial-gradient(circle, rgba(255,0,13,0.18) 0%, rgba(255,0,13,0.06) 50%, transparent 100%)',
  },
  {
    id: 'pricing',
    labelKey: 'pricing' as const,
    icon: Tag,
    gradient: 'radial-gradient(circle, rgba(255,77,77,0.18) 0%, rgba(255,40,40,0.06) 50%, transparent 100%)',
  },
  {
    id: 'contact',
    labelKey: 'contact' as const,
    icon: Mail,
    gradient: 'radial-gradient(circle, rgba(255,0,13,0.22) 0%, rgba(255,0,13,0.08) 50%, transparent 100%)',
  },
];

const smoothScroll = (e: { preventDefault: () => void }, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t, setIsModalOpen } = useLanguage();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < window.innerHeight * 0.4) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className={`w-full transition-all duration-500 pointer-events-auto ${isScrolled ? 'pt-3' : 'pt-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-bold tracking-wider font-display cursor-pointer group shrink-0"
            aria-label="Moonlight Media — Home"
          >
            MOONLIGHT
            <span className="text-primary group-hover:pulse-dot inline-block transition-transform">.</span>
          </a>

          {/* ─── Desktop: Glow Menu Bar (centered) ─── */}
          <motion.nav
            className={`hidden md:flex p-1.5 rounded-2xl border relative overflow-hidden transition-all duration-500 ${isScrolled
              ? 'bg-background-dark/70 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
              : 'bg-white/5 backdrop-blur-lg border-white/[0.07] shadow-lg'
              }`}
            initial="initial"
            whileHover="hover"
            aria-label="Main navigation"
          >
            {/* Nav-wide glow aura */}
            <motion.div
              className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,0,13,0.12) 0%, rgba(255,60,60,0.06) 40%, transparent 70%)',
              }}
              variants={navGlowVariants}
            />

            <ul className="flex items-center gap-1 relative z-10">
              {NAV_SECTIONS.map(({ id, labelKey, icon: Icon, gradient }) => {
                const isActive = id === activeSection;
                return (
                  <li key={id} className="relative">
                    <a href={`#${id}`} className="block cursor-pointer" onClick={(e) => smoothScroll(e, id)}>
                      <motion.div
                        className="glow-menu-item block rounded-xl overflow-visible group relative"
                        whileHover="hover"
                        initial="initial"
                      >
                        {/* Glow behind item */}
                        <motion.div
                          className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                          variants={glowVariants}
                          animate={isActive ? 'hover' : 'initial'}
                          style={{
                            background: gradient,
                            opacity: isActive ? 1 : 0,
                          }}
                        />
                        {/* Front face */}
                        <motion.div
                          className={`flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl transition-colors ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'
                            }`}
                          variants={itemVariants}
                          transition={sharedTransition}
                          style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
                        >
                          <span className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-xs font-bold tracking-widest">{t.nav[labelKey]}</span>
                        </motion.div>
                        {/* Back face (3D flip) */}
                        <motion.div
                          className={`flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 rounded-xl transition-colors ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'
                            }`}
                          variants={backVariants}
                          transition={sharedTransition}
                          style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
                        >
                          <span className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-xs font-bold tracking-widest">{t.nav[labelKey]}</span>
                        </motion.div>
                      </motion.div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>

          {/* Right side: Language + CTA + Hamburger */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0">
            {/* Language switcher (desktop) */}
            <div className="hidden md:flex items-center gap-4 text-xs font-bold tracking-widest" role="group" aria-label="Language switcher">
              <button
                onClick={() => setLanguage('ru')}
                className={`cursor-pointer transition-colors ${language === 'ru' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
                aria-label="Switch to Russian"
                aria-current={language === 'ru'}
              >RU</button>
              <span className="text-white/20" aria-hidden="true">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`cursor-pointer transition-colors ${language === 'en' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
                aria-label="Switch to English"
                aria-current={language === 'en'}
              >EN</button>
            </div>

            {/* BOOK NOW CTA (desktop) */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center justify-center px-8 py-2.5 bg-primary text-white font-semibold rounded-sm font-display text-lg cursor-pointer relative overflow-hidden group min-w-[140px] btn-sweep"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10 leading-none">{t.nav.bookNow}</span>
            </motion.button>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden text-white cursor-pointer w-11 h-11 flex items-center justify-center -mr-2 z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile: Full-screen overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 mobile-nav-overlay z-50 md:hidden flex flex-col items-start justify-center pointer-events-auto"
          >
            <motion.div
              className="flex flex-col items-start space-y-4 pl-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
            >
              {NAV_SECTIONS.map(({ id, labelKey, icon: Icon }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  className={`flex items-center gap-6 text-4xl sm:text-5xl font-display font-bold tracking-wider cursor-pointer py-3 transition-colors ${activeSection === id ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  onClick={(e: any) => { smoothScroll(e, id); setIsMobileMenuOpen(false); }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${activeSection === id ? 'text-primary' : 'text-white/40'}`} />
                  {t.nav[labelKey]}
                </motion.a>
              ))}
              <motion.button
                className="mt-8 w-72 py-5 bg-primary text-center font-display text-2xl font-bold tracking-widest cursor-pointer rounded-sm shadow-[0_10px_30px_rgba(255,0,0,0.3)] text-white relative overflow-hidden btn-sweep group"
                onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{t.nav.bookNow}</span>
              </motion.button>
            </motion.div>

            {/* Language switch in mobile */}
            <motion.div
              className="absolute bottom-12 left-12 flex items-center gap-4 text-sm font-bold tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button onClick={() => setLanguage('ru')} className={`cursor-pointer transition-colors ${language === 'ru' ? 'text-primary' : 'text-white/40 hover:text-white'}`}>RU</button>
              <span className="text-white/20">|</span>
              <button onClick={() => setLanguage('en')} className={`cursor-pointer transition-colors ${language === 'en' ? 'text-primary' : 'text-white/40 hover:text-white'}`}>EN</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { t, language, isModalOpen, setIsModalOpen } = useLanguage();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-surface-dark">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920"
          alt="Dubai skyline luxury"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center w-full h-full pt-0 md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary tracking-[0.4em] font-bold text-sm md:text-base mb-6 uppercase"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          id="main-heading"
          className={`font-bold leading-[0.9] mb-8 tracking-tighter mx-auto w-full px-4 ${language === 'ru'
            ? 'text-[8.5vw] sm:text-5xl md:text-[90px] max-w-5xl'
            : 'text-[9.5vw] sm:text-6xl md:text-[110px] max-w-4xl'
            }`}
        >
          {t.hero.titleLine1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none relative mt-4 md:mt-0"
        >
          {/* Default Button State */}
          <div className="relative w-full sm:w-auto flex justify-center h-[54px] sm:h-[68px]">
            <AnimatePresence>
              {!isModalOpen && (
                <motion.button
                  layoutId="hero-cta-container"
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-primary text-white text-lg sm:text-2xl font-display font-bold tracking-wider rounded-sm cursor-pointer border border-primary/50 w-full sm:w-auto btn-sweep"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span layoutId="hero-cta-content" className="relative z-10 flex items-center justify-center gap-2">
                    {t.hero.cta}
                  </motion.span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {!isModalOpen && (
            <motion.a
              href="#work"
              onClick={(e: any) => smoothScroll(e, 'work')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group flex items-center gap-3 px-5 py-2.5 sm:px-8 sm:py-4 liquid-glass w-full sm:w-auto justify-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-sm cursor-pointer"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" aria-hidden="true" />
              {t.hero.watchShowreel}
            </motion.a>
          )}

          {/* Expanded Modal State */}
          <AnimatePresence>
            {isModalOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-[55]"
                  onClick={() => setIsModalOpen(false)}
                />
                <motion.div
                  layoutId="hero-cta-container"
                  className="fixed inset-x-4 top-[10%] sm:top-1/2 sm:-translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 w-auto sm:w-[500px] max-h-[80vh] bg-surface-dark border border-white/10 rounded-2xl z-[60] shadow-2xl overflow-hidden flex flex-col"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-start mb-6 shrink-0">
                      <motion.h3 layoutId="hero-cta-content" className="text-2xl sm:text-3xl font-display font-bold">
                        {t.hero.modal.titlePart1}<span className="text-primary">{t.hero.modal.titlePart2}</span>
                      </motion.h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer rounded-full bg-white/5 hover:bg-white/10"
                        aria-label="Close"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                      <div className="space-y-1.5 flex flex-col items-start w-full">
                        <label className="text-[11px] font-bold tracking-widest uppercase text-white/70 block text-left w-full">{t.hero.modal.name}</label>
                        <input type="text" placeholder={t.hero.modal.namePlaceholder} className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                      </div>

                      <div className="space-y-1.5 flex flex-col items-start w-full">
                        <label className="text-[11px] font-bold tracking-widest uppercase text-white/70 block text-left w-full">{t.hero.modal.email}</label>
                        <input type="email" placeholder={t.hero.modal.emailPlaceholder} className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                      </div>

                      <div className="space-y-1.5 flex flex-col items-start w-full">
                        <label className="text-[11px] font-bold tracking-widest uppercase text-white/70 block text-left w-full">{t.hero.modal.projectType}</label>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          {t.hero.modal.types.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => toggleType(type)}
                              className={`px-3 py-2.5 text-xs sm:text-sm font-medium border rounded-lg transition-all text-left w-full ${selectedTypes.includes(type)
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-white/10 text-white hover:border-primary/50 hover:bg-white/5'
                                }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 flex flex-col items-start w-full">
                        <label className="text-[11px] font-bold tracking-widest uppercase text-white/70 block text-left w-full">{t.hero.modal.budget}</label>
                        <select className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                          <option value="">{t.hero.modal.budgetDefault}</option>
                          <option value="5k">{t.hero.modal.budgetRanges[0]}</option>
                          <option value="15k">{t.hero.modal.budgetRanges[1]}</option>
                          <option value="30k">{t.hero.modal.budgetRanges[2]}</option>
                        </select>
                      </div>

                      <button className="w-full py-4 bg-primary text-white font-bold tracking-widest uppercase rounded-lg mt-4 text-sm sm:text-base group relative overflow-hidden btn-sweep">
                        <span className="relative z-10">{t.hero.modal.submit}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-background-dark border-t border-white/10 overflow-hidden" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            t.stats.hrs,
            t.stats.projects,
            t.stats.views,
            t.stats.returnRate
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black font-display chrome-text leading-none mb-2">{stat.value}</span>
              <span className="text-[11px] md:text-xs text-text-muted font-black tracking-widest uppercase max-w-[120px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Logos = () => {
  const { t } = useLanguage();
  const logosList = [
    { icon: Globe, name: 'EXPO CITY' },
    { icon: Hexagon, name: 'DMCC' },
    { icon: Shield, name: 'NAKHEEL' },
    { icon: Zap, name: 'EMAAR' },
    { icon: Cpu, name: 'MERAAS' }
  ];

  return (
    <section className="py-8 bg-surface-dark border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 w-full relative">
        <span className="text-[11px] font-black tracking-[0.3em] text-text-muted uppercase shrink-0 text-center">{t.logos.trustedBy}</span>

        {/* Marquee Container */}
        <div className="w-full relative overflow-hidden flex whitespace-nowrap mask-edges">
          <div className="flex gap-12 w-max flex-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
            {/* First Set */}
            {logosList.map((logo, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 group/logo shrink-0 pl-12">
                <logo.icon className="w-5 h-5 md:w-7 md:h-7 text-white group-hover/logo:text-primary transition-colors" strokeWidth={1.5} />
                <span className="text-sm sm:text-base md:text-xl font-bold font-display tracking-widest">{logo.name}</span>
              </div>
            ))}
            {/* Duplicated Set for Infinite Scroll */}
            {logosList.map((logo, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-2 md:gap-3 group/logo shrink-0 pl-12">
                <logo.icon className="w-5 h-5 md:w-7 md:h-7 text-white group-hover/logo:text-primary transition-colors" strokeWidth={1.5} />
                <span className="text-sm sm:text-base md:text-xl font-bold font-display tracking-widest">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background-dark" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">{t.services.subtitle}</p>
            <h2 id="services-heading" className="text-[32px] min-[390px]:text-4xl sm:text-6xl md:text-8xl font-bold leading-none whitespace-nowrap">{t.services.title}</h2>
          </div>
          <p className="text-text-muted max-w-sm text-sm uppercase tracking-widest leading-relaxed font-medium">
            {t.services.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-auto">
          {/* Reels Production */}
          <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6 w-full">
              <div className="flex items-start gap-4 mb-4">
                <Smartphone className="text-primary w-12 h-12 transition-transform group-hover:-translate-y-1 shrink-0" />
                <span className="text-[10px] font-black tracking-tighter border border-primary/30 px-2 py-1 text-primary uppercase mt-1">{t.services.items[0].badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[0].title}</h3>
            </div>
            <p className="text-text-muted text-sm font-medium">{t.services.items[0].desc}</p>
          </div>

          {/* Full Event Coverage */}
          <div className="md:col-span-3 lg:col-span-8 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6 w-full">
              <div className="flex items-start gap-4 mb-4">
                <Video className="text-primary w-12 h-12 transition-transform group-hover:-translate-y-1 shrink-0" />
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold tracking-widest uppercase mt-1">{t.services.items[1].badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[1].title}</h3>
            </div>
            <p className="text-text-muted text-sm max-w-[90%] font-medium">{t.services.items[1].desc}</p>
          </div>

          {/* Brand Content */}
          <div className="md:col-span-3 lg:col-span-5 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6">
              <Tag className="text-primary w-12 h-12 mb-4 transition-transform group-hover:-translate-y-1" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[2].title}</h3>
            </div>
            <p className="text-text-muted text-sm font-medium">{t.services.items[2].desc}</p>
          </div>

          {/* Real Estate Media */}
          <div className="md:col-span-3 lg:col-span-7 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6">
              <Building2 className="text-primary w-12 h-12 mb-4 transition-transform group-hover:-translate-y-1" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[3].title}</h3>
            </div>
            <p className="text-text-muted text-sm max-w-md font-medium">{t.services.items[3].desc}</p>
          </div>

          {/* Show Production */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6">
              <Clapperboard className="text-primary w-12 h-12 mb-4 transition-transform group-hover:-translate-y-1" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[4].title}</h3>
            </div>
            <p className="text-text-muted text-sm font-medium">{t.services.items[4].desc}</p>
          </div>

          {/* Multicam Live Stream */}
          <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6">
              <Tv className="text-primary w-12 h-12 mb-4 transition-transform group-hover:-translate-y-1" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[5].title}</h3>
            </div>
            <p className="text-text-muted text-sm max-w-[90%] font-medium">{t.services.items[5].desc}</p>
          </div>

          {/* Music Clips & Art */}
          <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:border-primary/40 border border-white/5 relative overflow-hidden chrome-border group cursor-pointer" role="article">
            <div className="mb-6">
              <Palette className="text-primary w-12 h-12 mb-4 transition-transform group-hover:-translate-y-1" />
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{t.services.items[6].title}</h3>
            </div>
            <p className="text-text-muted text-sm font-medium">{t.services.items[6].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useLanguage();
  const stepIcons = [FileText, Camera, Scissors, Package];

  return (
    <section className="py-24 bg-surface-dark/30 border-y border-white/5" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">{t.process.subtitle}</p>
          <h2 className="text-[32px] min-[390px]:text-4xl sm:text-6xl md:text-8xl font-bold leading-none whitespace-nowrap sm:whitespace-normal">{t.process.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {t.process.items.map((item, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="mb-6 flex items-center">
                  <span className="text-6xl font-bold font-display chrome-text opacity-20 group-hover:opacity-100 transition-opacity absolute -top-10 left-0">0{i + 1}</span>
                  <Icon className="w-12 h-12 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-3xl font-bold font-display mb-4">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background-dark" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">{t.portfolio.subtitle}</p>
          <h2 id="portfolio-heading" className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none">{t.portfolio.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative overflow-hidden group rounded-lg h-[350px] sm:h-[450px] md:h-[600px] md:row-span-2 cursor-pointer" role="figure" aria-label="Palm Jumeirah Villa Tour — luxury real estate video">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              alt="Luxury villa interior in Palm Jumeirah, Dubai — real estate property tour video"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-xs font-black tracking-[0.2em] mb-2">{t.portfolio.items[0].badge}</span>
              <h4 className="text-4xl font-bold font-display leading-none mb-4">{t.portfolio.items[0].title}</h4>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <Play className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg h-[240px] sm:h-[290px] cursor-pointer" role="figure" aria-label="Global Tech Summit — forum video coverage">
            <img
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800"
              alt="Professional camera capturing a corporate tech summit event in Dubai"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-black tracking-[0.2em] mb-2">{t.portfolio.items[1].badge}</span>
              <h4 className="text-3xl font-bold font-display leading-none mb-4">{t.portfolio.items[1].title}</h4>
              <Play className="w-5 h-5 fill-current" />
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg h-[240px] sm:h-[290px] cursor-pointer" role="figure" aria-label="Supercars Emirates — commercial video">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
              alt="Luxury supercar under dramatic lighting for Emirates automotive commercial"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-black tracking-[0.2em] mb-2">{t.portfolio.items[2].badge}</span>
              <h4 className="text-3xl font-bold font-display leading-none mb-4">{t.portfolio.items[2].title}</h4>
              <Play className="w-5 h-5 fill-current" />
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg h-[240px] sm:h-[290px] lg:col-span-2 cursor-pointer" role="figure" aria-label="Dubai Nights Visuals — music & art video">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
              alt="Vibrant concert stage lighting for Dubai Nights music video production"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-xs font-black tracking-[0.2em] mb-2">{t.portfolio.items[3].badge}</span>
              <h4 className="text-4xl font-bold font-display leading-none mb-4">{t.portfolio.items[3].title}</h4>
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t, setIsModalOpen } = useLanguage();
  return (
    <section className="py-24 bg-surface-dark relative border-y border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] min-[390px]:text-4xl sm:text-6xl md:text-8xl font-bold mb-4 leading-none whitespace-nowrap sm:whitespace-normal">{t.pricing.title}</h2>
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-4 max-w-full">
            <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
            <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap overflow-hidden text-ellipsis block">{t.pricing.guaranteeTitle}</span>
          </div>
          <p className="text-text-muted text-sm max-w-md mx-auto">{t.pricing.guaranteeDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Essential */}
          <div className="bg-background-dark p-8 rounded-lg border border-white/5 relative flex flex-col group cursor-pointer z-10">
            <h3 className="text-3xl font-bold font-display mb-2">{t.pricing.tiers[0].title}</h3>
            <p className="text-gray-400 text-sm mb-8 h-12">{t.pricing.tiers[0].desc}</p>
            <div className="mb-10">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">{t.pricing.startingFrom}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary font-display">{t.pricing.currency}</span>
                <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">{t.pricing.tiers[0].price}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {t.pricing.tiers[0].features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-4 text-white font-bold tracking-widest uppercase rounded cursor-pointer liquid-glass">
              {t.pricing.tiers[0].cta}
            </button>
          </div>

          {/* Premium */}
          <div className="bg-background-dark p-8 rounded-lg border border-white/5 relative flex flex-col group cursor-pointer lg:-translate-y-4 shadow-2xl z-20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black tracking-widest px-4 py-1.5 uppercase rounded-sm whitespace-nowrap">
              {t.pricing.tiers[1].badge}
            </div>
            <h3 className="text-3xl font-bold font-display mb-2">{t.pricing.tiers[1].title}</h3>
            <p className="text-gray-400 text-sm mb-8 h-12">{t.pricing.tiers[1].desc}</p>
            <div className="mb-10">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">{t.pricing.startingFrom}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary font-display">{t.pricing.currency}</span>
                <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">{t.pricing.tiers[1].price}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {t.pricing.tiers[1].features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-4 text-white font-bold tracking-widest uppercase rounded cursor-pointer liquid-glass">
              {t.pricing.tiers[1].cta}
            </button>
          </div>

          {/* Retainer */}
          <div className="bg-background-dark p-8 rounded-lg border border-white/5 relative flex flex-col group cursor-pointer z-10">
            <h3 className="text-3xl font-bold font-display mb-2">{t.pricing.tiers[2].title}</h3>
            <p className="text-gray-400 text-sm mb-8 h-12">{t.pricing.tiers[2].desc}</p>
            <div className="mb-10">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">{t.pricing.startingFrom}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary font-display">{t.pricing.currency}</span>
                <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">{t.pricing.tiers[2].price}</span>
                <span className="text-gray-500 text-sm font-bold">{t.pricing.perMonth}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {t.pricing.tiers[2].features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-4 text-white font-bold tracking-widest uppercase rounded cursor-pointer liquid-glass">
              {t.pricing.tiers[2].cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div>
            <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">{t.testimonials.subtitle}</p>
            <h2 className="text-[28px] min-[390px]:text-[32px] sm:text-6xl md:text-8xl font-bold leading-none whitespace-nowrap sm:whitespace-normal">{t.testimonials.title}</h2>
          </div>
          <div className="bg-surface-dark border border-white/10 px-4 py-3 rounded-lg flex items-center gap-3 shrink-0">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            </div>
            <div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-[11px] font-black tracking-widest uppercase mt-0.5">{t.testimonials.rating}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="bg-surface-dark p-8 rounded-xl border border-white/5 hover:border-white/15 transition-colors relative group flex flex-col cursor-pointer">
              <div className="flex-grow">
                <span className="text-primary/20 text-7xl font-serif leading-none block -mb-4 select-none" aria-hidden="true">"</span>
                <p className="text-lg text-gray-300 italic leading-relaxed relative z-10">"{item.quote}"</p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border border-white/20 shrink-0" role="img" aria-label={`Photo of ${item.name}`}></div>
                <div>
                  <p className="font-bold font-display text-xl leading-tight">{item.name}</p>
                  <p className="text-[11px] text-text-muted uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface-dark/50" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">{t.faq.subtitle}</p>
          <h2 id="faq-heading" className="text-[32px] min-[390px]:text-4xl sm:text-6xl md:text-8xl font-bold leading-none whitespace-nowrap sm:whitespace-normal">{t.faq.title}</h2>
        </div>
        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <div key={i} className="bg-background-dark border border-white/5 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-lg md:text-xl font-normal tracking-wide pr-4">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''} text-primary shrink-0`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t, language } = useLanguage();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <section className="bg-black relative py-32 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col pt-2">
            <div className="mb-6 flex flex-row items-center bg-white/5 p-2 min-[390px]:p-3 sm:p-4 rounded border border-white/10 gap-2 min-[390px]:gap-3 sm:gap-4 w-fit max-w-full overflow-hidden">
              <div className="flex items-center gap-1.5 min-[390px]:gap-2 sm:gap-3 border-r border-white/10 pr-2 min-[390px]:pr-3 sm:pr-4">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" aria-hidden="true" />
                <span className="font-black text-[2.5vw] min-[390px]:text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-widest uppercase whitespace-nowrap overflow-hidden text-ellipsis">{t.contact.projectsCompleted}</span>
              </div>
              <div className="flex items-center gap-1.5 min-[390px]:gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-2 h-2 sm:w-3 sm:h-3" />
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0" />)}
                </div>
                <span className="text-[10px] sm:text-xs font-bold shrink-0">5.0</span>
              </div>
            </div>

            <h2 className={`font-bold mb-8 font-display leading-none tracking-tighter ${language === 'ru'
              ? 'text-[32px] min-[390px]:text-4xl sm:text-5xl md:text-[80px]'
              : 'text-5xl sm:text-6xl md:text-[100px]'
              }`}>
              {t.contact.titleLine1}<br />
              <span className="text-primary whitespace-pre-line">{t.contact.titleLine2}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-lg leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">{t.contact.directLine}</p>
                  <a href="mailto:moonlight.advertize@gmail.com" className="text-sm min-[390px]:text-base sm:text-xl lg:text-2xl font-bold hover:text-primary transition-colors font-display break-all sm:break-normal">MOONLIGHT.ADVERTIZE@GMAIL.COM</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">{t.contact.globalHq}</p>
                  <p className="text-2xl font-bold font-display">{t.contact.hqAddress}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">{t.contact.responseTime}</p>
                  <p className="text-2xl font-bold font-display">{t.contact.timeLimit}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark p-10 rounded-xl shadow-2xl relative chrome-border h-fit">
            <form className="space-y-6" aria-label="Project inquiry form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] text-gray-500 uppercase font-black tracking-widest mb-2">{t.contact.form.nameLabel}</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
                    autoComplete="name"
                    className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-[11px] text-gray-500 uppercase font-black tracking-widest mb-2">{t.contact.form.phoneLabel}</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder={t.contact.form.phonePlaceholder}
                    autoComplete="tel"
                    className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-gray-500 uppercase font-black tracking-widest mb-2">{t.contact.form.typeLabel}</label>
                <div className="grid grid-cols-2 gap-2">
                  {t.contact.form.types.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`px-4 py-3 text-sm font-medium border rounded-sm transition-all text-left w-full ${selectedTypes.includes(type)
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-white/5 bg-background-dark text-white hover:border-primary/50'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="contact-budget" className="block text-[11px] text-gray-500 uppercase font-black tracking-widest mb-2">{t.hero.modal.budget}</label>
                <select id="contact-budget" className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                  <option value="">{t.hero.modal.budgetDefault}</option>
                  <option value="5k">{t.hero.modal.budgetRanges[0]}</option>
                  <option value="15k">{t.hero.modal.budgetRanges[1]}</option>
                  <option value="30k">{t.hero.modal.budgetRanges[2]}</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-brief" className="block text-[11px] text-gray-500 uppercase font-black tracking-widest mb-2">{t.contact.form.briefLabel}</label>
                <textarea
                  id="contact-brief"
                  placeholder={t.contact.form.briefPlaceholder}
                  rows={4}
                  className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-black text-sm min-[375px]:text-base sm:text-xl lg:text-2xl font-display tracking-widest py-5 rounded-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-4 cursor-pointer relative overflow-hidden btn-sweep group whitespace-nowrap px-4"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-4">
                  {t.contact.form.submit}
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                </span>
              </button>
              <p className="text-center text-[11px] text-gray-600 uppercase tracking-widest mt-4">{t.contact.form.note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background-dark border-t border-white/5 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-16 pb-6 md:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mb-8 md:mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <Play className="w-3 h-3 text-primary fill-primary/40" />
              </div>
              <h2 className="text-2xl font-bold tracking-wider font-display">
                MOONLIGHT<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            {/* Newsletter Input */}
            <div className="flex items-center gap-2 mt-2">
              <div className="relative flex-1 max-w-xs">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button className="p-2.5 bg-primary rounded-lg text-white hover:bg-red-700 transition-colors cursor-pointer">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Link Columns — 3-col on mobile */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-3 gap-4 md:contents">
            {[
              {
                title: t.footer.columns[0].title,
                links: [
                  { label: t.footer.columns[0].links[0], href: '#services' },
                  { label: t.footer.columns[0].links[1], href: '#services' },
                  { label: t.footer.columns[0].links[2], href: '#services' },
                  { label: t.footer.columns[0].links[3], href: '#services' },
                ],
              },
              {
                title: t.footer.columns[1].title,
                links: [
                  { label: t.footer.columns[1].links[0], href: '#work' },
                  { label: t.footer.columns[1].links[1], href: '#pricing' },
                  { label: t.footer.columns[1].links[2], href: '#services' },
                  { label: t.footer.columns[1].links[3], href: '#contact' },
                ],
              },
              {
                title: t.footer.columns[2].title,
                links: [
                  { label: t.footer.columns[2].links[0], href: '#' },
                  { label: t.footer.columns[2].links[1], href: '#' },
                  { label: t.footer.columns[2].links[2], href: '#' },
                  { label: t.footer.columns[2].links[3], href: '#' },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3 md:gap-4 md:col-span-2">
                <h4 className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2 md:gap-3">
                  {section.links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        onClick={(e: any) => {
                          const id = href.replace('#', '');
                          if (id) { smoothScroll(e, id); }
                        }}
                        className="text-xs md:text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group w-fit cursor-pointer"
                      >
                        <span className="hidden md:block w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary transition-all group-hover:w-4 duration-200" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="text-gray-600 hover:text-white transition-colors cursor-pointer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase font-medium text-green-500/80 tracking-wider">{t.footer.status}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/971500000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-colors hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] border-2 sm:border-4 border-white/10 cursor-pointer"
  >
    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 fill-current" aria-hidden="true" />
  </a>
);

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[language];

  // Dynamic SEO Metadata
  useEffect(() => {
    // Update document title and lang
    document.title = t.seo.title;
    document.documentElement.lang = language;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.seo.description);

    // Dynamic Hreflang Injection
    const baseUrl = window.location.origin;
    const languages: Language[] = ['en', 'ru'];

    // Remove old hreflang tags
    const oldHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    oldHreflangs.forEach(el => el.remove());

    // Add new hreflang tags
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = baseUrl; // Since it's a single-page switcher, we point to base
      document.head.appendChild(link);
    });

    // x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = baseUrl;
    document.head.appendChild(defaultLink);

  }, [language, t.seo]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isModalOpen, setIsModalOpen }}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Logos />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageContext.Provider>
  );
}
