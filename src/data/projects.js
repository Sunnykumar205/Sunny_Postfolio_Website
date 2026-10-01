import bpioImage from '../assets/BPIO_INTERNSHIP_PAGE.png';
import courseImage from '../assets/Course_selling_Website.png'
import singImage from '../assets/Sing_Language_Translation.png'
export const projectsData = [
  {
    name: 'Course Selling Platform',
    technologies: 'React · Node.js · MongoDB',
    description: 'A full-featured online course marketplace built as a group project. Includes user authentication, payment integration (Stripe), course management, and admin dashboard.',
    image: courseImage,
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    name: 'Blazor SPA Application',
    technologies: '.NET Core · Blazor · C#',
    description: 'Internal tool built with Blazor WebAssembly for Truebodh Technologies. Features real-time data updates, responsive design, and MAUI compatibility for mobile deployment.',
    image: bpioImage,
    githubLink: 'https://github.com',
    liveLink: 'https://baijnathpanchang.in/',
  },
  {
    name: 'Sign Language Translator AI',
    technologies: 'Python · HTML · Docker',
    description: 'A Python-based sign language translation system that uses computer vision and machine learning to recognize hand gestures and convert them into text in real time.',
    image: singImage,
    githubLink: 'https://github.com/Sunnykumar205/Sign-language-translator.git',
    liveLink: '##',
  },
];