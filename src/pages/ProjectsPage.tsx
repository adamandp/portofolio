import ProjectCard from "../components/projectCard";
import { PROJECTS_DATA } from "../constans/constant";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="h-screen flex flex-col gap-[clamp(32px,5vw,96px)] pt-[clamp(83px,8.333vw,160px)]">
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
    </main>
  );
}
