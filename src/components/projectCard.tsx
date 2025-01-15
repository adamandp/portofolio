export default function ProjectCard({
  img,
  title,
  tools,
  to,
}: dataProjectsType) {
  return (
    <main className="border-[#272727] border-[2px] rounded-[clamp(40px,4.167vw,80px)] py-[clamp(43px,3.333vw,64px)] px-[clamp(38px,4.167vw,80px)] font-raleway flex flex-col lg:flex-row gap-[clamp(14px,2.083vw,40px)]">
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="grid place-items-center"
      >
        <img src={img} alt="" className="rounded-xl lg:w-[1200px]" />
      </a>
      <div className="flex flex-col gap-[clamp(12px,0.833vw,16px)] mt-[clamp(25px,2.083vw,40px)] lg:mt-0">
        <h1 className="font-semibold text-[clamp(16px,1.458vw,28px)]">
          {title}
        </h1>
        <section className="grid gap-2">
          <h2 className="text-[#B292FF] text-[clamp(14px,1.15vw,22px)]">
            Used Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {tools?.map((item) => (
              <Link to={item.link === "" ? item.link : "#"} key={item.id}>
                <ConfigProvider theme={{ token: { colorPrimary: "#131313" } }}>
                  <Button
                    type="primary"
                    className="!px-[clamp(16px,1.56vw,30px)] !py-[clamp(16px,1.25vw,24px)) rounded-lg"
                  >
                    <p className="font-semibold text-[clamp(10px,1.15vw,22px]">
                      {item.title}
                    </p>
                  </Button>
                </ConfigProvider>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
