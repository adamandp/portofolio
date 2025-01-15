export const NAV_ITEMS: string[] = ["Dam", "About", "Projects"];

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
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        id: 2,
        name: "Vue JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        id: 3,
        name: "Vite",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        id: 4,
        name: "Mock Service Worker",
        image:
          "https://images.seeklogo.com/logo-png/44/1/msw-mock-service-worker-logo-png_seeklogo-446936.png?v=1957131809884597008",
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
        name: "Echarts",
        // image:
        //   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/echarts/echarts-original.svg",
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
          "Developing reporting dashboards as per client's request using modern technologies such as React.js, TypeScript, and Tailwind CSS. The development process focuses on creating a responsive user interface (UI) and dynamic data integration to ensure an optimal user experience and business needs.",
      },
      {
        id: 2,
        description:
          "Handle and fix bugs on the dashboard with an in-depth problem analysis approach. Ensure website performance remains stable and runs smoothly, while improving code quality to support future development efficiency.",
      },
      {
        id: 3,
        description:
          "Work closely with the backend team to seamlessly integrate data into the dashboard. This process involves in-depth discussions about the API structure, to ensure the dashboard is accurate, efficient, and meets the overall needs of the user.",
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
          "Deepen your understanding of the core concepts of React.js, including components, state management, and the use of hooks, to build dynamic and interactive web applications.",
      },
      {
        id: 2,
        description:
          "Convert designs created in Figma into functional web applications with structured, standards-compliant code, ensuring the end result matches the design vision.",
      },
      {
        id: 3,
        description:
          "Building a news website as a real project, involves integrating article data, intuitive navigation, and user-friendly design, with a focus on functionality and aesthetics.",
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
          "I am an active student of the Telecommunication Engineering Study Program of Bandung State Polytechnic in the 4th semester who is highly self-confident with extensive knowledge of Programming and the Internet of Things. I have also worked on several projects about programming in between my lectures which have made me superior in programming applications. In addition, I am also a fairly active student and contribute to organizational activities. In that experience, I am able to think critically in urgent matters, solve several problems under pressure, and work well in a team.",
      },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    img: "/assets/Projects1.png",
    title: "Ice Cream Website",
    to: "https://ice-cream-pi.vercel.app/",
    tools: [
      {
        id: 0,
        title: "TypeScript",
        link: "",
      },
      {
        id: 1,
        title: "Vite",
        link: "",
      },
      {
        id: 2,
        title: "React.js",
        link: "",
      },
      {
        id: 3,
        title: "React-router",
        link: "",
      },
      {
        id: 4,
        title: "Redux",
        link: "",
      },
      {
        id: 5,
        title: "Mock Service Worker",
        link: "",
      },
      {
        id: 6,
        title: "Tanstack",
        link: "",
      },
      {
        title: "Axios",
        id: 7,
        link: "",
      },
      {
        id: 8,
        title: "Tailwind CSS",
        link: "",
      },
      {
        id: 9,
        title: "Ant Design",
        link: "",
      },
      {
        id: 10,
        title: "Framer Motion",
        link: "",
      },
      {
        id: 11,
        title: "React-slick",
        link: "",
      },
      {
        id: 12,
        title: "Animate.css",
        link: "",
      },
    ],
  },
  {
    id: 2,
    img: "/assets/projects2.png",
    title: "Admin Dashboard",
    to: "/projects",
    tools: [
      {
        id: 0,
        title: "TypeScript",
        link: "",
      },
      {
        id: 1,
        title: "Next.js",
        link: "",
      },
      {
        id: 2,
        title: "Maplibre",
        link: "",
      },
      {
        id: 3,
        title: "Zustand",
        link: "",
      },
      {
        id: 4,
        title: "Redux",
        link: "",
      },
      {
        id: 5,
        title: "Tanstack",
        link: "",
      },
      {
        id: 6,
        title: "Axios",
        link: "",
      },
      {
        title: "Material UI",
        id: 7,
        link: "",
      },
      {
        id: 8,
        title: "Tailwind CSS",
        link: "",
      },
      {
        id: 9,
        title: "Ant Design",
        link: "",
      },
      {
        id: 10,
        title: "Framer Motion",
        link: "",
      },
      {
        id: 11,
        title: "Animate.css",
        link: "",
      },
    ],
  },
  {
    id: 3,
    img: "/assets/projects3.png",
    title: "Point of Sales",
    to: "/projects",
    tools: [
      {
        id: 0,
        title: "TypeScript",
        link: "",
      },
      {
        id: 1,
        title: "Nuxt",
        link: "",
      },
      {
        id: 2,
        title: "Vue",
        link: "",
      },
      {
        id: 3,
        title: "Pinia",
        link: "",
      },
      {
        id: 4,
        title: "Tanstack",
        link: "",
      },
      {
        id: 5,
        title: "Axios",
        link: "",
      },
      {
        id: 6,
        title: "Acme UI",
        link: "",
      },
      {
        id: 7,
        title: "Tailwind CSS",
        link: "",
      },
      {
        id: 8,
        title: "Framer Motion",
        link: "",
      },
      {
        id: 10,
        title: "Animate.css",
        link: "",
      },
    ],
  },
];
