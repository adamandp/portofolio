export const projectsCarousel = {
  adaptiveHeight: true,
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  initialSlide: 0,
  centerPadding: "60px",
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const techCarousel = {
  adaptiveHeight: true,
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const TECHNOLOGIES_ITEMS = [
  {
    id: 1,
    title: "Tools and frameworks",
    tools: [
      {
        id: 1,
        name: "Next JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        id: 2,
        name: "Nuxt JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      },
      {
        id: 3,
        name: "Nest JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        id: 4,
        name: "Vite",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        id: 5,
        name: "React JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        id: 6,
        name: "Vue JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Design tools",
    tools: [
      {
        id: 1,
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        id: 3,
        name: "Ant Design",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
      },
      {
        id: 4,
        name: "Shadcn",
        image: "https://ui.shadcn.com/apple-touch-icon.png",
      },
      {
        id: 5,
        name: "Mapbox",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mapbox/mapbox-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Databases",
    tools: [
      {
        id: 1,
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        id: 2,
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Languages",
    tools: [
      {
        id: 1,
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        id: 3,
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        id: 4,
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        id: 5,
        name: "Kotlin",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        id: 6,
        name: "C",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
    ],
  },
];

export const DATA_ABOUT = [
  {
    id: 1,
    experience: "Frontend Engineer",
    status: "Internship",
    startDate: "June 2024",
    endDate: "Aug 2024",
    location: "South Jakarta",
    companyName: "Neural Technologies Indonesia",
    descriptions: [
      {
        id: 1,
        description:
          "Developed responsive dashboards using React.js, TypeScript, and Tailwind CSS, fixed bugs, and collaborated with backend teams to ensure seamless API integration.",
      },
    ],
  },
  {
    id: 2,
    experience: "Frontend Developer",
    status: "Bootcamp",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    location: "Remote",
    companyName: "Build With Angga",
    descriptions: [
      {
        id: 1,
        description:
          "Learned React.js fundamentals, converted Figma designs into functional websites, and built a real-world news website with good UI/UX and functionality.",
      },
    ],
  },
  {
    id: 3,
    experience: "Telecomunication Engineer",
    status: "Final year student",
    startDate: "Aug 2022",
    endDate: "Present",
    location: "Bandung",
    companyName: "Politeknik Negeri Bandung",
    descriptions: [
      {
        id: 1,
        description:
          "Active student with strong programming and IoT knowledge, involved in various projects and organizations, skilled in problem-solving and teamwork under pressure.",
      },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    img: "/assets/Projects1.png",
    title: "E-Commerce",
    to: "https://dam-ecommerce.vercel.app/",
    tools: [
      { id: 0, title: "TypeScript" },
      { id: 1, title: "Next.js" },
      { id: 2, title: "Tailwind CSS" },
      { id: 3, title: "Shadcn UI" },
      { id: 4, title: "Radix UI" },
      { id: 5, title: "Redux Toolkit" },
      { id: 6, title: "TanStack Query" },
      { id: 7, title: "Axios" },
      { id: 8, title: "Embla Carousel" },
      { id: 9, title: "Framer Motion" },
    ],
  },
  {
    id: 2,
    img: "/assets/Projects2.png",
    title: "Admin Dashboard",
    to: "https://dam-admin-dashboard.vercel.app/dashboard",
    tools: [
      { id: 0, title: "TypeScript" },
      { id: 1, title: "Next.js" },
      { id: 3, title: "Tailwind CSS" },
      { id: 4, title: "Shadcn UI" },
      { id: 5, title: "TanStack Query & Table" },
      { id: 6, title: "Axios" },
      { id: 7, title: "Maplibre GL" },
      { id: 8, title: "Framer Motion" },
      { id: 9, title: "Radix UI" },
      { id: 10, title: "Recharts" },
    ],
  },
  {
    id: 3,
    img: "/assets/Projects3.png",
    title: "Shipping Cost Calculator",
    to: "https://rate-rush.vercel.app/",
    tools: [
      { id: 0, title: "TypeScript" },
      { id: 1, title: "Nuxt" },
      { id: 2, title: "Vue" },
      { id: 3, title: "Shadcn Nuxt" },
      { id: 4, title: "Reka UI" },
      { id: 5, title: "TanStack Vue Query" },
      { id: 6, title: "VueUse" },
      { id: 7, title: "Zod" },
      { id: 8, title: "Lucide Vue" },
      { id: 9, title: "Axios" },
      { id: 10, title: "Vue Sonner" },
    ],
  },
  {
    id: 4,
    img: "/assets/Projects4.png",
    title: "Company Profile Website",
    to: "https://dam-company-profile.vercel.app/",
    tools: [
      { id: 0, title: "React" },
      { id: 1, title: "Vite" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "Tailwind CSS" },
      { id: 4, title: "Lucide React" },
      { id: 5, title: "Radix UI" },
      { id: 6, title: "React Slick" },
      { id: 7, title: "Slick Carousel" },
      { id: 8, title: "Class Variance Authority" },
      { id: 9, title: "Vite Webfont DL" },
    ],
  },
  {
    id: 5,
    img: "/assets/Projects5.png",
    title: "NestJS Backend E-Commerce",
    to: "https://dam-backend-ecommerce.vercel.app/docs",
    tools: [
      { id: 0, title: "NestJS" },
      { id: 1, title: "Prisma" },
      { id: 2, title: "Zod" },
      { id: 3, title: "nestjs-zod" },
      { id: 4, title: "PostgreSQL" },
      { id: 5, title: "JWT Auth" },
      { id: 6, title: "Passport.js" },
      { id: 7, title: "Midtrans" },
      { id: 8, title: "Cloudinary" },
      { id: 9, title: "Pino Logger" },
      { id: 10, title: "Swagger" },
      { id: 11, title: "Axios" },
      { id: 12, title: "Multer" },
      { id: 13, title: "Jest" },
    ],
  },
  {
    id: 6,
    img: "/assets/Projects6.png",
    title: "Nusa Region API",
    to: "https://nusa-region-api.vercel.app/docs",
    tools: [
      { id: 0, title: "NestJS" },
      { id: 1, title: "Prisma" },
      { id: 2, title: "Zod" },
      { id: 3, title: "nestjs-zod" },
      { id: 4, title: "PostgreSQL" },
      { id: 5, title: "Axios" },
      { id: 6, title: "Pino Logger" },
      { id: 7, title: "Swagger" },
      { id: 8, title: "Jest" },
    ],
  },
];
