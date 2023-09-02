import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  prepbytes,
  bigwings,
  threads,
  reudemy,
  flimflix,
  devjobs,
  nike,
  omnifood,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "React Developer",
    company_name: "Big Wings LLC",
    icon: bigwings,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products.",
      "Ensured responsive design and cross-browser compatibility for seamless user experiences.",
      "Actively participated in code reviews, offering constructive feedback to enhance the development process.",
    ],
  },
  // {
  //   title: "Full Stack Developer Trainee",
  //   company_name: "PrepBytes",
  //   icon: prepbytes,
  //   iconBg: "#E6DEDD",
  //   date: "Apr 2022 - Nov 2022",
  //   points: [
  //     "Received comprehensive training in developing web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack and related technologies.",
  //     "Engaged in collaborative learning with peers and instructors, gaining valuable insights into the software development process.",
  //     "Acquired skills in implementing responsive design and ensuring cross-browser compatibility to create user-friendly applications.",
  //     "Actively participated in code reviews, leveraging feedback from instructors and peers to improve coding skills and best practices.",
  //   ],
  // },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Threads",
    description:
      "Introducing Threads project, built with Next.js 13.4, Clerk for authentication, Shancn UI for sleek design, and MongoDB for data storage. Threads is a modern web application that offers a seamless and secure platform for collaborative discussions, making it easy to connect and communicate with others online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/rejisterjack/threads-app.git",
    deployed_link: "https://threads-app-dark.vercel.app",
  },
  {
    name: "Reudemy",
    description:
      "Reudemy is your go-to destination for diverse online courses, much like Udemy. Powered by React and MongoDB, it offers an engaging learning experience. Watch video lectures, add your favorite courses to playlists, and enhance your skills in a user-friendly environment. Explore a world of knowledge at your fingertips with Reudemy.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: reudemy,
    source_code_link: "https://github.com/rejisterjack/reudemy-frontend.git",
    deployed_link: "https://reudemy-frontend.vercel.app",
  },
  {
    name: "Flimflix",
    description:
      "Introducing FilmFlix, the ultimate movie review web app crafted with React and Material-UI. Dive into the world of cinema as you explore a vast database of films sourced from The Movie Database. With an elegant design and user-friendly interface, FilmFlix is your go-to platform for discovering, rating, and reviewing your favorite movies. Experience the magic of film like never before.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "alan-ai",
        color: "green-text-gradient",
      },
      {
        name: "tmdb",
        color: "pink-text-gradient",
      },
    ],
    image: flimflix,
    source_code_link: "https://github.com/rejisterjack/filmflix.git",
    deployed_link: "https://filmflix-with-ai.vercel.app",
  },
  {
    name: "Devjobs",
    description:
      "Explore the DevJobs app, a dynamic mobile platform created with React Native and styled-components. This innovative application leverages the power of Rapid API to deliver real-time job listings for developers and tech enthusiasts. Discover your next career opportunity with a beautifully designed interface, while staying updated on the latest job postings in the tech industry—all in the palm of your hand.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "styled-c",
        color: "pink-text-gradient",
      },
    ],
    image: devjobs,
    source_code_link: "https://github.com/rejisterjack/devjobs-app.git",
    deployed_link: "https://github.com/rejisterjack/devjobs-app.git",
  },
  {
    name: "Nike Site",
    description:
      "Welcome to the Nike homepage, crafted with the power of Tailwind CSS. Experience the world of sports and style in this dynamic and visually appealing web environment. Discover the latest trends, explore top products, and immerse yourself in the essence of Nike's iconic brand—all with the seamless design of Tailwind CSS.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/rejisterjack/nike-page.git",
    deployed_link: "https://nike-page-red.vercel.app",
  },
  {
    name: "Omnifood Site",
    description:
      "Omnifood provide the smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/rejisterjack/omnifood-site.git",
    deployed_link: "https://omnifood-site.vercel.app",
  },
]

export { services, technologies, experiences, testimonials, projects }
