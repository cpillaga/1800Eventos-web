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
}) {

  useEffect(() => {
    console.log("Banner: ", initConfig.host + eventos[0]?.image)
  }, [eventos])


  return (

    <>
      {/* banner-one */}
      <section
        className="main-slider"
        style={{
          marginTop: 30,
          marginBottom: 30,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 10,
          boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)', 
          color: '#202226',
          backgroundColor: 'green'
        }}
      >
        <Swiper 
          {...swiperOptions} 
          className="swiper-container thm-swiper__slider"
        >
          <div
            className="swiper-wrapper"
          >
            <SwiperSlide 
              className="swiper-slide"
            >

              {eventos.length > 0 && (
                <div
                  className="main-slider__img"
                >
                  <img
                    src={initConfig?.host + (eventos[0]?.image || '')}
                    // alt={eventos[0]?.title}
                    
                  />
                </div>
              )}

              {/* <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1-orange.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.gray.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1-gray.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3-orange.png" alt="" />
              </div> */}
              
              <div
                className="container"
                style={{ marginLeft: 30 }}
              >

                {eventos.length > 0 && (

                  <>

                    <div className="row" >
                      <div className="col-xl-12">
                        <div 
                          className="main-slider__content" 
                          style={{ 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            justifyItems:'center', 
                            alignContent: 'center', 
                            width: '700px' 
                          }}
                        >
                          <h2 className="main-slider__title" style={{ color: '#838383', textAlign: 'center' }}>
                            EVENTO  <br/><span style={{ color: 'white' }}> DESTACADO </span>
                          </h2>
                          <p className="main-slider__sub-title" style={{ color: '#838383' }}>
                            {eventos[0]?.title}
                          </p>
                          <p className="main-slider__text" style={{ color: '#838383' }}>
                            {eventos[0]?.description}
                            {/* As an AI language model, I don't have personal opinions or points of view.
                        However, I <br /> can tell you that design is a multifaceted field that encompasses various elements. */}
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
                                  availableTickets:eventos[0]?.availableTickets,
                                  etapas: JSON.stringify(eventos[0]?.etapas),
                                  localidades: JSON.stringify(eventos[0]?.localidades),
                                  guardarTickets: guardarTickets
                                },
                              }}
                              className="main-slider__btn thm-btn" 
                              style={{ 
                                color: 'white', 
                                backgroundColor: '#ef7c25', 
                                borderRadius: 30 
                              }}
                            >
                              Purchase Ticket
                              <span className="icon-arrow-right"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </>

                )}

              </div>
            </SwiperSlide>

            {/* <SwiperSlide className="swiper-slide">
                <div className="main-slider__img">
                  <img src="assets/images/resources/main-slider-img-1-2.jpg" alt="" />
                </div>
                <div className="main-slider__shpae-1">
                  <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
                </div>
                <div className="main-slider__shpae-2">
                  <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
                </div>
                <div className="main-slider__start-1">
                  <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
                </div>
                <div className="main-slider__start-2 zoominout">
                  <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
                </div>
                <div className="main-slider__start-3">
                  <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">Music Festival</p>
                        <h2 className="main-slider__title">
                          Discover a World <br /> <span>of Celebration</span>
                        </h2>
                        <p className="main-slider__text">
                          As an AI language model, I don't have personal opinions or points of view. 
                          However, I <br /> can tell you that design is a multifaceted field that encompasses various elements.
                        </p>
                        <ul className="list-unstyled main-slider__address">
                          <li>
                            <div className="icon">
                              <span className="icon-pin"></span>
                            </div>
                            <div className="text">
                              <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-clock"></span>
                            </div>
                            <div className="text">
                              <p>10 Am To 10 Pm 20 April 2024</p>
                            </div>
                          </li>
                        </ul>
                        <div className="main-slider__btn-box">
                          <Link href="/contact" className="main-slider__btn thm-btn">
                            Purchase Ticket
                            <span className="icon-arrow-right"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}

            {/* <SwiperSlide className="swiper-slide">
                <div className="main-slider__img">
                  <img src="assets/images/resources/main-slider-img-1-3.jpg" alt="" />
                </div>
                <div className="main-slider__shpae-1">
                  <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
                </div>
                <div className="main-slider__shpae-2">
                  <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
                </div>
                <div className="main-slider__start-1">
                  <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
                </div>
                <div className="main-slider__start-2 zoominout">
                  <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
                </div>
                <div className="main-slider__start-3">
                  <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">Music Festival</p>
                        <h2 className="main-slider__title">
                          Discover a World <br /> <span>of Celebration</span>
                        </h2>
                        <p className="main-slider__text">
                          As an AI language model, I don't have personal opinions or points of view.
                          However, I <br /> can tell you that design is a multifaceted field that encompasses various elements.
                        </p>
                        <ul className="list-unstyled main-slider__address">
                          <li>
                            <div className="icon">
                              <span className="icon-pin" />
                            </div>
                            <div className="text">
                              <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-clock" />
                            </div>
                            <div className="text">
                              <p>10 Am To 10 Pm 20 April 2024</p>
                            </div>
                          </li>
                        </ul>
                        <div className="main-slider__btn-box">
                          <Link href="/contact" className="main-slider__btn thm-btn">
                            Purchase Ticket <span className="icon-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}

          </div>
        </Swiper>
        {/* <div className="swiper-pagination" id="main-slider-pagination" /> */}

      </section>
      {/* banner-one */}
    </>
  )
}
