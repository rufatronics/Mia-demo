import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  HeartPulse, 
  GraduationCap, 
  LayoutDashboard, 
  CalendarCheck,
  MessageCircle,
  ArrowRight,
  School
} from 'lucide-react';

// --- Sub-components ---

const DemoBadge = () => (
  <div className="fixed top-24 right-4 z-[60] rotate-12 pointer-events-none">
    <div className="bg-gold text-royal-blue text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 shadow-2xl skew-x-[-15deg] border border-royal-blue/20">
      Private Demo
    </div>
  </div>
);

const AnimatedBook = () => (
  <div className="book-container w-full max-w-[320px] aspect-[3/4] mx-auto">
    <motion.div 
      className="book w-full h-full"
      initial={{ rotateY: -20, rotateX: 10 }}
      animate={{ 
        rotateY: [-25, -15, -25],
        rotateX: [12, 8, 12],
        y: [0, -15, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {/* Spine/Side */}
      <div className="book-side bg-royal-blue border-r border-gold/30"></div>
      
      {/* Cover */}
      <div className="book-face w-full h-full bg-royal-blue rounded-r-lg border-2 border-gold/30 shadow-2xl overflow-hidden flex flex-col p-8 justify-between">
        <div className="space-y-4">
          <div className="w-12 h-1 border-t-2 border-gold"></div>
          <School size={40} className="text-gold" />
        </div>
        <div>
          <h4 className="text-2xl font-display font-bold text-deep-white italic mb-2 tracking-tight">The Path to Excellence</h4>
          <p className="text-[10px] text-gold tracking-widest uppercase font-bold">M.I.A Curriculum 2026</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20"></div>
          <div className="text-[10px] text-deep-white/30 uppercase tracking-widest">Est. Kano</div>
        </div>
      </div>
      
      {/* Pages indicator */}
      <div className="absolute right-0 top-[5%] bottom-[5%] w-1 bg-deep-white/20 rounded-l blur-[1px]"></div>
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-royal-blue/95 backdrop-blur-md border-b border-gold/20 text-deep-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <School className="text-royal-blue" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none uppercase">M.I.A</h1>
            <p className="text-[10px] text-gold tracking-[0.2em] font-medium leading-none mt-1">International School</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-deep-white/80">
          <a href="#" className="hover:text-gold transition-colors">About</a>
          <a href="#" className="hover:text-gold transition-colors">Academics</a>
          <a href="#" className="hover:text-gold transition-colors">Admissions</a>
          <a href="#" className="bg-gold text-royal-blue px-6 py-2 rounded-full hover:bg-gold/90 transition-all font-bold">Portal</a>
        </div>

        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-royal-blue border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-center text-lg font-medium">
              <a href="#" onClick={() => setIsOpen(false)}>About</a>
              <a href="#" onClick={() => setIsOpen(false)}>Academics</a>
              <a href="#" onClick={() => setIsOpen(false)}>Admissions</a>
              <a href="#" className="text-gold" onClick={() => setIsOpen(false)}>Student Portal</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mesh">
    {/* Refined Luxury Background Elements */}
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden pb-40">
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-gold opacity-[0.03] blur-[120px] rounded-full rotate-12"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[120%] bg-royal-blue opacity-[0.03] blur-[120px] rounded-full -rotate-12"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm glass-card">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          Excellence in Kano Since 2012
        </div>
        <h2 className="text-6xl md:text-8xl font-bold leading-[0.95] text-royal-blue mb-8 tracking-tighter text-shadow-gold">
          Nurturing <span className="italic text-gold block lg:inline">Character</span>, Building Minds.
        </h2>
        <p className="text-xl text-royal-blue/60 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
          A sanctuary for intellectual curiosity and moral fortitude. Experience an international education designed for the leaders of tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-royal-blue text-gold px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_-15px_rgba(0,35,102,0.3)] transition-all flex items-center justify-center gap-3"
          >
            Apply for 2026/27 <ArrowRight size={18} />
          </motion.button>
          <button className="w-full sm:w-auto text-royal-blue/40 px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:text-royal-blue transition-colors flex items-center gap-2 group">
            Virtual Campus Tour <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative lg:h-[600px] flex items-center"
      >
        <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full scale-150 animate-pulse"></div>
        <AnimatedBook />
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-royal-blue text-deep-white relative overflow-hidden z-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { label: "Graduates", value: "2,500+" },
          { label: "Qualified Faculty", value: "85+" },
          { label: "Global Awards", value: "12" },
          { label: "University Placement", value: "98%" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-5xl font-display font-bold text-gold mb-2">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-deep-white/40 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section className="py-32 bg-deep-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 -left-12 w-48 h-48 border-t-2 border-l-2 border-gold/20"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-royal-blue mb-8 leading-tight">
            The <span className="text-gradient-gold italic">Modern Artisan</span> of Education.
          </h2>
          <p className="text-xl text-royal-blue/60 leading-relaxed font-light mb-10 italic">
            "We believe that education is not just the filling of a pail, but the lighting of a fire."
          </p>
          <p className="text-royal-blue/80 font-medium leading-relaxed mb-10">
            At M.I.A, we don't just teach curricula; we forge character. Our state-of-the-art facilities in the heart of Kano provide an oasis for intellectual exploration and personal growth.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-gold/20 flex-shrink-0 mt-1 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
              </div>
              <p className="text-royal-blue/80 font-medium">Standardized labs with Silicon Valley-grade equipment.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-royal-blue rounded-3xl h-full shadow-2xl overflow-hidden relative group border border-gold/20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <BookOpen className="text-gold mb-2" size={24} />
              <h4 className="text-deep-white font-bold text-sm uppercase tracking-widest">Library Center</h4>
            </div>
          </motion.div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gold rounded-3xl h-full shadow-xl relative overflow-hidden p-6 flex flex-col justify-end group cursor-pointer"
            >
              <div className="bg-royal-blue/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-royal-blue group-hover:text-gold transition-colors">
                <GraduationCap className="text-royal-blue group-hover:text-gold font-bold" size={20} />
              </div>
              <h4 className="text-royal-blue font-black text-xs uppercase tracking-widest">Global Innovation</h4>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-royal-blue/5 border border-royal-blue/10 rounded-3xl h-full shadow-sm relative overflow-hidden p-6 flex flex-col justify-end group pointer-events-none"
            >
               <h4 className="text-royal-blue font-bold text-xs uppercase tracking-widest opacity-40">Science Hub</h4>
               <div className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest text-gold opacity-40">Phase 2</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CampusLife = () => (
  <section className="py-32 bg-mesh border-y border-royal-blue/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4"
        >
          Beyond the Classroom
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-royal-blue tracking-tighter">Experience <span className="italic">Excellence</span> Daily.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Olympic Sports", desc: "Professional coaching in football, swimming, and track.", icon: ShieldCheck },
          { title: "Visual Arts", desc: "A creative studio for digital and traditional medium expression.", icon: LayoutDashboard },
          { title: "Civic Leadership", desc: "Model UN and debating societies for emerging diplomats.", icon: Users },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group bg-deep-white/40 border border-royal-blue/5 p-10 rounded-[2.5rem] glass-card transition-all"
          >
            <div className="w-16 h-16 bg-royal-blue text-gold rounded-2xl flex items-center justify-center mb-8 rotate-3 transition-transform group-hover:rotate-0">
              <item.icon size={32} />
            </div>
            <h4 className="text-xl font-bold text-royal-blue mb-4">{item.title}</h4>
            <p className="text-royal-blue/60 leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DigitalHub = () => (
  <section className="py-20 bg-deep-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">MIA Digital Hub</h2>
        <p className="text-royal-blue/60 uppercase tracking-widest text-sm font-bold">Smart Access to Excellence</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-royal-blue p-8 md:p-12 rounded-[2rem] text-deep-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <LayoutDashboard className="text-gold" /> Student Portal
            </h3>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-deep-white/40 mb-2 block">Admission Number</label>
                <input type="text" placeholder="MIA/2026/XXXX" className="w-full bg-deep-white/10 border border-deep-white/20 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-deep-white/40 mb-2 block">Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-deep-white/10 border border-deep-white/20 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors" />
              </div>
              <button className="w-full bg-gold text-royal-blue font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors mt-4"> Login to Hub </button>
            </form>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <School size={200} />
          </div>
        </motion.div>

        <div className="grid grid-rows-2 gap-8">
          <motion.div 
            whileHover={{ x: 5 }}
            className="group bg-deep-white border border-royal-blue/10 p-8 rounded-[2rem] flex items-center justify-between hover:border-gold transition-colors cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <CalendarCheck className="text-royal-blue group-hover:text-gold" size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-royal-blue">Termly Results</h4>
                <p className="text-royal-blue/60 text-sm">Access cumulative performance metrics</p>
              </div>
            </div>
            <ArrowRight className="text-royal-blue/20 group-hover:text-gold transition-all group-hover:translate-x-2" />
          </motion.div>

          <motion.div 
            whileHover={{ x: 5 }}
            className="group bg-deep-white border border-royal-blue/10 p-8 rounded-[2rem] flex items-center justify-between hover:border-gold transition-colors cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <Users className="text-royal-blue group-hover:text-gold" size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-royal-blue">Attendance Trackers</h4>
                <p className="text-royal-blue/60 text-sm">Real-time presence monitoring for parents</p>
              </div>
            </div>
            <ArrowRight className="text-royal-blue/20 group-hover:text-gold transition-all group-hover:translate-x-2" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Principles = () => (
  <section className="py-24 bg-royal-blue relative overflow-hidden text-deep-white">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/[0.03] skew-x-[-20deg] origin-top translate-x-1/4"></div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block border-l-4 border-gold pl-6 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-2">Our Foundational Principles</h2>
            <p className="text-gold tracking-[0.3em] font-medium uppercase text-sm">Founded by Mallam Idris Abubakar</p>
          </div>
          <p className="text-lg text-deep-white/80 mb-12 max-w-xl leading-relaxed">
            Since inception, M.I.A has stood as a bastion of moral discipline. Mallam Idris Abubakar's vision combines rigorous academic inquiry with the deep-seated values of character and mental well-being.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <HeartPulse className="text-gold" />
              </div>
              <h4 className="font-bold text-lg">Mental Health First</h4>
              <p className="text-sm text-deep-white/60">Integrated psychological support and emotional intelligence training for every student.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-gold" />
              </div>
              <h4 className="font-bold text-lg">Moral Discipline</h4>
              <p className="text-sm text-deep-white/60">A culture rooted in integrity, respect, and the pursuit of ethical excellence.</p>
            </div>
          </div>
        </div>

        <div className="bg-deep-white/5 border border-deep-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem]">
          <h3 className="text-2xl font-bold mb-8 text-gold uppercase tracking-widest text-center">Legacy of Excellence</h3>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-3xl font-display italic text-gold font-bold">01</div>
              <div>
                <h5 className="font-bold mb-1">Character Building</h5>
                <p className="text-sm text-deep-white/60">Daily mentorship sessions focused on ethics and leadership.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl font-display italic text-gold font-bold">02</div>
              <div>
                <h5 className="font-bold mb-1">Digital Literacy</h5>
                <p className="text-sm text-deep-white/60">Equipping students with modern tools for a global landscape.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl font-display italic text-gold font-bold">03</div>
              <div>
                <h5 className="font-bold mb-1">Academic Rigor</h5>
                <p className="text-sm text-deep-white/60">Consistently top-ranking results in regional and national exams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LuxuryAd = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
    <div className="relative bg-royal-blue rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="relative z-10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6"
        >
          An Invitation to Greatness
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-deep-white mb-8 tracking-tighter leading-none">
          Secure Your Ward's <br /> <span className="italic text-gold">Future Legacy</span> Today.
        </h2>
        <p className="text-xl text-deep-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Limited slots available for the 2026/2027 academic session. Join the elite network of M.I.A families.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-gold text-royal-blue px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-gold-soft transition-all">
            Download Prospectus
          </button>
          <button className="border border-deep-white/20 text-deep-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-deep-white/5 transition-colors">
            Schedule a Private Visit
          </button>
        </div>
      </div>
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[60px]"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 blur-[60px]"></div>
    </div>
  </section>
);

const AdmissionsForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else handleWhatsAppRedirect();
  };

  const handleWhatsAppRedirect = () => {
    const message = `Assalamu Alaikum. I'm ${formData.parentName}, inquiring about admissions for my ward, ${formData.studentName}.`;
    const url = `https://wa.me/2340000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-deep-white font-sans">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">Admissions Pipeline</h2>
          <p className="text-royal-blue/60 uppercase tracking-widest text-xs font-bold">Start the Journey for 2026/2027</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-royal-blue/5">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative px-2">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-royal-blue/5 -translate-y-1/2 z-0"></div>
            <div className={`absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2 z-0 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
            
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-500 ${step >= s ? 'bg-royal-blue text-gold' : 'bg-royal-blue/5 text-royal-blue/40 border border-royal-blue/10'}`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-royal-blue mb-4">Parental Guardian Information</h3>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-royal-blue/40 mb-2 block">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      placeholder="e.g. Alhaji Musa Bello" 
                      className="w-full bg-royal-blue/5 border-b-2 border-royal-blue/10 focus:border-gold px-4 py-4 outline-none transition-colors text-lg"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-royal-blue mb-4">Student Details</h3>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-royal-blue/40 mb-2 block">Prospective Student's Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      placeholder="e.g. Fatima Musa" 
                      className="w-full bg-royal-blue/5 border-b-2 border-royal-blue/10 focus:border-gold px-4 py-4 outline-none transition-colors text-lg"
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-center"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                    <MessageCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">Ready to Finalize!</h3>
                  <p className="text-royal-blue/60 mb-8">Click below to connect with our admissions desk on WhatsApp. We have your information ready.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between gap-4">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-4 text-royal-blue/60 font-bold uppercase tracking-widest text-xs hover:text-royal-blue transition-colors"
                >
                  Back
                </button>
              )}
              <button 
                type="submit"
                className="flex-[2] bg-royal-blue text-gold font-bold py-4 rounded-full shadow-lg hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
              >
                {step === 3 ? 'Finalize on WhatsApp' : 'Continue'} <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-royal-blue bg-mesh relative">
      <div className="noise-overlay absolute inset-0 z-0"></div>
      <DemoBadge />
      <Navbar />
      <Hero />
      <Stats />
      <DigitalHub />
      <ExperienceSection />
      <CampusLife />
      <LuxuryAd />
      <Principles />
      <AdmissionsForm />
      
      <footer className="bg-deep-white border-t border-royal-blue/5 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-royal-blue">
          <div className="flex items-center justify-center gap-2 mb-6">
            <School className="text-gold" size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">M.I.A International School, Kano</span>
          </div>
          <p className="text-xs text-royal-blue/40 tracking-widest font-medium">© 2026 M.I.A International School. Nurturing Character, Building Excellence.</p>
        </div>
      </footer>
    </div>
  );
}

