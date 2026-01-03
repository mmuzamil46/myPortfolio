import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hi-Tech Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border-2 border-blue-500 rounded-full border-dashed opacity-20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[700px] h-[700px] border-2 border-cyan-500 rounded-full border-dotted opacity-20"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[900px] h-[900px] border border-slate-500 rounded-full opacity-20"
        />
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Muhammed Muzamil
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer specialized in building exceptional digital experiences.
            Proficient in <span className="text-white">React, Node.js, and Modern Web Tech</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
             <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/25">
              Hire Me
            </a>
            <a href="#work" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700">
              View Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-400">
            <a href="https://github.com/mmuzamil46" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <Github size={28} />
            </a>
            <a href="#" className="hover:text-blue-400 hover:scale-110 transition-all">
              <Linkedin size={28} />
            </a>
             <a href="mailto:ptype33@gmail.com" className="hover:text-red-400 hover:scale-110 transition-all">
              <Mail size={28} />
            </a>
             <a href="#" className="hover:text-sky-400 hover:scale-110 transition-all">
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
