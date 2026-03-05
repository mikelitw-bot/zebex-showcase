'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { productLines, ProductLine } from '@/lib/products';
import { translations, Lang } from '@/lib/translations';
import Image from 'next/image';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#D4192C] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
const ShieldIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const TargetIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);
const ZapIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const GlobeIcon = ({ dark }: { dark?: boolean }) => (
  <svg className={`w-4 h-4 ${dark ? 'text-[#444]' : 'text-[#86868B]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

function LanguageSwitcher({ lang, setLang, dark }: { lang: Lang; setLang: (l: Lang) => void; dark?: boolean }) {
  const langs: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: '한국어' },
    { code: 'zh-TW', label: '繁中' },
    { code: 'de', label: 'DE' },
  ];
  return (
    <div className={`flex items-center gap-1 rounded-full px-2 py-1 ${dark ? 'bg-black/5 border border-black/8' : 'glass'}`}>
      <GlobeIcon dark={dark} />
      {langs.map((l) => (
        <button key={l.code} onClick={() => setLang(l.code)}
          className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
            lang === l.code
              ? 'bg-[#D4192C] text-white'
              : dark ? 'text-[#555] hover:text-[#111]' : 'text-[#86868B] hover:text-white'
          }`}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Navbar({ activeTab, setActiveTab, lang, setLang, t }: {
  activeTab: ProductLine; setActiveTab: (t: ProductLine) => void;
  lang: Lang; setLang: (l: Lang) => void; t: typeof translations['en'];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handler = () => {
      const heroEl = document.getElementById('hero');
      const heroH = heroEl ? heroEl.clientHeight : window.innerHeight;
      setScrolled(window.scrollY > 10);
      setIsLightSection(window.scrollY > heroH - 80);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const tabs: { id: ProductLine; label: string }[] = [
    { id: 'laser-sensors', label: t.nav.laserSensors },
    { id: 'fixed-scanners', label: t.nav.fixedScanners },
    { id: 'scan-modules', label: t.nav.scanModules },
    { id: 'handheld-scanners', label: t.nav.handheldScanners },
  ];

  const navClass = isLightSection
    ? 'nav-white'
    : scrolled ? 'glass-dark border-b border-white/5' : 'bg-transparent';

  const textActive = isLightSection ? 'text-[#1D1D1F]' : 'text-white';
  const textInactive = isLightSection ? 'text-[#888] hover:text-[#1D1D1F]' : 'text-[#86868B] hover:text-[#CCC]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-5 h-0.5 bg-[#D4192C]" />
            <span className={`font-bold text-lg tracking-wider transition-colors ${isLightSection ? 'text-[#1D1D1F]' : 'text-white'}`}>ZEBEX</span>
          </div>
          <div className="hidden md:flex items-center">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`relative px-4 py-4 text-sm font-medium transition-colors ${activeTab === tab.id ? textActive : textInactive}`}>
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4192C] rounded-t-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} setLang={setLang} dark={isLightSection} />
            <a href="#contact" className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white red-gradient hover:opacity-90 transition-opacity">
              Contact Sales
            </a>
          </div>
        </div>
        {/* Mobile tabs */}
        <div className="md:hidden flex overflow-x-auto gap-0 pb-1">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`relative flex-shrink-0 px-3 py-2 text-xs font-medium transition-colors ${activeTab === tab.id ? textActive : textInactive}`}>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="mob-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4192C] rounded-t-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ t }: { t: typeof translations['en'] }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <Image src="/images/products/hero-warehouse.png" alt="ZEBEX warehouse" fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#D4192C]" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-xs font-medium text-[#D4192C] border border-[#D4192C]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4192C] animate-pulse" />
          ZEBEX Industries — 2025 Automation Series
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          {t.hero.tagline}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#86868B] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-semibold text-white red-gradient hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#D4192C]/25">
            {t.hero.cta}
          </button>
          <a href="#contact" className="px-8 py-3.5 rounded-full font-semibold text-white glass border border-white/10 hover:border-white/20 transition-all hover:bg-white/5">
            Contact Sales
          </a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 60, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden glass border border-white/8">
          <Image src="/images/products/product-lineup.png" alt="ZEBEX product lineup" width={1200} height={680} className="w-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#86868B] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#D4192C] to-transparent" />
      </motion.div>
    </section>
  );
}

