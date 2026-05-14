import { Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'TimesAstro',
    description: 'Built a responsive TimesAstro landing page using React.js, HTML, and Vanilla CSS with optimized UI and mobile-friendly design.',
    image: 'https://static.toiimg.com/photo/127882335.jpg',
    tags: ['React.js', 'Vanilla CSS', 'JavaScript', 'Responsive Design', 'Figma'],
    liveUrl: 'https://mobileads.indiatimes.com/ET/may_mohit_test/Redesign_TimesAstro/',
  },
  {
    title: 'Ads RoadBlock DashBoard',
    description: 'Developed a responsive Ads RoadBlock Dashboard using HTML, jQuery, Bootstrap 4/5, and JavaScript with interactive UI components and optimized user experience across devices.',
    image: 'https://timesinternet.in/blog/wp-content/uploads/2019/04/2-75_1_Old-V-S-New_changes_reload.gif',
    tags: ['HTML', 'Jquery', 'BootStrap 4/5', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://mobileads.indiatimes.com/Templates_preview/design_showcase/index.html',
  },
  {
    title: 'Times Of India',
    description: 'Created interactive single-page frontend experiences and promotional landing pages for Times of India campaigns with responsive and optimized UI implementation.',
    image: 'https://androidappsindia.wordpress.com/wp-content/uploads/2012/06/toi.jpg',
    tags: ['React.js', 'JavaScript', 'TailwindCSS', 'Responsive Design'],
    liveUrl: 'https://timesofindia.indiatimes.com/classifieds/celebrations',
  },
  {
    title: 'Economics Times',
    description: 'Created interactive single-page frontend experiences and promotional landing pages for Economics Times campaigns with responsive and optimized UI implementation.',
    image: 'https://img.etimg.com/photo/msid-65498029/et-logo.jpg',
    tags: ['React.js', 'JavaScript', 'TailwindCSS', 'Responsive Design'],
    liveUrl: 'https://economictimes.indiatimes.com/et-spotlight/et-ai-awards-2026?utm_source=homepage&utm_medium=as10&utm_campaign=trigger',
  },
  {
    title: 'NavBharat Times',
    description: 'Created interactive single-page frontend experiences and promotional landing pages for NavBharat Times campaigns with responsive and optimized UI implementation.',
    image: 'https://media.licdn.com/dms/image/v2/C4D1BAQFJ9kf677dmoQ/company-background_10000/company-background_10000/0/1636704704982/navbharat_times__hindi_cover?e=2147483647&v=beta&t=ADEqRfejsvGpTtewquN8YHye2HlirH733OPxBSawZ60',
    tags: ['React.js', 'JavaScript', 'TailwindCSS', 'Responsive Design'],
    liveUrl: 'https://navbharattimes.indiatimes.com/',
  },
  {
    title: 'IndiaIstore',
    description: 'Developed multiple responsive pages from scratch for INDIAiSTORE using HTML, CSS, JavaScript, and modern frontend development practices, focusing on performance, responsive design, and seamless user experience across devices.',
    image: 'https://www.indiaistore.com/themes/frontend/custom/images/about_us/1366X551.jpg',
    tags: ['React.js', 'JavaScript', 'Bootstrap 4/5', 'Responsive Design'],
    liveUrl: 'https://www.indiaistore.com/',
  },
  {
    title: 'Maruti Suzuki Arena',
    description: 'Developed responsive pages for Maruti Suzuki Arena using Sitecore CMS and React components, along with building 650+ dealership admin portals with React.js for streamlined management and user experience.',
    image: 'https://etimg.etb2bimg.com/photo/77845583.cms',
    tags: ['React.js', 'JavaScript', 'Bootstrap 4/5', 'Responsive Design', 'Sitecore CMS'],
    liveUrl: 'https://www.marutisuzuki.com/arena',
  },
  {
    title: 'Sify',
    description: 'Developed responsive pages for Sify using Drupal CMS and React components, ensuring seamless user experience and efficient content management.',
    image: 'https://apacnewsnetwork.com/wp-content/uploads/2024/10/NEWS-THUMBNAILS-3685.png',
    tags: ['React.js', 'JavaScript', 'Bootstrap 4/5', 'Responsive Design', 'Drupal CMS'],
    liveUrl: 'https://www.sifytechnologies.com/',
  },
  {
    title: 'Conon',
    description: 'Developed desktop and responsive web pages for Canon using HTML, CSS, and JavaScript, ensuring a seamless and user-friendly experience across devices.',
    image: 'https://www.shutterstock.com/image-photo/canon-america-headquarters-campus-silicon-260nw-2656102725.jpg',
    tags: ['HTML', 'Vanilla CSS', 'JavaScript (ES6)',  'Bootstrap 4/5', 'Responsive Design'],
    liveUrl: 'https://in.canon/en/consumer',
  },
  {
    title: 'American Express',
    description: 'Developed 2000+ responsive emailers for American Express using HTML and CSS, ensuring cross-browser compatibility and optimized email rendering across devices and platforms.',
    image: 'https://www.shutterstock.com/image-photo/toronto-canada-september-10-2024-600nw-2515615033.jpg',
    tags: ['HTML', 'CSS', 'CheetahMail', 'Responsive Emailers'],
  },
  {
    title: 'Max Bupa',
    description: 'Developed responsive web pages for Max Bupa using HTML, CSS, and JavaScript, focusing on clean UI, performance, and seamless user experience across devices.',
    image: 'https://cdn.tracxn.com/images/seo/social/companies/max-bupa-overview-1752313878591.webp',
    tags: ['React.js', 'JavaScript', 'Bootstrap 4/5', 'Responsive Design', 'Drupal CMS'],
    liveUrl: 'https://www.nivabupa.com/',
  },
  {
    title: 'Design Microsites in Figma',
    description: 'Designed responsive microsites in Figma with modern UI layouts, user-focused design, and seamless user experience across desktop and mobile devices.',
    image: 'https://sm.pcmag.com/pcmag_me/review/f/figma/figma_dfec.png',
    tags: ['Figma', 'Prototyping', 'UI/UX Design', 'Wireframing', 'Responsive Design'],
    liveUrl: 'https://www.figma.com/design/PwIytZu3FwReEYbxq3WwMF/TIL_PregaTips?node-id=0-1&p=f',
  },
   {
    title: 'Design Microsites in Figma',
    description: 'Designed responsive microsites in Figma with modern UI layouts, user-focused design, and seamless user experience across desktop and mobile devices.',
    image: 'https://sm.pcmag.com/pcmag_me/review/f/figma/figma_dfec.png',
    tags: ['Figma', 'Prototyping', 'UI/UX Design', 'Wireframing', 'Responsive Design'],
    liveUrl: 'https://www.figma.com/design/JdbBAdAp8mQ4j5HLHvejcu/landing_page?node-id=0-1&p=f',
  },
   {
    title: 'Design Microsites in Figma',
    description: 'Designed responsive microsites in Figma with modern UI layouts, user-focused design, and seamless user experience across desktop and mobile devices.',
    image: 'https://sm.pcmag.com/pcmag_me/review/f/figma/figma_dfec.png',
    tags: ['Figma', 'Prototyping', 'UI/UX Design', 'Wireframing', 'Responsive Design'],
    liveUrl: 'https://www.figma.com/design/Th3BmCu5jnMBBCoagjurP4/Times_Astro_Redesign_Page?node-id=1-3',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building scalable and user-friendly applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <h3 className="mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgb(243, 244, 246)',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ExternalLink size={16} />}
                    sx={{ textTransform: 'none' }}
                  >
                    View Live
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
