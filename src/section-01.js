export function Section01() {
  return (
    <section className="flex flex-col gap-16 md:ml-20">
      <figure>
        <img
          className="right-0 z-0 md:absolute md:top-0"
          srcSet="/images/worker.png"
          alt="worker-image"
        />
      </figure>
      <div className="mx-4 text-center md:mx-0 md:h-[348px] md:w-[600px] md:text-left">
        <h1 className="mb-6 text-[40px] font-bold leading-[44px] md:text-h1">
          Get the Sun to Power Your Home
        </h1>
        <span className="block text-lg font-normal md:text-2438">
          Viverra viverra nibh enim et aliquam, enim. Tempor,sit mus viverra
          orci dui consequat turpis scelerisque.
        </span>
        <button className="mx-auto mt-6 h-16 w-[306px] rounded-[100px] border-2 border-[#581C87] text-[24px] font-bold leading-6 text-[#581C87] transition delay-150 duration-300 hover:bg-[#581C87] hover:text-[#FCD34D] hover:delay-150 md:mb-0">
          Request a Quote
        </button>
      </div>
      <div className="mx-4 mb-12 md:mx-0 md:h-[138px] md:w-[600px]">
        <span className="mb-4 block text-justify font-normal">
          "Viverra viverra nibh enim et aliquam, enim. Tempor,sit mus viverra
          orci dui consequat turpis scelerisque faucibus."
        </span>
        <div className="flex h-16">
          <figure>
            <img
              srcSet="/images/client.png"
              alt="client-comment"
              className="h-16 w-16 rounded-full object-cover"
            />
          </figure>
          <div className="my-[6px] ml-4 flex flex-col justify-center">
            <span>Rwanda Melfor</span>
            <span>zerowaste.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
