import { H1, H2, Div, P } from "../utils/motionSyntax";
import { DATA_ABOUT } from "../constans/constant";
import { backInLeft, backInRight } from "../utils/motionEffect";
import { DataAboutType } from "../constans/types";

function ExperienceCard({
  experience,
  status,
  startDate,
  endDate,
  location,
  companyName,
  descriptions,
}: DataAboutType) {
  return (
    <main
      id="experience"
      className="bg-[#131313] rounded-c-6 p-c-6 h-full shadow-c-2"
    >
      <div className="flex flex-col gap-c-8">
        {/* Header Section */}
        <div className="flex flex-col gap-c-3">
          <H1
            {...backInLeft(0.5)}
            className="font-semibold text-c-6 text-white"
          >
            {experience}
          </H1>
          <H2 {...backInRight(0.5)} className="text-[#B292FF] text-c-5">
            {status}
          </H2>
          <Div
            {...backInLeft(0.7)}
            className="text-[#A0A0A0] font-nunito text-c-4-5"
          >
            <div className="flex items-center gap-c-3">
              <p>{startDate}</p>
              <div className="bg-[#5FB9B0] size-c-2 rounded-full" />
              <p>{endDate}</p>
            </div>
            <p className="mt-c-1">{location}</p>
          </Div>
        </div>
        <Div {...backInRight(0.5)} className="mt-c-2">
          <h1 className="font-semibold text-[#B292FF] text-c-6">
            {companyName}
          </h1>
          <div className="mt-c-3 grid gap-c-3">
            {descriptions.map((item) => (
              <p className="text-[#B0B0B0] text-c-5  font-nunito" key={item.id}>
                {item.description}
              </p>
            ))}
          </div>
        </Div>
      </div>
    </main>
  );
}

export default function ExperienceSection() {
  return (
    <section className="grid gap-c-10 place-items-center px-c-6 mt-c-35">
      <P className="text-center text-c-12 text-c-purple-300 font-bold">
        Experience
      </P>
      <P
        {...backInLeft(0.5)}
        className="font-raleway text-c-4-5 text-c-gray-300 text-center max-w-c-100"
      >
        &lt; Discover more about me and my journey as a{" "}
        <span className="font-semibold text-white">Fullstack Engineer</span>{" "}
        /&gt;
      </P>
      <div className="grid md:grid-cols-3 gap-c-6 w-full">
        {DATA_ABOUT.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
