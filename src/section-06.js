import { ArrowRightIcon } from "@heroicons/react/24/solid";
export function Section06() {
  return (
    <section className="bg-[#581C87] pt-12 md:bg-[#7E22CE]">
      <div className="mb-16 flex flex-col items-center text-center text-white md:ml-[320px] md:flex-row md:text-left">
        <div className="md:w-[894px]">
          <span className="font-medium leading-[17.6px] text-yellowCusto-0 md:text-[20px] md:leading-[22px]">
            Get the Sun to power your home
          </span>
          <h2 className="text-[32px] font-bold leading-[35.2px] md:text-[56px] md:font-extrabold md:leading-[61.6px]">
            All the power that you need for your house is now available
          </h2>
        </div>
        <div className="flex flex-col md:ml-auto md:mr-[80px] md:items-center md:gap-4">
          <button className="mx-auto mb-4 mt-6 flex h-16 w-[306px] items-center rounded-[100px] border-2 border-[#FCD34D] pl-12 text-[24px] font-bold leading-6 text-yellowCusto-0 transition delay-150 duration-300 hover:bg-[#581C87] hover:text-[#FCD34D] hover:delay-150 md:mb-0">
            Request a Quote
            <ArrowRightIcon className="mx-auto my-auto h-6 w-6 text-yellowCusto-0" />
          </button>
          <span className="leading-[22.4px] md:text-[18px] md:leading-[28.8px]">
            Egestas fringilla aliquam leo
          </span>
        </div>
      </div>

      <figure>
        <img
          className="mx-auto h-[196.1px] w-[358px] md:h-[555px] md:w-[1008px]"
          srcSet="/images/macbook.svg"
          alt="notebook-image"
        />
      </figure>
    </section>
  );
}
