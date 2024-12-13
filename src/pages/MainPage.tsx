import { Button } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TECHNOLOGIES_ITEMS } from "../constans/constant";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

export default function MainPage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
  };
  return (
    <main className="pt-[clamp(98px,24.936vw,170px)] flex flex-col gap-[clamp(50px,22.901vw,100px)]">
      <section className="grid md:grid-cols-2 place-items-center">
        <div className="md:order-2">
          <img
            src="../src/assets/dam.jpeg"
            className="rounded-full w-[25.517vw] max-w-[390px]"
          />
        </div>
        <div className="text-center md:text-start mt-[39.92px] md:mt-0 font-raleway">
          <p className="font-medium text-[32px] md:text-[75px]">Hi, I’m Adam</p>
          <p className="text-gray-400 md:text-2xl mt-[23px] md:mt-[30px] leading-[30px] md:leading-[48px]">
            During these <a className="font-bold text-white">2 years</a> as {""}
            <a className="font-bold text-white">Front-End Engineer</a>. My role
            has extended beyond coding to effective communication with various
            departments, to define new features and spearheading the development
            of new apps.
          </p>
          <div className="grid place-items-center mt-12 md:mt-14 gap-[13px] md:flex">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="download-btn"
            >
              Download CV
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className="exp-btn"
            >
              See Experience
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[62px]">
        <p className="text-center font-raleway text-[32px] md:text-start md:text-[clamp(32px,8.142vw,60px)]">
          These are the <br className="hidden md:block" /> technologies I’ve
          been using
        </p>
        <div className="slider-container">
          <Slider {...settings}>
            {TECHNOLOGIES_ITEMS.map((item) => (
              <div
                key={item.id}
                className="border-c-gray-gradient border-[1px] border-solid drop-shadow-2xl rounded-xl py-[26px] px-[43px] font-nunito"
                style={{ marginRight: "10px" }}
              >
                <p>{item.title}</p>
                <div className="grid gap-[14px] pt-[14px]">
                  {item.tools?.map((tool) => (
                    <div key={tool.id} className="flex items-center gap-2">
                      <div className="grid place-items-center bg-gray-700 rounded-full p-2">
                        <img src={tool.image} className="w-[20px]" />
                      </div>
                      <p>{tool.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="pb-[200px]">
        <div className="nav-container md:text-[16px,1.354vw,24px]">
          <p className="font-nunito text-c-gray-400">Follow me</p>
          <div className="flex gap-[20px] text-c-purple-300">
            <GithubFilled />
            <LinkedinFilled />
            <MailFilled />
          </div>
        </div>
        <p className="px-7 pt-3">Dam © 2024</p>
      </section>
    </main>
  );
}

