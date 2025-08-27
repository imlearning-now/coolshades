import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, ThermometerSun, Bus, Building2, Factory, Globe2, Cpu, Wrench, Gauge, Mail, ShieldCheck, Layers3
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } })
}

const Nav = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
    <div className="container flex items-center justify-between h-16">
      <a href="#home" className="font-bold text-xl tracking-tight">CoolShade</a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#home" className="hover:text-climateGreen">Home</a>
        <a href="#problem" className="hover:text-climateGreen">Problem</a>
        <a href="#solution" className="hover:text-climateGreen">Solution</a>
        <a href="#pilot" className="hover:text-climateGreen">Pilot</a>
        <a href="#impact" className="hover:text-climateGreen">Impact</a>
        <a href="#global" className="hover:text-climateGreen">Global</a>
        <a href="#contact" className="hover:text-climateGreen">Contact</a>
      </nav>
      <a href="#contact" className="md:hidden btn-primary text-sm">Join the Pilot</a>
    </div>
  </header>
)

const Hero = () => (
  <section id="home" className="section relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-climateBlue/10 via-transparent to-climateGreen/10" />
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          CoolShade — Urban Cooling Canopies
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          Safe, reversible high-albedo shade. Vietnam pilot → Global export.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="btn-primary">Join the Pilot</a>
          <a href="#solution" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50 transition-colors">Learn more</a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
        className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200 shadow-inner"
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <Layers3 className="w-16 h-16" />
        </div>
      </motion.div>
    </div>
  </section>
)

const Problem = () => (
  <section id="problem" className="section">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>The Problem</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: ThermometerSun, text: 'Urban heat stress threatens health and productivity.' },
          { icon: Sun, text: 'Rising electricity demand from air conditioning.' },
          { icon: Bus, text: 'Open spaces (markets, bus stops, stadiums) left unprotected.' },
        ].map((item, idx) => (
          <motion.div key={idx} className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}>
            <item.icon className="w-6 h-6 text-climateGreen mb-3" />
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Solution = () => (
  <section id="solution" className="section bg-gray-50">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Our Solution</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: 'High-SRI modular canopies' },
          { icon: Gauge, title: 'IoT + MRV sensors for ΔT & kWh savings' },
          { icon: Building2, title: 'Safe, reversible, not SRM' },
        ].map((item, idx) => (
          <motion.div key={idx} className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}>
            <item.icon className="w-6 h-6 text-climateBlue mb-3" />
            <h3 className="font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Pilot = () => (
  <section id="pilot" className="section">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Pilot in Vietnam</motion.h2>
      <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        3 sites (market, school yard, bus station). Duration: 6–9 months.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Factory, k: 'ΔT', v: '≥ 2–4°C' },
          { icon: Cpu, k: 'Energy savings', v: '≥ 10–20%' },
          { icon: Wrench, k: 'Availability', v: '≥ 90%' },
        ].map((metric, idx) => (
          <motion.div key={idx} className="card text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}>
            <metric.icon className="w-8 h-8 text-climateGreen mx-auto mb-2" />
            <div className="text-sm text-gray-500">{metric.k}</div>
            <div className="text-2xl font-bold">{metric.v}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Impact = () => (
  <section id="impact" className="section bg-gray-50">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Jobs & Economic Impact</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          'Local manufacturing & assembly.',
          'Service, cleaning, maintenance jobs.',
          'Export demand → foreign currency revenues.',
        ].map((text, idx) => (
          <motion.div key={idx} className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}>
            <p className="text-gray-700">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Global = () => (
  <section id="global" className="section">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Global Potential</motion.h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <p className="section-subtitle">
            Replication across Southeast Asia, MENA, South Asia, Latin America, Southern Europe.
          </p>
        </motion.div>
        <motion.div 
          className="aspect-[16/9] rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center text-gray-400"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <Globe2 className="w-16 h-16" />
        </motion.div>
      </div>
    </div>
  </section>
)

const WhyUs = () => (
  <section id="whyus" className="section bg-gray-50">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Why Us</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Factory, text: 'Experienced in hardware systems' },
          { icon: Cpu, text: 'Automation & controls' },
          { icon: Gauge, text: 'MRV and data-quality discipline' },
        ].map((item, idx) => (
          <motion.div key={idx} className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeIn}>
            <item.icon className="w-6 h-6 text-climateBlue mb-3" />
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>Get in Touch</motion.h2>
      <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        Email: <a href="mailto:hello@coolshade.io" className="text-climateBlue underline">hello@coolshade.io</a>
      </motion.p>
      <form className="grid md:grid-cols-3 gap-4" onSubmit={(e)=>e.preventDefault()}>
        <input className="col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-climateBlue" placeholder="Name" />
        <input type="email" className="col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-climateBlue" placeholder="Email" />
        <button className="col-span-1 btn-primary flex items-center gap-2 justify-center"><Mail className="w-4 h-4"/> Send</button>
        <textarea className="md:col-span-3 rounded-md border border-gray-300 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-climateBlue" placeholder="Message" />
      </form>
    </div>
  </section>
)

const Footer = () => (
  <footer className="py-10 border-t border-gray-100 text-sm text-gray-500">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
      <span>© 2025 CoolShade. Safe, reversible urban cooling.</span>
      <a href="#home" className="hover:text-climateBlue">Back to top</a>
    </div>
  </footer>
)

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Pilot />
        <Impact />
        <Global />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


