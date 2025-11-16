import { Project, Experience, DesignWork, Testimonial, Achievement } from '../types';
import aecaWebsiteImg from '../asset/aeca-website.png';
import sportzoneImg from '../asset/sportzone.png';
import anafaePayrollImg from '../asset/anafae-payroll-mis.png';
import anafaeTaskImg from '../asset/anafae-taskmanagement.png';
import afghanWriterImg from '../asset/afghan-writer.png';
import gulabTahirImg from '../asset/gulab-tahir.png';
import rezayanImg from '../asset/Rezayan.PNG';
import sanaiukImg from '../asset/sanaiuk.JPG';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AECA Website + Dashboard',
    description: 'Website and admin dashboard for Aotearoa Ethnic Communities Alliance supporting cultural and ethnic diversity initiatives',
    url: 'https://aeca.org.nz',
    image: aecaWebsiteImg,
    tags: ['React', 'Node.js', 'Dashboard', 'Cultural']
  },
  {
    id: '2',
    title: 'VERI-Mi Mobile App (Backend & API)',
    description: 'Backend and API development for migration rights system supporting lawyers and migration processes',
    url: 'https://verimi.org.nz',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Node.js', 'REST APIs', 'Migration', 'Security']
  },
  {
    id: '3',
    title: 'Sport Zone Football MIS',
    description: 'Sports management platform for football organizations and events with ongoing maintenance and support',
    url: 'https://sportzone.org.nz',
    image: sportzoneImg,
    tags: ['Laravel', 'MySQL', 'Sports Management', 'Maintenance']
  },
  {
    id: '4',
    title: 'ANAFAE MIS & Payroll System',
    description: 'Comprehensive HR & Payroll Management Information System for 15 educational centers, reducing payroll errors',
    url: 'https://mis.anafae.info',
    image: anafaePayrollImg,
    tags: ['Laravel', 'MySQL', 'HRMIS', 'Payroll']
  },
  {
    id: '5',
    title: 'ANAFAE Task MIS',
    description: 'Task management system that streamlined project tracking and collaboration across departments',
    url: 'https://dashboard.anafae.info',
    image: anafaeTaskImg,
    tags: ['Laravel', 'MySQL', 'Task Management', 'Collaboration']
  },
  {
    id: '6',
    title: 'Afghan Writer MIS',
    description: 'Management Information System for Afghan Writer Translation and Linguistic Center for efficient project tracking',
    url: 'https://afghanwriter.co.uk',
    image: afghanWriterImg,
    tags: ['PHP', 'MySQL', 'Translation', 'Project Management']
  },
  {
    id: '7',
    title: 'Gulab Tahir Group of Companies',
    description: 'Corporate website and dashboard for Gulab Tahir Group supporting business management and online presence',
    url: 'https://gulabtahirgroup.com',
    image: gulabTahirImg,
    tags: ['Laravel', 'MySQL', 'Corporate', 'Business Management']
  },
  {
    id: '8',
    title: 'Rezayan Watan Group MIS',
    description: 'Stock and Sales Management Information System for inventory tracking and sales reporting',
    url: '#',
    image: rezayanImg,
    tags: ['C#', 'SQL Server', 'Inventory', 'Sales']
  },
  {
    id: '9',
    title: 'ANZPF Enterprise MIS',
    description: 'Full-scale enterprise MIS integrating HR, finance, and operations into a centralized platform',
    url: '#',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Laravel', 'MySQL', 'Enterprise', 'HR Finance']
  },
  {
    id: '10',
    title: 'Sanai UK Dry Fruit Wholesaler Website',
    description: 'Website for global dry fruit wholesaler with modern design and functionality',
    url: '#',
    image: sanaiukImg,
    tags: ['Laravel', 'Bootstrap', 'MySQL', 'Ajax', 'jQuery', 'Website']
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'ANAFAE / BMZ International',
    location: 'Kabul, Afghanistan',
    role: 'Full Stack MIS & Software Developer',
    period: 'Jan 2022 – Present',
    highlights: [
      'Designed and implemented comprehensive HR & Payroll MIS for 15 educational centers, reducing payroll errors',
      'Developed student registration and management platform, improving enrollment efficiency for thousands of students',
      'Built and integrated cashbook and finance modules to enhance accountability across departments',
      'Optimized system workflows by analyzing organizational needs, leading to improved reporting and decision-making',
      'Developed and launched task management system that streamlined project tracking and collaboration'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'JavaScript']
  },
  {
    id: '2',
    company: 'Spottech Company',
    location: 'Wellington, New Zealand',
    role: 'Full Stack Software Developer',
    period: 'Mar 2023 – Present',
    highlights: [
      'Developed and maintained websites and MIS platforms for New Zealand clients with high performance and scalability',
      'Contributed as Backend & API Developer for VERI-Mi migration rights system',
      'Maintained and optimized SportZone Football web application for large user base',
      'Designed and developed AECA website and admin dashboard supporting cultural diversity initiatives',
      'Implemented REST APIs and microservices for seamless system integration',
      'Spearheaded CI/CD pipelines and Docker adoption, improving deployment speed',
      'Mentored junior developers and conducted code reviews to enforce best practices',
      'Enhanced security and compliance measures for sensitive client data'
    ],
    technologies: ['React', 'Node.js', 'Docker', 'AWS', 'Git', 'TypeScript']
  },
  {
    id: '3',
    company: 'Abar Wasel ICT Solution',
    location: 'Kabul, Afghanistan',
    role: 'Full Stack Software Developer',
    period: 'Mar 2018 – Oct 2020',
    highlights: [
      'Developed MIS for Afghan Writer Translation and Linguistic Center for efficient project tracking',
      'Built Stock and Sales MIS for Rezayan Watan Group using C# and SQL Server',
      'Designed and launched website and admin dashboard for Wahaj Hospital',
      'Delivered full-scale enterprise MIS for ANZPF Company integrating HR, finance, and operations',
      'Developed website and dashboard for Gulab Tahir Group of Companies',
      'Integrated third-party APIs and implemented security best practices'
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'C#', 'ASP.Net', 'SQL Server', 'Laravel']
  }
];

