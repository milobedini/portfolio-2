import {
  FaAws,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from 'react-icons/fa6'
import {
  SiCypress,
  SiDjango,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiTypescript,
} from 'react-icons/si'

import {
  mobile,
  backend,
  creator,
  web,
  ga,
  ay,
  daemon2,
  sway,
  yard,
  whisk,
  taste,
  feed,
  portfolio,
  crunch,
  peacock,
  ushirt,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  {
    title: 'Training',
    icon: creator,
  },
]

// const technologies = [
//   {
//     name: 'HTML 5',
//     icon: html,
//   },
//   {
//     name: 'Python',
//     icon: python,
//   },
//   {
//     name: 'CSS 3',
//     icon: css,
//   },
//   {
//     name: 'JavaScript',
//     icon: javascript,
//   },
//   {
//     name: 'TypeScript',
//     icon: typescript,
//   },
//   {
//     name: 'React JS',
//     icon: reactjs,
//   },
//   {
//     name: 'Redux Toolkit',
//     icon: redux,
//   },
//   {
//     name: 'Tailwind CSS',
//     icon: tailwind,
//   },
//   {
//     name: 'Node JS',
//     icon: nodejs,
//   },
//   {
//     name: 'MongoDB',
//     icon: mongodb,
//   },
//   {
//     name: 'Three JS',
//     icon: threejs,
//   },
//   {
//     name: 'git',
//     icon: git,
//   },
//   {
//     name: 'aws',
//     icon: aws,
//   },
//   {
//     name: 'cypress',
//     icon: cypress,
//   },
//   {
//     name: 'django',
//     icon: django,
//   },
//   {
//     name: 'firebase',
//     icon: firebase,
//   },
//   {
//     name: 'graphql',
//     icon: graph,
//   },
//   {
//     name: 'jest',
//     icon: jest,
//   },
//   {
//     name: 'next',
//     icon: next,
//   },
//   {
//     name: 'postgresql',
//     icon: postgresql,
//   },
//   {
//     name: 'postman',
//     icon: postman,
//   },
// ]

const technologies = [
  <FaReact key="react" />,
  <FaJs key="js" />,
  <SiTypescript key="typescript" />,
  <SiNextdotjs key="next" />,
  <FaHtml5 key="html" />,
  <FaCss3 key="css" />,
  <SiFramer key="framer" />,
  <FaPython key="python" />,
  <FaNode key="node" />,
  <SiGraphql key="graphql" />,
  <SiExpress key="express" />,
  <SiMongodb key="mongodb" />,
  <SiDjango key="django" />,
  <SiPostgresql key="postgresql" />,
  <FaGithub key="github" />,
  <SiJest key="jest" />,
  <SiCypress key="cypress" />,
  <SiPostman key="postman" />,
  <SiFirebase key="firebase" />,
  <FaAws key="aws" />,
]

const experiences = [
  {
    title: 'Software Engineering Consultant',
    company_name: 'Dae.mn',
    icon: daemon2,
    iconBg: '#383E56',
    date: 'Oct 2022 - Present',
    points: [
      'As one of two app developers in the team, I played a pivotal role in delivering a meal planning app. The app was developed using React Native (TypeScript), with Cypress for end-to-end and integration testing, and GraphQL. My focus was on perfecting the UI and user flow. The app is currently in the TestFlight phase, preparing for a full launch.',
      'Currently working on an engagement with a retail client belonging to the top 5 global brands. This project employs a similar tech stack to the aforementioned project, begun in May 2023, and is a longer-term ongoing project.',
      'Contributed to the optimisation of developing internal standards for tech stacks, including created a Kafka enrichment service, available in both .NET and Python.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'General Assembly',
    icon: daemon2,

    iconBg: '#E6DEDD',
    date: 'Jan 2022 - May 2022',
    points: [
      'Delivering daily homework feedback to students, and assisting them one-on-one or as a group throughout the course during projects and "labs".',
      'Helping build-up knowledge and confidence within students, including the delivery of some lessons.',
      'The course focuses on full-stack development, namely in: JavaScript, Python, React, Node.js, MongoDB, Express, PostgreSQL and Django.',
    ],
  },
  {
    title: 'Software Engineering Student',
    company_name: 'General Assembly',
    icon: ga,
    iconBg: '#383E56',
    date: 'Sep 2021 - Dec 2022',
    points: [
      'Undertook an intensive 12-week course mastering front and backend technologies. Enhanced my programming skills through the development and delivery of four practical web application projects, supplementing my theoretical learning with daily stand-ups, lectures, and hands-on labs.',
      'Project 4: Developed a full-stack, responsive mindfulness website featuring CRUD operations, utilizing Django (Python) on the backend and React on the frontend. Created 19 unique API endpoints, defined multiple relational database schemas, and implemented custom user authentication, resulting in an engaging user experience.',
      'Project 3: Collaborated in a team of 3 to build a full-stack MERN app mimicking social media functionality for recipe sharing. My contribution entailed developing features for user interactions, including liking, saving recipes, and generating a custom shopping list, and enhancing the overall user engagement.',
      'Project 2: A 48-hour hackathon to create a numbers-based web app employing React and Sass, integrating four external APIs.',
      "Project 1: Engineered a grid-based game harnessing Vanilla JavaScript, HTML, and CSS. My game was voted the cohort's favourite, demonstrating my ability to create enjoyable user experiences.",
    ],
  },
  {
    title: 'Graduate Surveyor',
    company_name: 'Avison Young',
    icon: ay,
    iconBg: '#E6DEDD',
    date: 'Sep 2019 - Aug 2021',
    points: [
      'Completed a rigorous 2-year commercial real estate graduate program.',
      'Honed my analytical skills, ability to communicate ideas and adaptability - key attributes in a fast-paced tech environment.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'Milo has been great on the [X] project!  I really appreciated how he was comfortable recommending replacing certain react native components we were using. I felt I could let him get on with it, and he would come back with any issues. This is just what was needed for this stage of the project.',
    name: 'Dave Arkell',
    designation: 'Principal Consultant',
    company: 'Dae.mn',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Milo threw himself into the project with enthusiasm and proved himself more than capable, adding value very quickly and making a considerable difference in what we were able to do within very tight deadlines. He also was quite happy to have a go at things on his own - he’s a quick learner and takes feedback well. I really enjoyed working with him, he was a great team member.',
    name: 'Steve Morris',
    designation: 'Design Strategy Lead',
    company: 'Dae.mn',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Milo was a highly skilled Teaching Assistant who was patient and thorough in his explanation, and was always approachable and easy to get along with.',
    name: 'JT Black',
    designation: 'Student',
    company: 'General Assembly',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Sway Mobile',
    description:
      'Sway Mobile is a comprehensive full-stack React Native mindfulness mobile app with advanced UI and animations. Contact me if you wish to preview Sway, as it sits within its own Expo organisation. See GitHub for a video walkthrough.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'pink-text-gradient',
      },
      {
        name: 'django',
        color: 'blue-text-gradient',
      },
      {
        name: 'expo',
        color: 'green-text-gradient',
      },
    ],
    image: sway,
    source_code_link: 'https://github.com/milobedini/sway-app',
    // live_link: 'exp://exp.host/@milobedini/Sway',
  },
  {
    name: 'UShirt',
    description:
      'UShirt allows users to preview and create a downloadable 3D model of a t-shirt design, using a colour picker, an image uploader, and an AI prompt. UShirt automatically removes any AI image backgrounds for the user. Built using React, Three.js, Framer, Tailwind, Valtio and DALLE.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'framer',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'dalle',
        color: 'green-text-gradient',
      },
    ],
    image: ushirt,
    source_code_link: 'https://github.com/milobedini/ushirt',
    live_link: 'https://ushirt.netlify.app/',
  },
  {
    name: 'Peacock',
    description:
      'Peacock is a full-stack photo sharing web app using React and Sanity. Users can log in with Google, post and save photos, as well as commenting on other posts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'google-auth',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: peacock,
    source_code_link: 'https://github.com/milobedini/peacock-v2',
    live_link: 'https://peacock-mb.netlify.app/',
  },
  {
    name: 'Sway',
    description:
      'Sway is a full-stack, responsive mindfulness website featuring CRUD operations, utilizing Django (Python) on the backend and React on the frontend. Created 19 unique API endpoints, defined multiple relational database schemas, and implemented custom user authentication, resulting in an engaging user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'django',
        color: 'pink-text-gradient',
      },
    ],
    image: sway,
    source_code_link: 'https://github.com/milobedini/Sway',
  },
  {
    name: 'Yard',
    description:
      "Yard is a full-stack e-commerce website that can process payments. It incorporates a real-time database with cloud functions, and uses React's Context API.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
    ],
    image: yard,
    source_code_link: 'https://github.com/milobedini/Yard',
    live_link: 'https://yard-60efd.web.app/',
  },

  {
    name: 'TasteBook',
    description:
      'Tastebook was developed in a team of 3 to build a full-stack MERN app mimicking social media functionality for recipe sharing. My contribution entailed developing features for user interactions, including liking, saving recipes, and generating a custom shopping list, and enhancing the overall user engagement.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
    ],
    image: taste,
    source_code_link: 'https://github.com/milobedini/TasteBook',
  },

  {
    name: 'Crunch',
    description:
      'A 48-hour hackathon to create a numbers-based web app employing React and Sass, integrating four external APIs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'green-text-gradient',
      },
    ],
    image: crunch,
    source_code_link: 'https://github.com/milobedini/Crunch',
    live_link: 'https://crunch-demo.netlify.app/',
  },
  {
    name: 'Feeding Frenzy',
    description:
      "Feeding Frenzy is a grid-based game harnessing Vanilla JavaScript, HTML, and CSS. My game was voted the cohort's favourite, demonstrating my ability to create enjoyable user experiences.",
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: feed,
    source_code_link: 'https://github.com/milobedini/Feeding-Frenzy',
    live_link: 'https://milobedini.github.io/Feeding-Frenzy/',
  },
  {
    name: 'Portfolio',
    description:
      'My portfolio (this website!) is a Next web application with all the frontend bells and whistles, including 3D.js and Framer Motion.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'framer',
        color: 'pink-text-gradient',
      },
      {
        name: '3d.js',
        color: 'blue-text-gradient',
      },
    ],
    image: portfolio,
    // source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
