export function Section03() {
  return (
    <div className="md:flex md:h-[1060px]">
      <div className="my-auto md:w-[1180px]">
        <div className="mx-4 mb-16 flex flex-col items-center text-center md:items-start">
          <span className="mb-2 font-medium leading-[17.6px] text-orangeCustom-0 md:text-[20px] md:leading-[22px]">
            Services
          </span>
          <h2 className="mb-6 text-[32px] font-bold leading-[35.2px] md:text-[56px] md:leading-[61.6px]">
            Personalized services
          </h2>
          <span className="leading-[22.4px] md:text-[20px] md:leading-[36px]">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </span>
        </div>

        {/* Grid dos serviços */}
        <div className="mx-4 mb-[23px] grid grid-cols-2 gap-12 text-center md:text-left">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 leading-[22.4px] md:items-start md:text-[18px] md:leading-[28.8px]"
            >
              <div className="h-16 w-16" />
              <h3 className="text-[20px] font-medium leading-[22px] md:text-[22px] md:leading-[26.4px]">
                Et mauris
              </h3>
              <span>
                Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique.
              </span>
            </div>
          ))}
        </div>
      </div>

      <figure className="flex h-[523px] w-[599px] items-center md:order-first md:block">
        <img
          className="absolute left-0 -z-10 h-[523px] transform md:-left-32 md:h-[1000px]"
          srcSet="/images/purple-rectangle.png"
        />
        <img
          className="absolute left-1/2 h-[553px] -translate-x-1/2 transform pl-[35.5px] pt-[41px] md:left-0 md:h-[900px] md:translate-x-0"
          srcSet="/images/mobile-01.png"
          alt="cellphone"
        />
      </figure>
    </div>
  );
}
