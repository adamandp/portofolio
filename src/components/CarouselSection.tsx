import Slider from "react-slick";
import { Div, P } from "../utils/motionSyntax";
import { techCarousel, TECHNOLOGIES_ITEMS } from "../constans/constant";
import { backInLeft, backInRight } from "../utils/motionEffect";

export default function CarouselSection() {
  return (
    <section className="flex flex-col gap-c-10 mt-c-25">
      <P
        {...backInLeft(0.5)}
        className="text-center font-raleway text-c-8 md:text-start"
      >
        These are the <br className="hidden md:block" /> technologies I’ve been
        using
      </P>
      <Div className="tech-carousel" {...backInRight(0.5)}>
        <div className="slider-container pb-c-20">
          <Slider {...techCarousel}>
            {TECHNOLOGIES_ITEMS.map((item) => (
              <div
                className="border-[1px] border-solid border-c-gray-gradient rounded-xl px-c-8-5 py-c-7 mb-c-10"
                key={item.id}
              >
                <p>{item.title}</p>
                <div className="grid gap-c-3-5 mt-c-3-5">
                  {item.tools.map((tool) => (
                    <div className="flex items-center gap-c-3-5" key={tool.id}>
                      <div className="grid place-items-center bg-[#211F23] rounded-full p-c-2">
                        <img src={tool.image} className="w-c-5" />
                      </div>
                      <p>{tool.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Div>
    </section>
  );
}
