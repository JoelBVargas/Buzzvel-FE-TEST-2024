import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function Section05() {
  // Referência ao Swiper
  const swiperRef = useRef(null);
  console.log(swiperRef);

  // Funções para navegar entre os slides
  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Avançar para o próximo slide
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Voltar para o slide anterior
  };

  return (
    <section className="bg-[#581C87] pb-12">
      <div className="mx-4 flex flex-col items-center pt-12 text-center text-white md:mb-20 md:ml-20 md:mr-0 md:flex-row md:text-left">
        <div className="md:w-[814px]">
          <span className="mb-2 font-medium leading-[22.4px] text-yellowCusto-0">
            Join other Sun harvesters
          </span>
          <h2 className="mb-6 text-[32px] font-bold leading-[35.2px]">
            Make something awesome
          </h2>
          <span>
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </span>
        </div>
        <button className="mx-auto mb-16 mt-6 flex h-16 w-[306px] items-center rounded-[100px] border-2 border-[#FCD34D] pl-12 text-[24px] font-bold leading-6 text-yellowCusto-0 transition delay-150 duration-300 hover:bg-[#581C87] hover:text-[#FCD34D] hover:delay-150 md:ml-auto md:mr-20">
          Request a Quote
          <ArrowRightIcon className="mx-auto my-auto h-6 w-6 text-yellowCusto-0" />
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        // spaceBetween={} // Espaço entre os slides
        // slidesPerView={1} // Número de slides padrão para telas grandes
        // navigation={false} // Habilitar botões de navegação
        // pagination={{ clickable: true }} // Habilitar a paginação
        // scrollbar={{ draggable: true }} // Habilitar a barra de rolagem
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide className="ml-4 md:ml-20">
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[359px] w-[358px] flex-col justify-between rounded-2xl bg-white p-6 shadow-md md:h-[442px] md:w-[364px]">
            <span className="mx-2 mt-[88px]">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
              sollicitudin sit non fringilla. Quam nunc volutpat senectus neque
              eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
              curabitur commodo euismod.
            </span>
            <div className="mb-[10px] mt-4 flex items-center">
              <img
                className="mr-3 h-10 w-10 rounded-full"
                src="/images/slide-client.png"
                alt="client-icon"
              />
              <div>
                <span className="block">Jane Cooper</span>
                <span className="text-sm">10KWh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="mt-16 flex justify-center gap-6 md:ml-20 md:justify-normal">
        <button
          className="h-12 w-12 rounded-[100px] border-2 border-[#FCD34D]"
          onClick={handlePrev}
        >
          <ArrowLeftIcon className="mx-auto my-auto h-6 w-6 text-yellowCusto-0" />
        </button>
        <button
          className="h-12 w-12 rounded-[100px] border-2 border-[#FCD34D]"
          onClick={handleNext}
        >
          <ArrowRightIcon className="mx-auto my-auto h-6 w-6 text-yellowCusto-0" />
        </button>
      </div>
    </section>
  );
}
