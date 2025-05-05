import { A, Img, P } from "../utils/motionSyntax";
import { Button, ConfigProvider } from "antd";
import { backInLeft, backInRight } from "../utils/motionEffect";

export default function MainSection() {
  return (
    <section
      id="dam"
      className="grid lg:grid-cols-2 place-items-center pt-c-30"
    >
      <Img
        {...backInRight(0.5)}
        src="/assets/dam.jpeg"
        className="rounded-full object-contain size-c-100 lg:order-2 lg:size-c-120"
      />

      <div className="text-center lg:text-start mt-c-10 lg:mt-0 font-raleway">
        <P {...backInLeft(0.5)} className="font-medium text-c-10 lg:text-c-20">
          Hi, I’m Adam
        </P>
        <P
          {...backInLeft(0.7)}
          className="text-gray-400 text-c-7 leading-c-13 mt-c-7-5"
        >
          During these <a className="font-bold text-white">2 years</a> as{" "}
          <a className="font-bold text-white">Fullstack Engineer</a>. My role
          has extended beyond coding to effective communication with various
          departments, to define new features and spearheading the development
          of new apps.
        </P>
        <div className="flex flex-col justify-center md:flex-row lg:justify-start lg:items-center gap-c-5 mt-c-12 lg:mt-c-14">
          <A
            {...backInLeft(0.9)}
            href="https://drive.google.com/file/d/1BRcxTqtv62UgqYtJv7f6yTFUILJzIcve/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ConfigProvider
              theme={{
                token: { colorPrimary: "#FFFF" },
                components: { Button: { primaryColor: "#000000" } },
              }}
            >
              <Button
                type="primary"
                shape="round"
                size="large"
                className="w-fit !font-bold !font-nunito"
              >
                Download CV
              </Button>
            </ConfigProvider>
          </A>
          <button className="font-nunito font-medium text-c-purple-300 hover:text-purple-400 cursor-pointer">
            See experience
          </button>
        </div>
      </div>
    </section>
  );
}
