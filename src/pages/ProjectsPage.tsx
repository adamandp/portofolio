import ProjectCard from "../components/projectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex justify-center pt-[clamp(83px,8.333vw,160px)] pb-[100px]">
      <div className="flex flex-col justify-center items-center gap-[clamp(32px,5vw,96px)] max-w-[1500px]">
        <motion.h1
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
          className="font-raleway text-[clamp(16px,1.25vw,24px)] text-[#C8C8C8] text-center max-w-[655px]"
        >
          {
            "< For the convenience of client privacy, the projects displayed here are representations of the projects being worked on, not the actual projects. "
          }
          {" />"}
        </motion.h1>
        {PROJECTS_DATA.map((item) => (
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            key={item.id}
          >
            <ProjectCard {...item} key={item.id} />
          </motion.div>
        ))}
        <div className="text-[#B292FF] font-semibold text-[24px] text-center">
          Comming Soon
        </div>
      </div>
    </main>
  );
}
