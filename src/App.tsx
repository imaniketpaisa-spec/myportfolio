import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ChevronRight,
  Monitor,
  Palette,
  Video,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Gamepad2,
  Tv,
  Zap,
  Circle,
  Flower2,
  Download
} from "lucide-react";

type Theme = 'minimalist' | 'neon' | 'retro' | 'pop' | 'pastel';

const themes: { id: Theme; icon: any; label: string; color: string }[] = [
  { id: 'minimalist', icon: Circle, label: 'Minimalist', color: 'bg-slate-100' },
  { id: 'neon', icon: Gamepad2, label: 'Neon Gaming', color: 'bg-purple-600' },
  { id: 'retro', icon: Tv, label: 'Retro/Vintage', color: 'bg-orange-200' },
  { id: 'pop', icon: Zap, label: 'Bold & Pop Art', color: 'bg-yellow-400' },
  { id: 'pastel', icon: Flower2, label: 'Pastel', color: 'bg-sky-100' },
];

const Navbar = ({ 
  onNavigate, 
  currentView, 
  currentTheme,
  setTheme
}: { 
  onNavigate: (view: string) => void, 
  currentView: string,
  currentTheme: Theme,
  setTheme: (theme: Theme) => void
}) => {
  const getNavStyles = () => {
    switch(currentTheme) {
      case 'neon': return 'bg-slate-950/90 border-purple-500/30 text-purple-400 font-gaming';
      case 'retro': return 'bg-[#f5f5f0]/90 border-orange-900/20 text-orange-900 font-serif';
      case 'pop': return 'bg-yellow-400 border-black text-black border-b-4';
      case 'pastel': return 'bg-white/90 border-sky-100 text-sky-900';
      default: return 'bg-white/80 border-slate-200 text-slate-600';
    }
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${getNavStyles()}`}>
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-8 text-sm font-medium">
          {currentView === 'main' ? (
            <>
              <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
              <a href="#skills" className="hover:opacity-70 transition-opacity">Skills</a>
              <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
            </>
          ) : (
            <button 
              onClick={() => onNavigate('main')}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-4 relative">
          <button 
            onClick={() => {
              const currentIndex = themes.findIndex(t => t.id === currentTheme);
              const nextIndex = (currentIndex + 1) % themes.length;
              setTheme(themes[nextIndex].id);
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all border-2 ${
              currentTheme === 'pop' ? 'border-black bg-white' : 'border-transparent hover:bg-white/10'
            }`}
            title="Cycle Theme"
          >
            <Palette size={18} />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Themes</span>
          </button>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ theme }: { theme: Theme }) => {
  const getHeroStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-950 text-purple-400 font-gaming';
      case 'retro': return 'bg-[#f5f5f0] text-orange-900 font-serif';
      case 'pop': return 'bg-white text-black border-b-8 border-black';
      case 'pastel': return 'bg-sky-50 text-sky-900';
      case 'minimalist': return 'bg-white text-slate-900 py-40';
      default: return 'bg-white text-slate-900';
    }
  };

  return (
    <section className={`relative overflow-hidden px-8 text-center transition-all duration-500 ${getHeroStyles()} ${theme !== 'minimalist' ? 'pt-20 pb-32' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={`text-xs uppercase tracking-[0.3em] mb-4 font-semibold opacity-60`}>Graphic Designer & Video Editor</p>
        <h1 className={`text-[42px] md:text-[110px] font-bold mb-8 leading-tight ${
          theme === 'neon' ? 'text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] font-gaming tracking-tighter' : ''
        } ${theme === 'pop' ? 'uppercase italic' : ''}`}>
          Portfolio
        </h1>
        <motion.a
          href="#work"
          whileHover={{ scale: 1.05, rotate: theme === 'pop' ? -2 : 0 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all ${
            theme === 'neon' ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]' :
            theme === 'retro' ? 'bg-orange-900 text-orange-100' :
            theme === 'pop' ? 'bg-yellow-400 text-black border-4 border-black rounded-none font-black uppercase' :
            theme === 'pastel' ? 'bg-sky-400 text-white shadow-lg shadow-sky-200' :
            'bg-slate-900 text-white'
          }`}
        >
          View Work <ChevronRight size={16} />
        </motion.a>
      </motion.div>
      
      {/* Decorative elements */}
      {theme === 'neon' && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" 
          />
          <div className="absolute top-1/4 left-10 text-purple-500/20 text-4xl font-black select-none">+</div>
          <div className="absolute bottom-1/4 right-10 text-blue-500/20 text-4xl font-black select-none">+</div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          <motion.div 
            animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-1/2 w-40 h-[1px] bg-purple-400/30 blur-sm"
          />
        </>
      )}
      {theme === 'pop' && (
        <>
          <motion.div 
            animate={{ rotate: [12, 20, 12], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 w-24 h-24 bg-cyan-400 border-4 border-black -z-10" 
          />
          <motion.div 
            animate={{ rotate: [-12, -20, -12], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-32 h-32 bg-magenta-400 border-4 border-black -z-10 bg-pink-500" 
          />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-400 border-2 border-black rounded-full -z-10" />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-black -z-10 rotate-45" />
          <div className="absolute bottom-1/4 right-1/3 w-16 h-4 bg-black -z-10 -rotate-12" />
          <div className="absolute top-1/4 left-1/3 w-4 h-16 bg-yellow-400 border-2 border-black -z-10 rotate-12" />
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-20 left-20 w-12 h-12 border-t-8 border-l-8 border-black -z-10"
          />
        </>
      )}
      {theme === 'retro' && (
        <>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          <div className="absolute top-10 left-10 w-40 h-40 border border-orange-900/10 rounded-full -z-10" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-orange-900/10 rounded-full -z-10" />
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-orange-900/20 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-900/5" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-900/5" />
          <div className="absolute top-1/4 left-1/4 w-20 h-[1px] bg-orange-900/10" />
          <div className="absolute bottom-1/4 right-1/4 w-20 h-[1px] bg-orange-900/10" />
          <div className="absolute top-1/2 left-10 w-1 h-20 bg-orange-900/5" />
        </>
      )}
      {theme === 'pastel' && (
        <>
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-sky-200/40 rounded-full blur-2xl -z-10" 
          />
          <motion.div 
            animate={{ y: [0, 40, 0], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-10 right-[15%] w-48 h-48 bg-sky-200/30 rounded-full blur-3xl -z-10" 
          />
          <div className="absolute top-1/2 right-[10%] w-16 h-16 bg-sky-100/50 rounded-full blur-xl -z-10" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 right-1/3 w-4 h-4 bg-sky-300 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-sky-300 rounded-full"
          />
          <div className="absolute top-10 left-1/2 w-[1px] h-20 bg-gradient-to-b from-sky-200 to-transparent" />
        </>
      )}
      {theme === 'minimalist' && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-slate-100 -rotate-12 -z-10" />
          <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-slate-100" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-slate-100" />
          <div className="absolute top-1/2 left-10 w-10 h-[1px] bg-slate-200" />
          <div className="absolute top-1/2 right-10 w-10 h-[1px] bg-slate-200" />
          <div className="absolute top-20 left-1/2 w-[1px] h-10 bg-slate-200" />
          <div className="absolute bottom-20 left-1/2 w-[1px] h-10 bg-slate-200" />
        </>
      )}
    </section>
  );
};

const About = ({ theme }: { theme: Theme }) => {
  const getAboutStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-900 text-slate-400 border-y border-purple-500/10 font-gaming';
      case 'retro': return 'bg-[#ebebe6] text-slate-700 font-serif';
      case 'pop': return 'bg-cyan-400 text-black border-b-8 border-black';
      case 'pastel': return 'bg-white text-slate-600';
      case 'minimalist': return 'bg-white text-slate-600 py-32';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <section id="about" className={`px-8 transition-all duration-500 relative overflow-hidden ${getAboutStyles()} ${theme !== 'minimalist' ? 'py-16' : ''}`}>
      {/* Decorative elements for About */}
      {theme === 'neon' && (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none" />
      )}
      {theme === 'pop' && (
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]" />
      )}
      {theme === 'pastel' && (
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10"
        />
      )}
      
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto relative z-10">
        <div className="flex-1">
          <h2 className={`text-3xl font-bold mb-6 ${
            theme === 'neon' ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]' : ''
          } ${theme === 'pop' ? 'uppercase italic bg-white inline-block px-4 border-4 border-black' : ''}`}>About Alex</h2>
          <p className="text-sm leading-relaxed mb-6">
            I'm a Fresher Graphic Designer & Video Editor with hands-on experience in Adobe Creative Suite. From logos and posters to social media designs and video editing, I focus on creating clear, engaging, and creative visuals.
          </p>
          <p className="text-sm leading-relaxed mb-8">
            I'm seeking an internship or entry-level opportunity to gain industry experience, improve my skills, and contribute to a creative team with passion and dedication.
          </p>
          <div className={`flex flex-col gap-2 text-sm opacity-70`}>
            <p><strong>Education:</strong> 12th pass CBSE</p>
            <p><strong>College:</strong> Indira Gandhi National Open University (BBA | 2027)</p>
          </div>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all ${
              theme === 'neon' ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' :
              theme === 'retro' ? 'bg-orange-900 text-orange-100' :
              theme === 'pop' ? 'bg-yellow-400 text-black border-4 border-black rounded-none uppercase italic' :
              theme === 'pastel' ? 'bg-sky-400 text-white shadow-lg shadow-sky-100' :
              'bg-slate-900 text-white'
            }`}
          >
            <Download size={18} /> Download Resume
          </motion.a>
        </div>
        <div className="w-full md:w-1/3 aspect-square relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-full overflow-visible"
          >
            <div className="w-full h-full overflow-visible flex items-end justify-center">
              <img 
                src="https://img.sanishtech.com/u/7b06bc022595bdfe8384328d264a5011.jpeg" 
                alt="Profile" 
                className={`w-full h-[120%] object-cover object-bottom transition-all duration-500 ${theme === 'retro' ? 'sepia-[0.3]' : 'grayscale hover:grayscale-0'}`}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          {/* Floating badge */}
          <div className={`absolute -bottom-4 -right-4 p-4 shadow-xl border transition-all duration-500 ${
            theme === 'neon' ? 'bg-slate-950 border border-purple-500/30 rounded-xl' :
            theme === 'pop' ? 'bg-yellow-400 border-black border-4 rounded-none' :
            theme === 'pastel' ? 'bg-sky-100 border-sky-200 rounded-3xl' :
            'bg-white border-slate-200 rounded-2xl'
          }`}>
            <p className={`text-xs font-bold ${
              theme === 'neon' ? 'text-purple-400' : 
              theme === 'pastel' ? 'text-sky-600' :
              'text-slate-900'
            }`}>ALEX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon: Icon, image, label, color, theme }: { icon?: any, image?: string, label: string, color: string, theme: Theme, key?: any }) => (
  <motion.div 
    whileHover={{ y: -12, scale: 1.08, rotate: theme === 'pop' ? [0, -2, 2, 0] : 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className={`p-6 border flex flex-col items-center gap-4 text-center group transition-all duration-500 relative overflow-hidden ${
      theme === 'neon' ? 'glass-effect border-purple-500/30 rounded-2xl' :
      theme === 'retro' ? 'bg-[#f5f5f0]/60 border-orange-900/10 rounded-3xl' :
      theme === 'pop' ? 'bg-white border-black border-4 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' :
      theme === 'pastel' ? 'bg-white border-sky-100 rounded-[40px] shadow-sm' :
      'glass-effect border-slate-200 rounded-[32px]'
    }`}
  >
    <div className={`w-16 h-16 flex items-center justify-center text-white ${color} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 z-10 overflow-hidden ${
      theme === 'pop' ? 'rounded-none border-2 border-black' : 
      'rounded-2xl'
    }`}>
      {image ? (
        <img src={image} alt={label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      ) : (
        <Icon size={32} />
      )}
    </div>
    <p className={`text-sm font-black tracking-tight z-10 ${
      theme === 'neon' ? 'text-purple-400' : 
      theme === 'pop' ? 'uppercase italic' : 
      theme === 'pastel' ? 'text-sky-900' :
      'text-slate-900'
    }`}>{label}</p>
    
    {theme !== 'pop' && (
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-50" />
    )}
  </motion.div>
);

const Skills = ({ theme }: { theme: Theme }) => {
  const skills = [
    { image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", label: "Adobe Illustrator", color: "bg-[#FF9A00]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", label: "Adobe Photoshop", color: "bg-[#001E36]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg", label: "Adobe InDesign", color: "bg-[#49021F]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", label: "Adobe Premiere Pro", color: "bg-[#00005B]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", label: "After Effects", color: "bg-[#00005B]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/CorelDRAW_Logo.svg", label: "CorelDraw", color: "bg-[#00A144]" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Adobe_Corporate_Logo.svg", label: "Adobe Creative Cloud", color: "bg-[#ED1C24]" },
  ];

  const getSkillsStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-950 font-gaming';
      case 'retro': return 'bg-[#f5f5f0]';
      case 'pop': return 'bg-sky-400 border-b-8 border-black pop-pattern';
      case 'pastel': return 'bg-sky-50';
      case 'minimalist': return 'bg-white py-32';
      default: return 'bg-slate-50';
    }
  };

  return (
    <section id="skills" className={`px-8 transition-all duration-500 relative overflow-hidden ${getSkillsStyles()} ${theme !== 'minimalist' ? 'py-16' : ''}`}>
      {/* Decorative elements for Skills */}
      {theme === 'neon' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </>
      )}
      {theme === 'pop' && (
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 border-4 border-black rotate-12 -z-0 opacity-50" />
      )}
      {theme === 'pastel' && (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_50%)]" />
      )}

      <h2 className={`text-3xl font-black mb-10 text-center relative z-10 ${
        theme === 'neon' ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 
        theme === 'pop' ? 'uppercase italic bg-white inline-block px-4 border-4 border-black mx-auto block w-fit' : 
        'text-slate-900'
      }`}>Software Knowledge</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto relative z-10">
        {skills.map((skill, i) => (
          <SkillCard 
            key={i} 
            image={skill.image} 
            label={skill.label} 
            color={skill.color} 
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, category, image, theme }: { title: string, category: string, image: string, theme: Theme }) => (
  <motion.div 
    whileHover={{ scale: 0.98, rotate: theme === 'pop' ? 2 : 0 }}
    className={`min-w-[280px] md:min-w-[320px] h-[400px] overflow-hidden relative group cursor-pointer transition-all duration-500 ${
      theme === 'pop' ? 'rounded-none border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]' : 
      theme === 'pastel' ? 'rounded-[60px] border-4 border-white' :
      'rounded-[30px] border border-white/10'
    }`}
  >
    <img 
      src={image} 
      alt={title} 
      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${theme === 'retro' ? 'sepia-[0.2]' : ''}`}
      referrerPolicy="no-referrer"
    />
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 ${
      theme === 'pop' ? 'bg-yellow-400/95' : 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
    }`}>
      <p className={`text-xs uppercase tracking-[0.2em] mb-2 font-bold ${theme === 'pop' ? 'text-black' : 'text-white/70'}`}>{category}</p>
      <h3 className={`text-2xl font-black ${theme === 'pop' ? 'text-black uppercase italic leading-none' : 'text-white'}`}>{title}</h3>
      
      {theme === 'pop' && (
        <div className="mt-4 w-12 h-1 bg-black" />
      )}
    </div>
  </motion.div>
);

const Work = ({ theme }: { theme: Theme }) => {
  const projects = [
    { title: "Nike Concept", category: "Graphic Design", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" },
    { title: "Aura Tune", category: "Branding", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop" },
    { title: "Lexraa Jewels", category: "Social Media", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop" },
    { title: "Momo Delight", category: "Poster Design", image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=1000&auto=format&fit=crop" },
  ];

  const getWorkStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-900 text-purple-400 font-gaming';
      case 'retro': return 'bg-[#ebebe6] text-orange-900';
      case 'pop': return 'bg-white text-black border-b-8 border-black';
      case 'pastel': return 'bg-white text-sky-900';
      case 'minimalist': return 'bg-white text-slate-900 py-32';
      default: return 'bg-slate-50 text-slate-900';
    }
  };

  return (
    <section id="work" className={`px-8 transition-all duration-500 relative overflow-hidden ${getWorkStyles()} ${theme !== 'minimalist' ? 'py-16' : ''}`}>
      {/* Decorative elements for Work */}
      {theme === 'neon' && (
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
      )}
      {theme === 'pop' && (
        <div className="absolute top-1/2 right-0 w-32 h-32 border-8 border-black rounded-full opacity-10 -mr-16" />
      )}
      {theme === 'pastel' && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/20 rounded-full blur-3xl -z-10" />
      )}

      <div className="flex justify-between items-end mb-10 max-w-4xl mx-auto relative z-10">
        <h2 className={`text-3xl font-bold ${
          theme === 'neon' ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]' : ''
        } ${theme === 'pop' ? 'uppercase italic bg-yellow-400 px-4 border-4 border-black' : ''}`}>My Work</h2>
        <p className={`text-xs uppercase tracking-widest font-bold opacity-40`}>Graphic Designs</p>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="snap-center">
            <ProjectCard {...project} theme={theme} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = ({ theme }: { theme: Theme }) => {
  const getContactStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-950 text-purple-400 font-gaming';
      case 'retro': return 'bg-[#f5f5f0] text-orange-900';
      case 'pop': return 'bg-yellow-400 text-black';
      case 'pastel': return 'bg-sky-50 text-sky-900';
      case 'minimalist': return 'bg-white text-slate-900 py-40';
      default: return 'bg-white text-slate-900';
    }
  };

  return (
    <section id="contact" className={`px-8 text-center transition-all duration-500 ${getContactStyles()} ${theme !== 'minimalist' ? 'py-20' : ''}`}>
      <h2 className={`text-4xl font-bold mb-6 ${
        theme === 'neon' ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]' : ''
      } ${theme === 'pop' ? 'uppercase italic' : ''}`}>Let's Work Together</h2>
      <p className={`text-lg mb-10 max-w-md mx-auto opacity-70`}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <a 
          href="mailto:alexopofficial07@gmail.com" 
          className={`text-2xl font-bold transition-all border-b-2 pb-1 ${
            theme === 'neon' ? 'text-purple-400 border-purple-500/30' :
            theme === 'pop' ? 'text-black border-black font-black uppercase italic' :
            'text-slate-900 border-slate-200'
          }`}
        >
          alexopofficial07@gmail.com
        </a>
        
        <div className="flex gap-6">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/lx_novax?igsh=OHAwYXJrYThibm16" }
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, rotate: theme === 'pop' ? (i % 2 === 0 ? 15 : -15) : 0, scale: 1.1 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all border-2 ${
                theme === 'neon' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]' :
                theme === 'pop' ? 'bg-white text-black border-black border-4 rounded-none shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]' :
                theme === 'pastel' ? 'bg-white text-sky-400 border-sky-100' :
                'bg-white/80 backdrop-blur-md text-slate-900 border-slate-200'
              }`}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
      
      <p className={`mt-20 text-xs font-medium uppercase tracking-widest opacity-30`}>
        © 2026 Portfolio • Built with Passion
      </p>
    </section>
  );
};

