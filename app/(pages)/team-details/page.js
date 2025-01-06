"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { useSearchParams } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Princess_Sofia } from "next/font/google";
import { crear_tickets } from "@/components/api/TicketsApi";
import { useRouter } from 'next/navigation';

export default function Home() {

  const [teamDetails, setTeamDetails] = useState(null);

  useEffect(() => {
   
    const teamDetailsData = localStorage.getItem('teamDetailsData');
    if (teamDetailsData) {
      const parsedData = JSON.parse(teamDetailsData);
      setTeamDetails(parsedData);
    }
  }, []);

  const id = teamDetails?.id;
  const idUser = teamDetails?.idUser;
  const title = teamDetails?.title;
  const price = teamDetails?.price;
  const date = teamDetails?.date;
  const description = teamDetails?.description;
  const location = teamDetails?.location;
  const image = teamDetails?.image;
  const availableTickets = teamDetails?.availableTickets;
  const cantidad = teamDetails?.cantidad;
  const valorTotal = teamDetails?.valorTotal;
  const initConfig = teamDetails?.initConfig;

  const etapasString = teamDetails?.etapas;
  const localidadesString = teamDetails?.localidades;
  const etapas = etapasString ? JSON.parse(etapasString) : [];
  const localidades = localidadesString ? JSON.parse(localidadesString) : [];

  const [text, setText] = useState("https://example.com");
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {

    const cant = cantidad;
    const newDataArray = [];

    for (let i = 0; i < cant; i++) {
      newDataArray.push({
        eventId: id,
        userId: idUser,
        isValid: true,
        purchaseDate: date,
        paymentStatus: "PENDING",
        stageId: etapas[0]._id,
        localidadId: localidades[0].id,
        isTransferred: false,
        qrId: `${id}-${i + 1}`,
        qrCode: `https://example.com/ticket/${id}-${i + 1}`,
        label: `Ticket ${i + 1}`
      });
    }

    setDataArray(newDataArray)
 
  }, [id])

  const [estadoCompra, setEstadoCompra] = useState('Descargar Ticket')
  const [ticket, setTicket] = useState({
    id: id,
    idUser: idUser,
    title: title,
    price: price,
    data: date,
    description: description,
    location: location,
    image: image,
    availableTickets: availableTickets,
    cantidad: cantidad,
    valorTotal: valorTotal,
    initConfig: initConfig,
    etapas: etapas,
    localidades: localidades
  })

  const handleCreateTickets = (data) => {

    crear_tickets(data)
      .then((res) => {
       
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }


  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Team Details"
        estadoCompra={estadoCompra}
        ticket={ticket || {}}
        handleCreateTickets={handleCreateTickets}
        dataArray={dataArray}
      >
        <div>
          {/*Team Details Info Start*/}
          <section
            // className="team-details" 
            style={{
              // backgroundColor: 'red', 
              padding: 20
            }}
          >
            <div
              style={{
                // backgroundColor: 'green', 
                padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
              }}
            >

              <div style={{
                // backgroundColor: 'blue', 
                padding: 0,
                boxShadow: "-4px 4px 6px rgba(0, 0, 0, 0.3), 4px -4px 0 rgba(0, 0, 0, 0)",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                // boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)', 
                color: '#202226'
              }}>

                <div>

                  {image &&
                    <img
                      src={initConfig + image}
                      // alt={member.name}
                      style={{
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        width: '480px',
                        height: '380px',
                        objectFit: 'cover'
                      }}
                    />
                  }

                </div>

              </div>

              <div style={{
                // backgroundColor: 'yellow', 
                padding: '42px 42px 0px 42px', borderBottomRightRadius: 10, borderTopRightRadius: 10, height: '380px', boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3), -4px -4px 0 rgba(0, 0, 0, 0)', color: '#202226'
              }}>

                <div style={{
                  // backgroundColor: 'blue', 
                  fontSize: 24, fontWeight: 1000, color: '#838383'
                }}>
                  <p> {title} </p>
                </div>

                <div style={{
                  display: 'flex', flexDirection: 'row', gap: 50, marginTop: 20,
                  // backgroundColor: 'orange' 
                }}>

                  <div style={{ marginTop: 10, marginLeft: 15 }} >
                    <p style={{ color: 'black', fontWeight: 800 }}> EVENTO </p>
                    <p style={{ color: '#838383', fontWeight: 400 }}> {title}</p>
                  </div>
                  <div style={{ marginTop: 10 }} >
                    <p style={{ color: 'black', fontWeight: 800 }}> FECHA </p>
                    <p style={{ color: '#838383', fontWeight: 400 }}> {date}</p>
                  </div>

                </div>

                <div style={{
                  display: 'flex', flexDirection: 'row', gap: 50, marginTop: 20
                  // backgroundColor: 'pink'
                }}>

                  <div style={{ marginTop: 10, marginLeft: 15 }}>
                    <p style={{ color: 'black', fontWeight: 800 }}> CANTIDAD </p>
                    <p style={{ color: '#838383', fontWeight: 400 }}> {cantidad} </p>
                  </div>
                  {/* <div style={{ marginTop: 10 }}>
                    <p style={{ color: 'black', fontWeight: 800 }}> HORA </p>
                    <p style={{ color: '#838383', fontWeight: 400 }}> 1 </p>
                  </div> */}

                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    //backgroundColor: 'purple',
                    //padding: 20,
                    marginTop: 20,
                    paddingLeft: 12
                  }}
                >

                  <div style={{
                    // backgroundColor: 'red', 
                    padding: 10
                  }}
                  >

                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f0f0f0',
                        overflow: 'hidden',
                        fontSize: 25,
                        color: '#555',
                        //margin: 20
                      }}
                    >

                      <div className="icon">
                        <span className="icon-user" style={{ fontSize: 25 }}></span>
                      </div>

                    </div>

                  </div>

                  <div style={{
                    // backgroundColor: 'green', 
                    padding: 10
                  }}>

                    <div style={{ fontSize: 18, color: 'black', fontWeight: 500 }}>
                      <p> Michael Angelo </p>
                    </div>

                    <div style={{ fontSize: 16, color: '#838383' }}>
                      <p> Organizador del Evento </p>
                    </div>

                  </div>


                </div>

              </div>

              <div
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  marginLeft: 25,
                  borderRadius: 10,
                  boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)',
                  color: '#202226',
                  width: 400
                }}
              >
                <Carousel
                  showIndicators={false}
                  showArrows={true}
                  autoPlay={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  labels={false}
                // showStatus={true}
                // statusFormatter={(current, total) => (
                //   <div
                //     style={{
                //       position: 'absolute',
                //       top: '0%',
                //       right: '50%',
                //       width: 70,
                //       color: "black", 
                //       padding: "0px 0px",
                //       borderRadius: "5px",
                //       fontSize: "14px",
                //       justifyContent: 'center',
                //       alignItems: 'center',
                //       textAlign: 'center'
                //     }}
                //   >
                //     Boleto <br/> {current} de {total}
                //   </div>
                // )}
                >

                  {dataArray.map((qr) => ( 
                    <div key={qr.qrId}>
                      <QRCodeSVG value={qr.qrCode} size={340} />
                    </div>
                  ))}

                </Carousel>
              </div>
            </div>

          </section>

        </div>
      </Layout>
    </>
  );
}
