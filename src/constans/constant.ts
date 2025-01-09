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
          "Mengembangkan reporting dashboard sesuai permintaan klien menggunakan teknologi modern seperti React.js, TypeScript, dan Tailwind CSS. Proses pengembangan berfokus pada pembuatan antarmuka pengguna (UI) yang responsif serta integrasi data yang dinamis untuk memastikan pengalaman pengguna yang optimal dan sesuai kebutuhan bisnis.",
      },
      {
        id: 2,
        description:
          "Menangani dan memperbaiki bug pada dashboard dengan pendekatan analisis masalah secara mendalam. Memastikan performa website tetap stabil dan berjalan dengan lancar, sekaligus meningkatkan kualitas kode untuk mendukung efisiensi pengembangan di masa mendatang.",
      },
      {
        id: 3,
        description:
          "Bekerja sama secara intensif dengan tim backend untuk mengintegrasikan data secara mulus ke dalam dashboard. Proses ini melibatkan diskusi mendalam tentang struktur API, untuk memastikan dashboard yang dibangun akurat, efisien, dan memenuhi kebutuhan pengguna secara menyeluruh.",
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
          "Memahami lebih dalam konsep-konsep inti dari React.js, termasuk komponen, state management, dan penggunaan hooks, untuk membangun aplikasi web yang dinamis dan interaktif",
      },
      {
        id: 2,
        description:
          "Mengonversi desain yang dibuat di Figma menjadi aplikasi web yang fungsional dengan kode yang terstruktur dan sesuai standar, memastikan hasil akhir yang sesuai dengan visi desain.",
      },
      {
        id: 3,
        description:
          "Membangun sebuah website berita sebagai proyek nyata, melibatkan pengintegrasian data artikel, navigasi intuitif, dan desain yang ramah pengguna, dengan fokus pada fungsionalitas dan estetika.",
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
          "Mengembangkan reporting dashboard sesuai permintaan klien menggunakan teknologi modern seperti React.js, TypeScript, dan Tailwind CSS. Proses pengembangan berfokus pada pembuatan antarmuka pengguna (UI) yang responsif serta integrasi data yang dinamis untuk memastikan pengalaman pengguna yang optimal dan sesuai kebutuhan bisnis.",
      },
      {
        id: 2,
        description:
          "Menangani dan memperbaiki bug pada dashboard dengan pendekatan analisis masalah secara mendalam. Memastikan performa website tetap stabil dan berjalan dengan lancar, sekaligus meningkatkan kualitas kode untuk mendukung efisiensi pengembangan di masa mendatang.",
      },
      {
        id: 3,
        description:
          "Bekerja sama secara intensif dengan tim backend untuk mengintegrasikan data secara mulus ke dalam dashboard. Proses ini melibatkan diskusi mendalam tentang struktur API, untuk memastikan dashboard yang dibangun akurat, efisien, dan memenuhi kebutuhan pengguna secara menyeluruh.",
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
];
