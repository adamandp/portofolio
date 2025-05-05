import { Div, P } from "../utils/motionSyntax";
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router";
import { PROJECTS_DATA } from "../constans/constant";
import { backInLeft } from "../utils/motionEffect";
import { dataProjectsType } from "../constans/types";

function ProjectCard({ img, title, tools, to }: dataProjectsType) {
  return (
    <div
      id="projects"
      className="border-c-gray-700 border-2 rounded-c-5 p-c-5 font-raleway h-full"
    >
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="grid place-items-center w-full"
      >
        <img src={img} alt="" className="rounded-c-5  object-contain" />
      </a>
      <h1 className="font-semibold text-c-6 mt-c-4 text-start">{title}</h1>
      <section className="grid gap-2 mt-c-2">
        <h2 className="text-c-purple-300 text-c-5 font-semibold ml-c-1 text-start">
          Used Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {tools?.map((item) => (
            <Link to={item.link === "" ? item.link : "#"} key={item.id}>
              <ConfigProvider theme={{ token: { colorPrimary: "#131313" } }}>
                <Button type="primary" className="!px-c-4 !py-c-2 rounded-c-5">
                  <p className="font-semibold text-c-4-5">{item.title}</p>
                </Button>
              </ConfigProvider>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section className="flex flex-col items-center mt-c-20 text-center">
      <p className="text-c-10 text-c-purple-300 font-semibold py-c-10">
        Projects
      </p>
      <P
        {...backInLeft(0.5)}
        className="font-raleway text-c-4-5 text-c-gray-300 max-w-c-100"
      >
        &lt; Dive into my journey as a{" "}
        <span className="font-semibold text-white">Fullstack Engineer</span> and
        see the projects I’ve built /&gt;
      </P>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-c-6 mt-c-5">
        {PROJECTS_DATA.map((item) => (
          <Div {...backInLeft(0.5)} key={item.id}>
            <ProjectCard {...item} />
          </Div>
        ))}
      </div>
    </section>
  );
}
