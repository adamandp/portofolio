import { Button, ConfigProvider } from "antd";
import { DataAboutType } from "../constans/types";
import { DATA_ABOUT } from "../constans/constant";
import { motion } from "motion/react";

function ContentContainer({
  experience,
  status,
  startDate,
  endDate,
  location,
  companyName,
  descriptions,
}: DataAboutType) {
  return (
    <main className="bg-[#131313] rounded-[clamp(0px,4.167vw,80px)] py-[clamp(50px,5vw,96px)] px-[clamp(36px,4.167vw,80px)]">
      <div className="flex flex-col lg:flex-row gap-[clamp(0px,7.5vw,144px)]">
        <div className="flex flex-col gap-[clamp(12px,0.833vw,16px)] min-w-fit">
          <motion.h1
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            className="font-semibold clamp(16px,1.458vw,28px) "
          >
            {experience}
          </motion.h1>
          <motion.h2
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            className="text-[#B292FF] text-[clamp(16px,1.15vw,22px)]"
          >
            {status}
          </motion.h2>
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            className=" text-[#6F6F6F] font-light font-nunito"
          >
            <div className="flex items-center gap-[12px]">
              <p>{startDate}</p>
              <div className="bg-[#5FB9B0] w-[6px] h-[6px] rounded-full"></div>
              <p>{endDate}</p>
            </div>
            <div>{location}</div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
        >
          <h1 className="font-semibold text-[#B292FF] text-[22px] ">
            {companyName}
          </h1>
          {descriptions.map((item) => (
            <div
              className="text-[#6F6F6F] text-[clamp(14px,1.15vw,22px] grid gap-[clamp(0px,1.458vw,28px)] mt-[clamp(16px,1.667vw,32px)]"
              key={item.id}
            >
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
    <main className="grid place-items-center overflow-hidden">
      <motion.h1
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.5, type: "spring", y: 100 }}
        className="font-raleway text-[clamp(16px,1.25vw,24px)] text-[#C8C8C8] text-center max-w-[655px] mt-[clamp(0px,7.5vw,144px)]"
      >
        {
          "< Here, you can know me a little more and see my whole experience as a "
        }
        <span className="font-semibold text-white">
          Front-End Software Engineer
        </span>
        {". />"}
      </motion.h1>
      <motion.a
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.5, type: "spring", y: 100 }}
        href="https://drive.google.com/file/d/1N8lbatmWgVa6v38AxVh5QFOaXOsehUlI/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ConfigProvider theme={{ token: { colorPrimary: "#FFFFFF" } }}>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="text-black font-semibold mt-[clamp(38px,2.292vw,44px)]"
          >
            Download CV
          </Button>
        </ConfigProvider>
      </motion.a>
      <section className="grid gap-[clamp(32px,5vw,96px)] py-[clamp(83px,8.333vw,160px)]">
        {DATA_ABOUT.map((item) => (
          <motion.div
            initial={{ y: "10%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.5, type: "spring" }}
            key={item.id}
          >
            <ContentContainer {...item} />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
