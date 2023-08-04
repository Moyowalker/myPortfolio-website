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
  natter,
  meta,
  starbucks,
  arravo,
  delivery,
  bcx,
  tesla,
  shopify,
  carrent,
  credence,
  jobit,
  tripguide,
  threejs,
  scudo,
  fastclaim,
} from "../assets";

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
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Development",
    icon: mobile,
  },
  {
    title: "IT Consulting",
    icon: backend,
  },
  {
    title: "Cross-Platform Mobile Development",
    icon: creator,
  },
];

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
];

const experiences = [
  {
    title: "Lead Application Developer",
    company_name: "Arravo",
    icon: arravo,
    iconBg: "#383E56",
    date: "November 2020 - Present",
    points: [
      "Led and managed a high-performing team of 5+ software engineers, guiding them in modifying software, resolving errors, optimizing hardware interfaces, and enhancing overall performance.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using JavaScript (MERN Stack)and other related technologies.",
      "Active involvement in an Agile team of 7, utilizing standups, code reviews, and pair programming for quality applications.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "FastClaim Solutions Limited",
    icon: fastclaim,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - July 2023",
    points: [
      "Planned, developed, tested, deployed, optimized and maintained a cutting-edge mobile application and website for FastClaim, resulting in over 2,000 downloads within the first 6 months to production",
      "Collaborated closely with stakeholders, including insurance handlers and customers, to understand their requirements and translate them into actionable software solutions.",
      "Implemented Scrum methodologies, fostering efficient development cycles, iterative improvements, and timely feature delivery. Enhanced team collaboration, minimized bottlenecks, and increased productivity.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "BCX (Business Connexion Group)",
    icon: bcx,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Nov 2020",
    points: [
      "Drove technology sales, generating over $650,000 in revenue by aligning solutions to clients’ unique needs across diverse industry verticals.",
      "Spearheaded the transition from a paper-based approval workflow to a streamlined digital workflow, increasing efficiency and productivity within the organization.",
      "Provided comprehensive project support, overseeing implementation and services to ensure successful outcomes.",
      "Constructed a robust cloud library within a short period of time, enabling efficient document management for the organization.",
    ],
  },
  {
    title: "Junior Backend Developer (Remote)",
    company_name: "Natterbase",
    icon: natter,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Apr 2018",
    points: [
      "Started the development from scratch for Crevance Product. Crevance is a consumer finance provider.",
      "Used Node.js, Express for API endpoints and MongoDB for the Database.",
    ],
  },
  {
    title: "Designer/Customer Success",
    company_name: "Delivery Science",
    icon: delivery,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Created HTML email templates and newsletters for email marketing campaigns.",
      "Provided technical and product support.",
      "Combining research and design skills together to understand users needs and produce concepts/solutions/designs that people want to use.",
      "Designed fliers, promotion materials like ads for holidays, ID cards, business card for the company staff",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Moyo proved me wrong.",
    name: "Samuel Akame",
    designation: "CEO",
    company: "Credenceapp",
    image: "https://i.ytimg.com/vi/_z8qD3lfoI8/maxresdefault.jpg",
  },

];

const projects = [
  {
    name: "Credenceapp",
    description:
      "Credence serves as a trustworthy third party platform, protecting the integrity of your transactions when dealing with commodity traders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mern-stack",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: credence,
    source_code_link: "https://credenceapp.co/",
  },
  {
    name: "Scudo",
    description:
      "Secure your future today with Scudo insurance products from leading insurance companies. Start today. (Available on Andorid & iOS also)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mern-stack",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: scudo,
    source_code_link: "https://scudoapp.co/",
  },
  {
    name: "FastClaim",
    description:
      "FastClaim allows you to request your claims on the go. No more long delays in processing your insurance claims. Lodge your claim requests, chat directly with handlers and receive your claim speedily! (Available on Andorid & iOS also)",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mern-stack",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fastclaim,
    source_code_link: "https://getfastclaim.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
