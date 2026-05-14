import { Card, CardContent, Button, TextField } from '@mui/material';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, and exciting opportunities to collaborate and build impactful digital experiences.
          </p>
        </motion.div>

       <div className="max-w-3xl mx-auto">
  <Card
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <h3 className="mb-8 text-white text-center text-2xl">
        Contact Information
      </h3>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500/20 rounded-lg">
            <Mail size={24} className="text-purple-400" />
          </div>

          <div>
            <p className="text-gray-400 mb-1">Email</p>

            <a
              href="mailto:mohitsoni522@gmail.com"
              className="text-white hover:text-purple-400 transition-colors"
            >
              mohitsoni522@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500/20 rounded-lg">
            <Phone size={24} className="text-purple-400" />
          </div>

          <div>
            <p className="text-gray-400 mb-1">Phone</p>

            <a
              href="tel:+917017005491"
              className="text-white hover:text-purple-400 transition-colors"
            >
              +91 7017005491
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500/20 rounded-lg">
            <Linkedin size={24} className="text-purple-400" />
          </div>

          <div>
            <p className="text-gray-400 mb-1">LinkedIn</p>

            <a
              href="https://linkedin.com/in/mohit-kumar-soni-026402160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors break-all"
            >
              linkedin.com/in/mohit-kumar-soni-026402160
            </a>
          </div>
        </div>

      </div>
    </CardContent>
  </Card>
</div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>© 2026 Mohit Kumar Soni. Built with React, TypeScript, and Material-UI.</p>
        </motion.div>
      </div>
    </section>
  );
}
