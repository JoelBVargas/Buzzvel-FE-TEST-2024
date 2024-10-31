export function Section06() {
  return (
    <section className="bg-[#581C87] pt-12">
      <div className="mb-16 flex flex-col items-center text-center text-white">
        <span className="font-medium leading-[17.6px] text-yellowCusto-0">
          Get the Sun to power your home
        </span>
        <h2 className="text-[32px] font-bold leading-[35.2px]">
          All the power that you need for your house is now available
        </h2>

        <button className="mx-auto mb-4 mt-6 h-16 w-[306px] rounded-[100px] border-2 border-[#FCD34D] text-[24px] font-bold leading-6 text-yellowCusto-0 transition delay-150 duration-300 hover:bg-[#581C87] hover:text-[#FCD34D] hover:delay-150 md:mb-0">
          Request a Quote
        </button>
        <span className="leading-[22.4px]">Egestas fringilla aliquam leo</span>
      </div>

      <figure>
        <img
          className="mx-auto h-[196.1px] w-[358px]"
          srcSet="/images/macbook.svg"
          alt="notebook-image"
        />
      </figure>
    </section>
  );
}