const ToolKnowledgePage = ({ theme }: { theme: Theme }) => {
  const toolDetails = [
    {
      name: "Adobe Illustrator",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      color: "bg-[#FF9A00]",
      description: "Primary tool for vector graphics and branding. Expert in creating scalable logos, icons, and complex illustrations.",
      skills: ["Logo Design", "Typography", "Vector Illustration", "Iconography"]
    },
    {
      name: "Adobe Photoshop",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      color: "bg-[#001E36]",
      description: "Advanced image manipulation and digital art. Skilled in photo retouching, color grading, and social media creative design.",
      skills: ["Photo Editing", "Digital Manipulation", "Color Correction", "UI Assets"]
    },
    {
      name: "Adobe InDesign",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
      color: "bg-[#49021F]",
      description: "Specialized in multi-page layouts and print production. Experienced in creating brochures, magazines, and professional reports.",
      skills: ["Layout Design", "Print Ready Files", "Typography", "Editorial Design"]
    },
    {
      name: "Adobe Premiere Pro",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      color: "bg-[#00005B]",
      description: "Professional video editing for various platforms. Proficient in cutting, pacing, and audio-visual synchronization.",
      skills: ["Video Editing", "Color Grading", "Audio Sync", "Transition Effects"]
    },
    {
      name: "After Effects",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
      color: "bg-[#00005B]",
      description: "Motion graphics and visual effects specialist. Capable of creating dynamic title sequences and animated social media content.",
      skills: ["Motion Graphics", "VFX", "Animation", "Compositing"]
    },
    {
      name: "CorelDraw",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/CorelDRAW_Logo.svg",
      color: "bg-[#00A144]",
      description: "Alternative vector design tool for print and signage. Skilled in creating precise technical drawings and print layouts.",
      skills: ["Vector Design", "Print Layouts", "Technical Illustration", "Signage Design"]
    },
    {
      name: "Adobe Creative Cloud",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Adobe_Corporate_Logo.svg",
      color: "bg-[#ED1C24]",
      description: "Comprehensive suite of creative tools. Proficient in managing assets and workflows across the entire Adobe ecosystem.",
      skills: ["Asset Management", "Cloud Libraries", "Cross-App Workflow", "Adobe Stock"]
    }
  ];

  const getPageStyles = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-950 text-purple-400 font-gaming';
      case 'retro': return 'bg-[#f5f5f0] text-orange-900';
      case 'pop': return 'bg-cyan-400 text-black';
      case 'pastel': return 'bg-sky-50 text-sky-900';
      case 'minimalist': return 'bg-white text-slate-900';
      default: return 'bg-slate-50 text-slate-900';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`p-8 transition-all duration-500 min-h-screen ${getPageStyles()}`}
    >
      <header className="mb-12 text-center">
        <h1 className={`text-5xl font-bold mb-4 ${theme === 'pop' ? 'uppercase italic bg-white inline-block px-6 border-4 border-black' : ''}`}>Tool Expertise</h1>
        <p className={`max-w-2xl mx-auto opacity-70`}>
          A deep dive into my technical proficiency and how I leverage industry-standard software to bring creative visions to life.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {toolDetails.map((tool, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 border shadow-sm transition-all duration-500 ${
              theme === 'neon' ? 'bg-slate-900 border-purple-500/20 rounded-2xl' :
              theme === 'retro' ? 'bg-white/80 border-orange-900/10 rounded-3xl' :
              theme === 'pop' ? 'bg-white border-black border-4 rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]' :
              theme === 'pastel' ? 'bg-white border-sky-100 rounded-[40px]' :
              'bg-white border-slate-200 rounded-[30px]'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 flex items-center justify-center text-white ${tool.color} overflow-hidden ${
                theme === 'pop' ? 'rounded-none border-2 border-black' : 'rounded-xl'
              }`}>
                <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'pop' ? 'uppercase italic' : ''}`}>{tool.name}</h3>
            </div>
            <p className={`mb-6 leading-relaxed opacity-80`}>
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tool.skills.map((skill, si) => (
                <span key={si} className={`flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full transition-all duration-500 ${
                  theme === 'neon' ? 'bg-purple-500/20 text-purple-400' :
                  theme === 'pop' ? 'bg-yellow-400 text-black border-2 border-black rounded-none' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  <CheckCircle2 size={12} />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [view, setView] = useState('main');
  const [theme, setTheme] = useState<Theme>('minimalist');

  const getAppBg = () => {
    switch(theme) {
      case 'neon': return 'bg-slate-950 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]';
      case 'retro': return 'bg-[#ebebe6]';
      case 'pop': return 'bg-white pop-pattern opacity-20';
      case 'pastel': return 'bg-sky-50';
      default: return 'bg-slate-50';
    }
  };

  return (
    <div className={`min-h-screen py-10 px-4 md:px-0 flex justify-center items-start transition-all duration-500 relative overflow-hidden ${theme === 'pop' ? 'bg-white' : getAppBg()}`}>
      {/* Global background texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {theme === 'neon' && (
        <div className="fixed inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />
      )}
      
      {theme === 'pop' && <div className="absolute inset-0 pop-pattern opacity-10 pointer-events-none" />}
      
      {theme === 'pastel' && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 0.6,
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`w-full max-w-4xl overflow-hidden relative transition-all duration-500 ${
          theme === 'neon' ? 'bg-slate-950 border border-purple-500/30 rounded-[40px] shadow-[0_0_50px_rgba(168,85,247,0.2)]' :
          theme === 'retro' ? 'bg-[#f5f5f0] border border-orange-900/10 rounded-[20px]' :
          theme === 'pop' ? 'bg-white border-8 border-black rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]' :
          theme === 'pastel' ? 'bg-white border-8 border-white rounded-[80px] shadow-2xl' :
          'bg-white rounded-[30px] card-shadow'
        }`}
      >
        <Navbar onNavigate={setView} currentView={view} currentTheme={theme} setTheme={setTheme} />
        <main>
          <AnimatePresence mode="wait">
            {view === 'main' ? (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero theme={theme} />
                <About theme={theme} />
                <Skills theme={theme} />
                <Work theme={theme} />
                <Contact theme={theme} />
              </motion.div>
            ) : (
              <ToolKnowledgePage theme={theme} />
            )}
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
}