export const designWorks: DesignWork[] = [
  {
    id: '1',
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete brand identity system including logo, colors, and guidelines'
  },
  {
    id: '2',
    title: 'UI/UX Dashboard',
    category: 'UI/UX',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern dashboard interface with data visualization'
  },
  {
    id: '3',
    title: 'Marketing Campaign',
    category: 'Print Design',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete marketing collateral including posters and brochures'
  },
  {
    id: '4',
    title: 'Motion Graphics',
    category: 'Animation',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Animated explainer videos and promotional content'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Karimullah Nasiri',
    role: 'Co-Founder',
    company: 'Abar Wasel ICT',
    content: 'Hekmatullah consistently delivers high-quality code and creative solutions. His ability to bridge development and design is exceptional.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Mohammad Hasib Amini',
    role: 'General Director',
    company: 'ANAFAE',
    content: 'The MIS system Hekmatullah built transformed our operations. His technical expertise and dedication are outstanding.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Mohammad Reza Hakimyar',
    role: 'Co-Founder',
    company: 'Spottech Software Solution',
    content: 'A rare combination of technical skill and creative vision. Hekmatullah brings both precision and artistry to every project.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    metric: '6+ Years',
    description: 'Professional experience in Full Stack Development',
    icon: 'briefcase'
  },
  {
    id: '2',
    metric: '15+',
    description: 'Educational centers supported with MIS systems',
    icon: 'building'
  },
  {
    id: '3',
    metric: 'Thousands',
    description: 'Students managed through registration platforms',
    icon: 'users'
  },
  {
    id: '4',
    metric: '10+',
    description: 'Major projects delivered across multiple countries',
    icon: 'project'
  }
];
