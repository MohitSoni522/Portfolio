import { Card, CardContent } from '@mui/material';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Times Internet',
    position: 'Senior UI Developer',
    period: '2022 - 2026',
    description: 'Leading a team of 2 developers in building scalable React applications. Architected and implemented a micro-frontend solution that improved deployment speed by 60%.',
    achievements: [
      'Developed and maintained responsive UI components for high-traffic platforms including Times of India, Economic Times, Navbharat Times, Maharashtra Times, and MensXP',
      'Built responsive layouts with modular CSS and Bootstrap, ensuring consistent behavior across browsers and devices. Created custom HTML5 animated ads and interactive creatives using Google Web Designer',
      'Integrated REST APIs and optimized rendering performance for production applications.',
      'Optimized UI layouts based on performance metrics and A/B testing to improve engagement and conversions',
      'Ensured cross-browser and cross-device compatibility across live production environments',
      'Handled end-to-end UI delivery independently for multiple projects',
      'Created interactive HTML5 components and UI assets while maintaining strong frontend architecture standards.',
      'Owned end-to-end front-end delivery, collaborating with back-end, QA, and product teams.',
    ],
  },
  {
    company: 'Dentsu Aegis Network (Isobar)',
    position: 'Associate UI Developer',
    period: '2017 - 2022',
    description: 'Developed and maintained user interfaces for multiple client projects using React and modern CSS frameworks.',
    achievements: [
      'Worked on enterprise and consumer brand websites including Maruti Suzuki Arena, Canon India, American Express, Bira91, and Indiaistore',
      'Developed UI components using HTML, CSS, JavaScript, jQuery, and Bootstrap',
      'Hands-on experience with Sitecore CMS and ASP.NET MVC-based environments',
      'Collaborated with client servicing and backend teams to deliver pixel-perfect',
    ],
  },
  {
    company: 'Wipro',
    position: 'Intership Web Developer',
    period: '2016 - 2017',
    description: 'Started career building websites and web applications for various clients, learning modern web development practices.',
    achievements: [
      'Developed 15+ client websites using HTML, CSS, and JavaScript',
      'Learned React and modern frontend tooling',
      'Participated in code reviews and agile ceremonies',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Work Experience</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            8+ years of professional experience building modern web applications
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="hidden md:block absolute left-6 top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow" />

                <Card sx={{ ml: { xs: 0, md: 12 }, '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
                  <CardContent sx={{ p: 4 }}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-purple-600">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2 text-gray-700">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
