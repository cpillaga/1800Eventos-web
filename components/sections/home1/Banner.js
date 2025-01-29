'use client'
import Link from "next/link"
import { useEffect } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import initConfig from "../../configs/initConfig";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev"
  },
  autoplay: {
    delay: 8000
  }
}
export default function Banner({
  eventos,
  idUser,
  guardarTickets,
  CONSULTAR_IMAGEN_EVENTOS_URL,
  localizaciones,
  etapas
}) {

  useEffect(() => {
    console.log("Banner: ", initConfig.host + eventos[0]?.image)
    console.log("Banner 2: ", CONSULTAR_IMAGEN_EVENTOS_URL + '/' + eventos[0]?._id)
    console.log(localizaciones);
    console.log(etapas);
  }, [eventos])


  return (
    <>
    <section
      className="main-slider"
      style={{
        flexShrink: 0,
        color: '#202226',
      }}
    >
      <Swiper
        {...swiperOptions}
        className="swiper-container thm-swiper__slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div>
              {eventos.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '80vh', // Ajusta la altura según sea necesario
              
                    borderRadius: 10,

                  }}
                >
                  <div
                    style={{
                      // width: '40%',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)',
                      padding:'5%',

                    }}
                  >
                    <h2 className="main-slider__title" style={{ color: '#838383', textAlign: 'center' }}>
                      EVENTO <br /><span style={{ color: 'white' }}> DESTACADO </span>
                    </h2>
                    <p className="main-slider__sub-title" style={{ color: '#838383' }}>
                      {eventos[0]?.title}
                    </p>
                    <p className="main-slider__text" style={{ color: '#838383' }}>
                      {eventos[0]?.description}
                    </p>
                    <ul className="list-unstyled main-slider__address">
                      <li>
                        <div className="icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text" style={{ color: '#838383' }}>
                          <p>{eventos[0]?.location}</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <div className="text" style={{ color: '#838383' }}>
                          <p>{eventos[0]?.date}</p>
                        </div>
                      </li>
                    </ul>
                    <div className="main-slider__btn-box">
                      <Link
                        href={{
                          pathname: '/blog-details',
                          query: {
                            id: eventos[0]?._id,
                            idUser: idUser,
                            title: eventos[0]?.title,
                            price: eventos[0]?.price.toString(),
                            location: eventos[0]?.location,
                            date: eventos[0]?.date,
                            description: eventos[0]?.description,
                            image: eventos[0]?.image,
                            availableTickets: eventos[0]?.availableTickets,
                            etapas: JSON.stringify(etapas),
                            localidades: JSON.stringify(localizaciones),
                            guardarTickets: guardarTickets
                          },
                        }}
                        className="main-slider__btn thm-btn"
                        style={{
                          color: 'white',
                          backgroundColor: '#ef7c25',
                          borderRadius: 30,
                        }}
                      >
                        Purchase Ticket
                        <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={CONSULTAR_IMAGEN_EVENTOS_URL + '/' + eventos[0]?._id}
                    className="event-image"  // Agregar una clase para identificar la imagen
                    style={{
                      width: '30%',
                      height: '60vh',  
                      borderRadius: '10px',
                      objectFit: 'cover',  
                    }}
                  />

                </div>
              )}
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>

    <style jsx>{`
      @media (max-width: 768px) {
        .main-slider div[style*='display: flex'] {
          flex-direction: column;
          align-items: center;
          height: auto;
        }
        .event-image {
          display: none;  // Ocultar la imagen cuando la pantalla es menor a 768px
        }
      }
    `}</style>
  </>
  )
}
