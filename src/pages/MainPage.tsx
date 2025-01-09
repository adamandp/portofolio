import { Button, ConfigProvider } from "antd";
import { LinkedinFilled } from "@ant-design/icons";
import Slider from "react-slick";
import {
  PROJECTS_DATA,
  techCarousel,
  TECHNOLOGIES_ITEMS,
} from "../constans/constant";
import ProjectCard from "../components/projectCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <main className="pt-[clamp(98px,24.936vw,170px)] flex flex-col gap-[clamp(50px,22.901vw,100px)] overflow-hidden">
      <section className="grid md:grid-cols-2 place-items-center">
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
          className="md:order-2 w-full justify-items-center md:justify-items-end"
        >
          <img
            src="/assets/dam.jpeg"
            className="rounded-full w-[25.517vw] max-w-[390px]"
          />
        </motion.div>
        <div className="text-center md:text-start mt-[39.92px] md:mt-0 font-raleway w-full">
          <motion.p
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            className="font-medium text-[clamp(16px,8.142vw,32px)] md:text-[clamp(32px,3.906vw,75px)]"
          >
            Hi, I’m Adam
          </motion.p>
          <motion.p
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.7, type: "spring", y: 100 }}
            className="text-gray-400 text-[clamp(10px,4.071vw,16px)] md:text-[clamp(16px,1.25vw,24px)] leading-[clamp(16px,7.634vw,30px)] md:leading-[clamp(30px,2.5vw,48px)] mt-[23px] md:mt-[30px]"
          >
            During these <a className="font-bold text-white">2 years</a> as {""}
            <a className="font-bold text-white">Front-End Engineer</a>. My role
            has extended beyond coding to effective communication with various
            departments, to define new features and spearheading the development
            of new apps.
          </motion.p>
          <div className="grid place-items-center mt-12 md:mt-14 gap-[13px] md:flex">
            <motion.a
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.9, type: "spring", y: 100 }}
              href="https://drive.google.com/file/d/1N8lbatmWgVa6v38AxVh5QFOaXOsehUlI/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#B292FF",
                  },
                }}
              >
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="w-fit font-bold font-nunito costum-button-explore bg-white"
                >
                  Download CV
                </Button>
              </ConfigProvider>
            </motion.a>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.2, type: "spring", y: 100 }}
            >
              <Link to="/about">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="w-fit font-medium font-nunito text-c-purple-300 !bg-transparent hover:bg-black active:bg-black shadow-black "
                >
                  See Experience
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        {PROJECTS_DATA.map((item) => (
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5, type: "spring", y: 100 }}
            key={item.id}
          >
            <ProjectCard {...item} />
          </motion.div>
        ))}
        <motion.div
          className="flex justify-end"
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
        >
          <Link to="/projects">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#B292FF",
                },
              }}
            >
              <Button
                type="primary"
                shape="round"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="font-semibold mt-[clamp(38px,2.292vw,44px)] costum-button-explore"
              >
                Explore More
              </Button>
            </ConfigProvider>
          </Link>
        </motion.div>
      </section>
      <section className="flex flex-col gap-[62px]">
        <motion.p
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
          className="text-center font-raleway text-[clamp(16px,8.142vw,32px)] md:text-start md:text-[clamp(32px,3.125vw,60px)]"
        >
          These are the <br className="hidden md:block" /> technologies I’ve
          been using
        </motion.p>
        <motion.div
          className="tech-carousel"
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5, type: "spring", y: 100 }}
        >
          <div className="slider-container">
            <Slider {...techCarousel}>
              {TECHNOLOGIES_ITEMS.map((item) => (
                <div
                  className="border-[1px] border-solid border-c-gray-gradient rounded-xl px-[34px] py-[26px]"
                  key={item.id}
                >
                  <p>{item.title}</p>
                  <div className="grid gap-[14px] mt-[14px]">
                    {item.tools.map((tool) => (
                      <div
                        className="flex items-center gap-[14px]"
                        key={tool.id}
                      >
                        <div className="grid place-items-center bg-[#211F23] rounded-full p-2">
                          <img src={tool.image} className="w-[18px]" />
                        </div>
                        <p>{tool.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </section>
      <section className="pb-[200px]">
        <div className="nav-container md:text-[16px,1.354vw,24px]">
          <p className="font-nunito text-c-gray-400">Follow me</p>
          <div className="flex gap-[20px] text-c-purple-300">
            <a
              href="https://www.linkedin.com/in/adam-ananda-6b8a38222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled />
            </a>
          </div>
        </div>
        <p className="px-7 pt-3">Dam © 2024</p>
      </section>
    </main>
  );
}
