"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


export default function Sidebar({
  id,
  idUser,
  title,
  price,
  date,
  description,
  location,
  image,
  availableTickets,
  isSidebar,
  handleSidebar,
  cantidad,
  valorTotal,
  initConfig,
  etapas,
  localidades,
  flag = true,
  enSesion = false,
  setEnSesion
}) {

  const router = useRouter();

  const [descuento, setDescuento] = useState(0.00)
  const [cargoServicio, setCargoServicio] = useState(1.00)
  const [impuesto, setImpuesto] = useState(1.13)

  const [path, setPath] = useState('/')
  const [dataSend, setDataSend] = useState({})

  const total = valorTotal + descuento + cargoServicio + impuesto;

  const handleClick = () => {
    const queryData = {
      id: id,
      idUser: idUser,
      title: title,
      price: price,
      date: date,
      description: description,
      location: location,
      image: image,
      availableTickets: availableTickets,
      cantidad: cantidad,
      valorTotal: valorTotal,
      initConfig: initConfig,
      etapas: JSON.stringify(etapas),
      localidades: JSON.stringify(localidades),
    };

    console.log("Query Data: ", queryData)

    
    localStorage.setItem('teamDetailsData', JSON.stringify(queryData));
  
  };

  return (
    <>
      {/* Start sidebar widget content */}
      <div
        className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : "close-sidebar"
          }`}
      >
        <div
          // className="xs-overlay xs-bg-black" 
          onClick={handleSidebar}
        >

        </div>

        <div className="xs-sidebar-widget" style={{ backgroundColor: '#E5E7EB' }}>
          <div className="sidebar-widget-container">

            {/* <div className="widget-heading">
              <span className="close-side-widget" onClick={handleSidebar}>
                X
              </span>
            </div> */}

            <div
              className="sidebar-textwidget"
              style={{
                paddingTop: 12,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 15
              }}
            >
              <div // className="sidebar-info-contents"
              >
                <div
                // className="content-inner"
                >
                  <div
                    style={{
                      borderRadius: 10,
                      boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  // className="logo"
                  >
                    {/* <Link href="/"> */}

                    {image !== undefined && (

                      <img
                        src={initConfig + image}
                        style={{
                          borderRadius: 10,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />

                    )}

                    {/* </Link> */}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '106%',
                      left: '5.5%',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      justifySelf: 'center',
                      alignSelf: 'center',
                      paddingTop: 5,
                      paddingLeft: 15,
                      paddingBottom: 7,
                      boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                    }}
                  >

                    <div
                      style={{
                        width: '305px',
                        color: '#838383',
                        textAlign: 'left'
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          fontStyle: 'normal',
                          fontWeight: 600,
                          color: 'black',
                          marginBottom: 5
                        }}
                      > {description} </p>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          // backgroundColor: 'blue',
                          margin: 0,
                          padding: 0
                          //marginTop: 20
                        }}
                      >

                        <div className="icon" style={{ marginRight: 10 }}>
                          <span className="icon-calendar"></span>
                        </div>

                        <div style={{ marginLeft: 5 }}>
                          <p
                            style={{
                              fontSize: 12,
                              fontStyle: 'normal',
                              fontWeight: 600
                            }}
                          >
                            {date}
                          </p>
                        </div>

                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >

                        <div className="icon" style={{ marginRight: 10 }}>
                          <span className="icon-pin"></span>
                        </div>

                        <div style={{ marginLeft: 5 }}>
                          <p
                            style={{
                              fontSize: 12,
                              fontStyle: 'normal',
                              fontWeight: 600
                            }}
                          >
                            {location}
                          </p>
                        </div>

                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >

                        <div
                          className="icon"
                          style={{
                            marginRight: 10,
                            fontSize: 11
                          }}
                        >
                          <span className="icon-quote"></span>
                        </div>

                        <div style={{ marginLeft: 5 }}>
                          <p
                            style={{
                              fontSize: 12,
                              fontStyle: 'normal',
                              fontWeight: 600
                            }}
                          >
                            Solo para +18
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>

                  {cantidad > 0 &&

                    <div
                      // className="form-inner"
                      style={{
                        position: 'absolute',
                        top: '167%',
                        left: '13%',
                        width: '272px',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        justifySelf: 'center',
                        alignSelf: 'center',
                        paddingTop: 10,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 15,
                        boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)'
                      }}
                    >

                      <div
                        style={{
                          color: '#838383',
                          textAlign: 'center'
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: 600,
                            color: 'black'
                            //marginBottom: 30
                          }}
                        > Detalle de Compra </p>

                        <hr />

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            fontSize: 12
                          }}
                        >

                          <p> Subtotal </p>
                          <p> $ {valorTotal.toFixed(2)} </p>

                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            fontSize: 12
                          }}
                        >
                          <p> Descuento </p>
                          <p> $ {descuento.toFixed(2)} </p>

                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            fontSize: 12
                          }}
                        >
                          <p> Cargo por Servicio </p>
                          <p> $ {cargoServicio.toFixed(2)} </p>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            fontSize: 12
                          }}
                        >
                          <p> Impuesto </p>
                          <p> $ {impuesto.toFixed(2)} </p>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            fontSize: 12
                          }}
                        >
                          <p> Total </p>
                          <p> $ {total.toFixed(2)} </p>
                        </div>


                        <div>
                          
                          <Link
                            href={{
                              pathname: '/login',
                              // query: {
                              //   id: id,
                              //   idUser: idUser,
                              //   title: title,
                              //   price: price,
                              //   date: date,
                              //   description: description,
                              //   location: location,
                              //   image: image,
                              //   availableTickets: availableTickets,
                              //   cantidad: cantidad,
                              //   valorTotal: valorTotal,
                              //   initConfig: initConfig,
                              //   etapas: JSON.stringify(etapas),
                              //   localidades: JSON.stringify(localidades),
                              // },
                            }}
                            onClick={handleClick}
                            className="main-slider__btn thm-btn"
                            style={{
                              color: 'white',
                              backgroundColor: '#ef7c25',
                              borderRadius: 5,
                              fontSize: 12,
                              width: 180,
                              height: 35,
                              marginTop: 10,
                              padding: 0,
                              justifyContent: 'center',
                              justifyItems: 'center',
                              alignContent: 'center',
                              alignItems: 'center',
                              justifySelf: 'center',
                              alignSelf: 'center'
                            }}>
                            
                            <LocalMallIcon fontSize="small" />
                            Comprar Ahora
                          </Link>

                        </div>

                      </div>

                    </div>

                  }


                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* <span className="icon-arrow-right"></span> */}
      {/* End sidebar widget content */}
    </>
  );
}
