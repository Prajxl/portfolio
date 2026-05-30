export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Bank Management System',
    desc: 'Developed a Bank Management System using Java, JDBC, MySQL, and Java Swing to manage customer accounts, transactions, deposits, withdrawals, and balance inquiries. Implemented secure database connectivity, CRUD operations, and an interactive ATM-style user interface with robust exception handling and modular backend architecture.',
    subdesc:
      'Technologies Used: Java, JDBC, MySQL, SQL, Java Swing, IntelliJ IDEA, Git, GitHub',
    // href: 'https://quick-ai-gray.vercel.app/',
    texture: '/textures/project/quick AI.mp4',
    logo: '/assets/quickAI.svg',
    logoStyle: {
      backgroundColor: '#1a1a2e',
      border: '0.2px solid #16213e',
      boxShadow: '0px 0px 60px 0px rgba(59, 130, 246, 0.3)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
      // {
      //   id: 2,
      //   name: 'TailwindCSS',
      //   path: '/assets/tailwindcss.png',
      // },
      // {
      //   id: 3,
      //   name: 'Node.js',
      //   path: '/assets/nodejs.png',
      // },
      // {
      //   id: 4,
      //   name: 'Gemini',
      //   path: '/assets/gemini.jpeg',
      // },
      // {
      //   id: 5,
      //   name: 'Clipdrop',
      //   path: '/assets/clipdrop.png',
      // },


    ],
  },
  {
    title: 'Student Course Management ',
    desc: 'Developed a Student Course Management System using Java and SQL to efficiently manage student records, course enrollments, and tuition details. Implemented dynamic student ID generation, CRUD operations, and relational database management to ensure accurate data handling and streamlined academic administration.',
    subdesc: 'Java,SQL',
    // href: 'https://civicfix-three.vercel.app/',
    texture: '/textures/project/clean_street.mp4',
    // logo: '/assets/civicfix.png',
    logoStyle: {
      backgroundColor: '#0f172a',
      border: '0.2px solid #1e293b',
      boxShadow: '0px 0px 60px 0px rgba(34, 197, 94, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
      // {
      //   id: 2,
      //   name: 'TailwindCSS',
      //   path: '/assets/tailwindcss.png',
      // },
      // {
      //   id: 3,
      //   name: 'Node.js',
      //   path: '/assets/nodejs.png',
      // },
      // {
      //   id: 4,
      //   name: 'MongoDB',
      //   path: '/assets/mongodb.png',
      // },
      // {
      //   id: 5,
      //   name: 'Cloudinary',
      //   path: '/assets/cloudinary.png',
      // },
    ],
  },
  {
    title: 'Gesture Fusion (Expo Selected) ',
    desc: 'Developed Gesture Fusion, an interactive computer vision application that combines sign language recognition, virtual drawing, and a gesture-controlled calculator using Python, OpenCV, and MediaPipe. Enabled real-time, touchless human-computer interaction through hand gesture tracking, enhancing accessibility and user experience.',
    subdesc:
      'Python • OpenCV • MediaPipe • NumPy • Computer Vision',
    // href: 'https://safepass-ewqi.onrender.com/',
    texture: '/textures/project/safepass.mp4',
    // logo: '/assets/safepass.png',
    logoStyle: {
      backgroundColor: '#0f172a', // Slate-900 for a security/dark theme vibe
      border: '0.2px solid #3b82f6', // Blue border
      boxShadow: '0px 0px 60px 0px rgba(59, 130, 246, 0.3)', // Blue glow
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
      // {
      //   id: 2,
      //   name: 'TailwindCSS',
      //   path: '/assets/tailwindcss.png',
      // },
      // {
      //   id: 3,
      //   name: 'Node.js',
      //   path: '/assets/nodejs.png',
      // },
      // {
      //   id: 4,
      //   name: 'Express.js',
      //   path: '/assets/express.png', // Assuming asset exists or following pattern
      // },
      // {
      //   id: 5,
      //   name: 'MongoDB',
      //   path: '/assets/mongodb.png', // Assuming asset exists or following pattern
      // },
    ],
  },
