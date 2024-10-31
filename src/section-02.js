export function Section02() {
  return (
    <section className="relative">
      <div className="absolute top-[199px] h-[249.86px] w-[250.22px] -translate-x-1/2 rounded-full bg-[#F59E0B] md:hidden" />
      <div className="absolute top-[116px] hidden h-[711px] w-[710px] -translate-x-1/3 rounded-full bg-[#F59E0B] md:block" />

      <div className="relative z-10 mx-4 mb-16 mt-12 flex flex-col items-center">
        <span className="mb-2 font-medium text-orangeCustom-0 md:text-[20px] md:leading-[22px]">
          No more waste
        </span>
        <h2 className="mb-6 text-[32px] font-bold leading-[35.2px] md:text-[56px] md:font-extrabold md:leading-[61.6px]">
          Pick the Sun
        </h2>
        <span className="text-center leading-[36px] md:w-[900px] md:text-[20px]">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin
        </span>
      </div>

      <figure className="relative z-10">
        <img
          className="mb-12 ml-auto mr-1 h-[246px] w-[358px] md:hidden"
          srcSet="/images/desktop.png"
          alt="desktop-screen"
        />
        <img
          className="mx-auto mb-12 hidden h-[854px] w-[1520px] md:block"
          srcSet="/images/desktop-md.png"
          alt="desktop-screen"
        />
      </figure>
      <div className="clip-half absolute -right-[125.11px] top-[268px] h-[249.86px] w-[250.22px] rounded-full bg-[#7E22CE] md:hidden" />
      <div className="absolute right-0 top-[268px] hidden h-[597px] w-[596px] rounded-full bg-[#7E22CE] md:block" />
    </section>
  );
}
