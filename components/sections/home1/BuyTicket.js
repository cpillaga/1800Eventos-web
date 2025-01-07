"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";
import initConfig from "../../configs/initConfig";

export default function BuyTicket({
  eventos,
  idUser,
  CONSULTAR_IMAGEN_EVENTOS_URL
}) {
  // State for dynamic content
  const [ticketContent, setTicketContent] = useState({
    address: "Mirpur 01 Road N 12 Dhaka Bangladesh",
    timing: "10 Am To 10 Pm 20 April 2024",
    title: "Grab Your Seat Now Or You May Regret it Once",
    description:
      "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences, events bring people together for a shared purpose.",
    buttons: [
      { id: 1, text: "Buy Your Ticket", link: "/contact", class: "buy-ticket__btn-1" },
      // { id: 2, text: "Contact Us", link: "/contact", class: "buy-ticket__btn-2" },
    ],
    ticketImage: "/assets/images/resources/banner2.png",
  });

  return (
    <>
      {/* Buy Ticket Start */}
      <section
        className="buy-ticket"
        style={{
          //width: '100%',
          backgroundColor: 'white',
          boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)', color: '#202226',
          marginTop: 30,
          marginBottom: 40,
          marginLeft: 20,
          marginRight: 20,
          padding: 40,
          borderRadius: 10
        }}
      >

        {eventos.length > 0 && (

          <div className="container" style={{ color: 'black' }}>

            <div className="row" style={{ color: 'black' }}>
              <div className="col-xl-6" style={{ color: 'black' }}>
                <div
                  className="buy-ticket__left wow fadeInLeft"
                  data-wow-delay="100ms"
                  style={{ color: 'black' }}

                >
                  <ul className="buy-ticket__address list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-clock" style={{ color: '#838383' }}></span>
                      </div>
                      <div className="text">
                        <p style={{ color: '#838383' }}>{eventos[eventos.length - 1]?.date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin" style={{ color: '#838383' }}></span>
                      </div>
                      <div className="text">
                        <p style={{ color: '#838383' }}>{eventos[eventos.length - 1]?.location}</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="buy-ticket__title" style={{ color: '#838383' }} >{eventos[eventos.length - 1]?.title}</h3>
                  <p className="buy-ticket__text" style={{ color: '#838383' }}>{eventos[eventos.length - 1]?.description}</p>
                  <div className="buy-ticket__btn-box">
                    {/* {ticketContent.buttons.map((button) => ( */}
                    <Link
                      key={eventos[eventos.length - 1]?.id}
                      href={{
                        pathname: '/blog-details',
                        query: {
                          id: eventos[eventos.length - 1]?._id,
                          title: eventos[eventos.length - 1]?.title,
                          price: eventos[eventos.length - 1]?.price.toString(),
                          location: eventos[eventos.length - 1]?.location,
                          date: eventos[eventos.length - 1]?.date,
                          description: eventos[eventos.length - 1]?.description,
                          image: eventos[eventos.length - 1]?.image,
                          availableTickets: eventos[eventos.length - 1]?.availableTickets,
                          etapas: JSON.stringify(eventos[eventos.length - 1]?.etapas),
                          localidades: JSON.stringify(eventos[eventos.length - 1]?.localidades)
                        },
                      }}
                      className={`thm-btn`}
                    >
                      Comprar
                      <span className="icon-arrow-right"></span>
                    </Link>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="buy-ticket__right wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="buy-ticket__img">
                    <img 
                      // src={initConfig.host + (eventos[eventos.length - 1]?.image || '')} 
                      src={CONSULTAR_IMAGEN_EVENTOS_URL+'/'+eventos[eventos.length - 1]._id}
                      alt="Ticket Image" 
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        )}

      </section>
      {/* Buy Ticket End */}
    </>
  );
}
