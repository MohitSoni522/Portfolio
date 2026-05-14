import { Card, CardContent, Chip } from '@mui/material';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React.js', 'JavaScript (ES6)', 'Bootstrap 4/5', 'REST APIs', 'TailWind CSS', 'TypeScript', 'HTML5',  'CSS3', 'SCSS'],
    color: 'rgb(168, 85, 247)',
  },
  {
    icon: Palette,
    title: 'UI/UX & Styling',
    skills: ['Figma AI', 'Photoshop', 'Illustrator', 'Adobe After Effects', 'Animate', 'Motion Graphics', 'Spark-AR', 'Google Web Designer'],
    color: 'rgb(59, 130, 246)',
  },
  {
    icon: Rocket,
    title: 'Tools & Technologies',
    skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook'],
    color: 'rgb(16, 185, 129)',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Team Leadership', 'Mentoring', 'Code Review', 'Agile/Scrum', 'Technical Writing', 'UI Architecture'],
    color: 'rgb(245, 158, 11)',
  },
  {
    icon: Rocket,
    title: 'Content Management System',
    skills: ['AEM', 'Sitecore', 'Drupal', 'WordPress', 'Shopify'],
    color: 'rgb(16, 185, 129)',
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built over 8+ years of hands-on experience in modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
                  <CardContent sx={{ p: 3 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon size={24} style={{ color: category.color }} />
                      </div>
                      <h3 className="text-gray-900">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="medium"
                          sx={{
                            bgcolor: 'rgb(243, 244, 246)',
                            '&:hover': { bgcolor: 'rgb(229, 231, 235)' },
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