function ProductCard({ product, lang, t, index }: {
  product: (typeof productLines)[0]['products'][0]; lang: Lang; t: typeof translations['en']; index: number;
}) {
  const [showSpecs, setShowSpecs] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="product-card rounded-3xl overflow-hidden">
      {/* Product image area — light gray bg */}
      <div className="relative bg-[#F5F5F7] flex items-center justify-center min-h-[280px] p-6">
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#D4192C] border border-[#D4192C]/25 bg-white">
            {product.model}
          </span>
        </div>
        <Image src={product.image} alt={product.model} width={340} height={240}
          className="object-contain max-h-56 w-auto" />
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1D1D1F] mb-1">{product.name[lang]}</h3>
        <p className="text-[#D4192C] text-sm font-medium mb-3">{product.tagline[lang]}</p>
        <p className="text-[#555] text-sm leading-relaxed mb-5">{product.description[lang]}</p>
        <ul className="space-y-2.5 mb-5">
          {product.features[lang].map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#1D1D1F]">
              <CheckIcon /><span>{f}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowSpecs(!showSpecs)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-[#555] hover:text-[#1D1D1F] hover:border-gray-300 bg-[#F5F5F7] transition-all">
          <span>{t.specs}</span>
          <motion.span animate={{ rotate: showSpecs ? 180 : 0 }} transition={{ duration: 0.3 }}>▾</motion.span>
        </button>
        <AnimatePresence>
          {showSpecs && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3">
              <div className="rounded-xl overflow-hidden border border-gray-100">
                {product.specs.map((spec, i) => (
                  <div key={i} className={`flex justify-between px-4 py-2.5 text-xs ${i % 2 === 0 ? 'bg-[#F5F5F7]' : 'bg-white'}`}>
                    <span className="text-[#888]">{spec.label}</span>
                    <span className="text-[#1D1D1F] font-medium text-right max-w-[55%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function WhyLaserSection({ t }: { t: typeof translations['en'] }) {
  const wl = t.whyLaser;
  const iconMap: Record<string, React.ReactNode> = {
    shield: <ShieldIcon />, target: <TargetIcon />, zap: <ZapIcon />,
  };
  return (
    <FadeSection className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#D4192C] border border-[#D4192C]/30 bg-[#D4192C]/8 mb-4">
          {wl.badge}
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{wl.title}</h2>
        <p className="text-[#86868B] max-w-2xl mx-auto text-sm leading-relaxed">{wl.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <FadeSection delay={0.1} className="battle-card-laser rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl red-gradient flex items-center justify-center text-white shadow-md shadow-[#D4192C]/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-[#D4192C] font-semibold uppercase tracking-widest">Recommended</span>
              <h3 className="text-xl font-bold text-white">{wl.laser}</h3>
            </div>
          </div>
          <p className="text-[#86868B] text-sm leading-relaxed">{wl.laserDesc}</p>
        </FadeSection>
        <FadeSection delay={0.2} className="battle-card-led rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-[#86868B]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-[#86868B] font-semibold uppercase tracking-widest">Standard</span>
              <h3 className="text-xl font-bold text-[#86868B]">{wl.led}</h3>
            </div>
          </div>
          <p className="text-[#86868B] text-sm leading-relaxed">{wl.ledDesc}</p>
        </FadeSection>
      </div>
      <FadeSection delay={0.15} className="rounded-3xl overflow-hidden border border-white/8 mb-12">
        <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider text-[#86868B] px-6 py-4 border-b border-white/6 bg-white/3">
          <span>Category</span>
          <span className="text-[#D4192C]">Laser BGS ✓</span>
          <span>LED Red Light</span>
        </div>
        {wl.comparison.map((row, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/4 last:border-0 ${i % 2 === 0 ? 'bg-white/2' : ''}`}>
            <div className="text-sm font-medium text-white">{row.category}</div>
            <div className="flex items-start gap-1.5 text-xs text-[#D4D4D6]">
              <span className="text-[#D4192C] font-bold mt-0.5 flex-shrink-0">✓</span><span>{row.laserVal}</span>
            </div>
            <div className="flex items-start gap-1.5 text-xs text-[#86868B]">
              <span className="mt-0.5 flex-shrink-0">✗</span><span>{row.ledVal}</span>
            </div>
          </motion.div>
        ))}
      </FadeSection>
      <div className="grid sm:grid-cols-3 gap-6">
        {wl.advantages.map((adv, i) => (
          <FadeSection key={i} delay={i * 0.12} className="glass rounded-2xl p-6 border border-white/6 text-center">
            <div className="w-14 h-14 rounded-2xl red-gradient flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#D4192C]/25">
              {iconMap[adv.icon]}
            </div>
            <h4 className="text-white font-semibold mb-2 text-sm">{adv.title}</h4>
            <p className="text-[#86868B] text-xs leading-relaxed">{adv.desc}</p>
          </FadeSection>
        ))}
      </div>
    </FadeSection>
  );
}

function ApplicationsSection({ applications, t, lang }: {
  applications: (typeof productLines)[0]['applications']; t: typeof translations['en']; lang: Lang;
}) {
  const items = applications[lang];
  return (
    <FadeSection className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-3">{t.applications.title}</h2>
        <p className="text-[#666] max-w-xl mx-auto">{t.applications.subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.1, duration: 0.6 }}
            className="app-card rounded-2xl p-5">
            <div className="text-3xl mb-3">{app.icon}</div>
            <h4 className="text-[#1D1D1F] font-semibold mb-2 text-sm">{app.title}</h4>
            <p className="text-[#666] text-xs leading-relaxed">{app.description}</p>
          </motion.div>
        ))}
      </div>
    </FadeSection>
  );
}

function ContactSection({ t }: { t: typeof translations['en'] }) {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-[#D4192C]/8 blur-3xl" />
      </div>
      <FadeSection className="relative max-w-2xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#D4192C] border border-[#D4192C]/30 bg-[#D4192C]/8 mb-6">
          {t.contact.title}
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.contact.title}</h2>
        <p className="text-[#86868B] mb-12 text-base">{t.contact.subtitle}</p>
        <div className="glass rounded-3xl p-8 sm:p-10 border border-white/8">
          <div className="w-20 h-20 rounded-full red-gradient flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#D4192C]/30">
            <span className="text-white text-2xl font-bold">ML</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Mike Lee</h3>
          <p className="text-[#86868B] text-sm mb-2">{t.contact.role} — ZEBEX Industries</p>
          <p className="text-[#D4192C] font-medium mb-8">{t.contact.email}</p>
          <a href="mailto:mike.lee@zebex.com"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-white red-gradient hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#D4192C]/25">
            <MailIcon />{t.contact.cta}
          </a>
          <div className="mt-8 pt-8 border-t border-white/6">
            <p className="text-[#86868B] text-xs mb-1.5 font-medium">ZEBEX Industries Inc.</p>
            <p className="text-[#86868B] text-xs">5/F, 1, No.297, Sec.3, Beixin Rd., Xindian Dist., New Taipei City 231, Taiwan</p>
            <p className="text-[#86868B] text-xs mt-1">Tel: +886-2-8912-2588 · Fax: +886-2-8912-2536</p>
            <p className="text-[#86868B] text-xs mt-1">
              <a href="https://www.zebex.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4192C] transition-colors">www.zebex.com</a>
            </p>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="w-4 h-0.5 bg-[#D4192C]" />
            <span className="text-white font-bold text-sm tracking-wider">ZEBEX</span>
          </div>
          <p className="text-[#86868B] text-xs">© {new Date().getFullYear()} ZEBEX Industries Inc. All rights reserved.</p>
          <p className="text-[#444] text-xs mt-1">Leading 2D Barcode Scanner Solution Provider</p>
        </div>
      </FadeSection>
    </section>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<ProductLine>('laser-sensors');
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const line = productLines.find((p) => p.id === activeTab)!;

  return (
    <main className="min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} setLang={setLang} t={t} />

      {/* 1. Hero — DARK */}
      <HeroSection t={t} />

      {/* 2. Products — WHITE */}
      <section id="products" className="bg-white">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }}
            className="text-center pt-16 pb-10 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-4 leading-tight">{line.name[lang]}</h2>
            <p className="text-lg text-[#666]">{line.tagline[lang]}</p>
          </motion.div>
        </AnimatePresence>
        <div className="px-6 pb-20 max-w-7xl mx-auto">
          <div className={`grid gap-8 ${
            line.products.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' :
            line.products.length === 2 ? 'md:grid-cols-2' :
            'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            <AnimatePresence mode="wait">
              {line.products.map((product, i) => (
                <ProductCard key={`${activeTab}-${product.id}`} product={product} lang={lang} t={t} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Why Laser — DARK (laser-sensors tab only) */}
      {line.showWhyLaser && (
        <section className="bg-[#0A0A0A]">
          <WhyLaserSection t={t} />
        </section>
      )}

      {/* 4. Applications — LIGHT GRAY */}
      <section className="bg-[#F5F5F7]">
        <ApplicationsSection applications={line.applications} t={t} lang={lang} />
      </section>

      {/* 5. Contact — DARK */}
      <ContactSection t={t} />
    </main>
  );
}