// {
//   title: 'LaTexume — LaTeX-Powered ATS Resume Builder',
//   desc: 'Professional resume builder leveraging LaTeX to create ATS-optimized resumes using Jake\'s Resume template — the industry standard trusted by engineers at Google, Meta, Amazon, and Microsoft. Zero LaTeX knowledge required.',
//   subdesc: 'Full-stack application built with React 18, Vite 5, Tailwind CSS 3, Node.js, and Express. Features instant PDF generation, clickable links, and publication-quality typography through LaTeX compilation.',
//   href: 'https://latexume.vercel.app/',
//   texture: '/textures/project/latexume.mp4',
//   logo: '/assets/latexume.svg',
//   logoStyle: {
//     backgroundColor: '#000000', // Black background matching the app theme
//     border: '0.2px solid #A6FF5D', // Signature lime green border
//     boxShadow: '0px 0px 60px 0px rgba(166, 255, 93, 0.3)', // Lime green glow
//   },
//   spotlight: '/assets/spotlight3.png',
//   tags: [
//     {
//       id: 1,
//       name: 'React.js',
//       path: '/assets/react.svg',
//     },
//     {
//       id: 2,
//       name: 'TailwindCSS',
//       path: '/assets/tailwindcss.png',
//     },
//     {
//       id: 3,
//       name: 'Node.js',
//       path: '/assets/nodejs.png',
//     },
//     {
//       id: 4,
//       name: 'Express.js',
//       path: '/assets/express.png',
//     },
//     {
//       id: 5,
//       name: 'LaTeX',
//       path: '/assets/latex.jpg', // You may need to add this asset
//     },
//   ],
// },
//   {
//     title: 'K72 — Design Studio Portfolio Clone',
//     desc: 'A high-fidelity recreation of the K72 design studio website, focused on performance-driven animations and immersive visual storytelling. Includes scroll-triggered GSAP animations, parallax effects, dynamic project galleries with hover interactions, responsive grid layouts, and image preloading for seamless transitions.',
//     subdesc: 'Built with React 19, Vite, GSAP with ScrollTrigger, and Tailwind CSS. Uses lazy loading, code splitting, responsive image optimization, and custom typography with Lausanne font family to deliver a premium browsing experience across all devices.',
//     href: 'https://k72-project-3ig8.onrender.com/',
//     texture: '/textures/project/k72.mp4',
//     logo: '/assets/K72.png',
//     logoStyle: {
//       backgroundColor: '#000000',
//       border: '0.2px solid #333333',
//       boxShadow: '0px 0px 60px 0px rgba(255, 255, 255, 0.15)',
//     },
//     spotlight: '/assets/spotlight4.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'Vite',
//         path: '/assets/vite.svg',
//       },
//       {
//         id: 3,
//         name: 'GSAP',
//         path: '/assets/gsap.jpg',
//       },
//       {
//         id: 4,
//         name: 'TailwindCSS',
//         path: '/assets/tailwindcss.png',
//       },
//     ],
//   },




];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.7 : isMobile ? 0.5 : 1.08,
    deskPosition: isMobile ? [1, -2.0, 0] : [1.5, -3.2, 0],
    cubePosition: isSmall ? [3, -5, 0] : isMobile ? [7, -5, 0] : isTablet ? [8, -5, 0] : [14, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12.5, 4, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-25, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-11, -10, -10] : isTablet ? [-13, -7, -10] : [-22, -10, -10],
  };
};

export const workExperiences = [
  {
  id: 1,
  name: 'JSpiders Bengaluru',
  pos: 'Java Full Stack Intern',
  duration: 'January 2026 - Present',
  title: 'Gaining hands-on experience in Core Java, OOP, Collections, Exception Handling, and SQL. Designed and executed Oracle 11g queries including joins, subqueries, and normalization. Solved Java and database-related problems focused on debugging, optimization, and building reliable backend applications.',
  icon: '/assets/jsp.png',
  animation: 'victory',
},
{
  id: 2,
  name: 'Maiora IT Services and Consulting Pvt. Ltd.',
  pos: 'Performance Testing Intern',
  duration: 'March 2024',
  title: 'Completed intensive training in load testing and performance analysis. Worked with in-house testing tools to evaluate application behavior under varying workloads, observed real-time data entry processes, and presented testing methodologies and findings.',
  icon: '/assets/m.png',
  animation: 'clapping',
},
{
  id: 3,
  name: 'Seventh Sense Talent Solutions',
  pos: 'Soft Skills Intern',
  duration: 'June 2023',
  title: 'Completed 36 hours of communication and soft skills training focused on verbal and non-verbal communication, presentation techniques, teamwork, interpersonal effectiveness, and professional development.',
  icon: '/assets/s.png',
  animation: 'salute',
},

];