import { ArrowRightIcon } from "@heroicons/react/24/solid";
export function Header() {
  return (
    <header className="absolute my-6 flex w-full gap-4 bg-transparent md:relative md:z-10">
      <div className="ml-4 w-full text-[32px] font-bold leading-[35.2px] md:mx-20 md:flex">
        <div className="flex items-center gap-[38px]">
          <a href="/">soller</a>
          <nav className="hidden items-center gap-4 text-base font-medium md:flex">
            <a href="/products">Products</a>
            <a href="/solutions">Solutions</a>
            <a href="/services">Services</a>
            <a href="/configure">Configure</a>
          </nav>
        </div>

        <nav className="ml-auto hidden gap-4 md:flex">
          <img srcSet="/images/phone.png" className="my-5 h-6 w-6" />
          <a
            href="/number"
            className="my-5 text-base font-medium text-[#0369A1]"
          >
            555 818 282
          </a>
          {/* <button className="mx-auto flex h-16 w-[306px] items-center rounded-[100px] border-2 border-[#581C87] pl-12 text-[24px] font-bold leading-6 text-[#581C87]">
            Request a Quote
            <ArrowRightIcon className="mx-auto my-auto h-6 w-6 text-purpleCustom-0" />
          </button> */}
          <button className="group mx-auto flex h-16 w-[306px] items-center rounded-[100px] border-2 border-[#581C87] pl-12 text-[24px] font-bold leading-6 text-[#581C87] transition delay-150 duration-300 hover:bg-[#581C87] hover:text-yellowCusto-0 hover:delay-150">
            Request a Quote
            <ArrowRightIcon className="mx-auto my-auto h-6 w-6 text-purpleCustom-0 transition-colors duration-300 group-hover:text-yellowCusto-0" />
          </button>
        </nav>
      </div>
    </header>
  );
}
