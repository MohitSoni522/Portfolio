import { Button } from '@mui/material';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'motion/react';
import resume from '../assets/MohitResume.pdf';

export default function Hero(props) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6">
      <div className="max-w-4xl w-full pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">
            <span className="block text-purple-400 mb-2">Hi, I'm</span>
            <span className="block">Mohit Kumar Soni</span>
          </h1>
          <h2 className="mb-6 text-purple-300">
            Senior UI & React Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            UI / Frontend Developer with 8+ years of total experience, including 3+ years of hands-on experience in React.js
            I specialize in building performant, accessible, and delightful web experiences that solve real business problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant="contained"
              size="large"
              startIcon={<Mail size={20} />}
              href="mailto:mohitsoni522@gmail.com"
              sx={{
                bgcolor: 'rgb(168, 85, 247)',
                '&:hover': { bgcolor: 'rgb(147, 51, 234)' },
                textTransform: 'none',
                px: 3,
                py: 1.5,
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download size={20} />}
              href={resume}
              target='blank'
              download
              sx={{
                borderColor: 'rgb(168, 85, 247)',
                color: 'white',
                '&:hover': {
                  borderColor: 'rgb(147, 51, 234)',
                  bgcolor: 'rgba(168, 85, 247, 0.1)'
                },
                textTransform: 'none',
                px: 3,
                py: 1.5,
              }}
            >
              Download Resume
            </Button>
          </div>
          <div className="bg-white/10 border border-purple-400/30 rounded-xl p-4 mb-12 max-w-2xl">
  <p className="text-purple-300 font-semibold text-lg mb-2">
    🏆 Achievements
  </p>

  <p className="text-gray-300 leading-relaxed">
    Honored with consecutive <span className="text-white font-bold">“Super Star Awards”</span> in 
    <span className="text-white font-semibold"> 2024 & 2025 </span>
    for outstanding performance and contribution.
    Also received the international 
    <span className="text-white font-bold"> “iSOBAR of the Month” </span>
    recognition in 
    <span className="text-white font-semibold"> Kuala Lumpur (2020) </span>
    along with the team.
  </p>
</div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mohit-kumar-soni-026402160"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohitsoni522@gmail.com"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
