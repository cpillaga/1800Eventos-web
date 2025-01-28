"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import CheckoutForm from "../default/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import LoginScreen from "../default/login/LoginScreen";
// import { DoNotDisturbOnTotalSilenceOutlined } from "@mui/icons-material";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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
  setEnSesion,
  CONSULTAR_IMAGEN_EVENTOS_URL
}) {

  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);
  const [descuento, setDescuento] = useState(0.00)
  const [cargoServicio, setCargoServicio] = useState(1.00)
  const [impuesto, setImpuesto] = useState(1.13)
  const [path, setPath] = useState('/')
  const [dataSend, setDataSend] = useState({})
  const total = valorTotal + descuento + cargoServicio + impuesto;
  const [showStripe, setShowStripe] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          setHasToken(true);
      }
  }, []);

  const handleButtonClick = () => {
      const token = localStorage.getItem('token');
      if (!token) {
          // router.push('/login');
          setShowLoginModal(true);
      } else {
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
          valorTotal: total,
          initConfig: initConfig,
          etapas: JSON.stringify(etapas),
          localidades: JSON.stringify(localidades),
        };
      
        localStorage.setItem('teamDetailsData', JSON.stringify(queryData));
        //mostrar Stripe
        setShowStripe(true);
      }
  };

  const handleCloseModalLogin = () => {
    setShowLoginModal(false);
  };

  const convertToCents = (amount) => {
      return amount * 100;
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
                height: 215,
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
                        src={CONSULTAR_IMAGEN_EVENTOS_URL+'/'+id}
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
                        // marginTop:'12%',
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
                        {showStripe ? (
                              <Elements
                                  stripe={stripePromise}
                                  options={{
                                      mode: "payment",
                                      amount: convertToCents(10),
                                      currency: "usd"
                                  }}
                              >
                                  <CheckoutForm
                                      stringValor={total}
                                      open={open}
                                      onClose={() => setShowStripe(false)}
                                      amount={convertToCents(10)}
                                  />
                              </Elements>
                              ) : (
                                  <button
                                      onClick={handleButtonClick}
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
                                      }}
                                  >
                                      <LocalMallIcon fontSize="small" />
                                      Comprar Ahora
                                  </button>
                              )}

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
      
      <LoginScreen open={showLoginModal} handleClose={handleCloseModalLogin} 
        setToken={setHasToken} 
        id={id} idUser={idUser} title={title} price={price} date={date} 
        description={description} location={location} image={image} 
        availableTickets={availableTickets} etapas={etapas} 
        localidades={localidades}              
      />
    </>
  );
}
