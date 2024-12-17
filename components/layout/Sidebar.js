"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";

export default function Sidebar({
  isSidebar,
  handleSidebar,
  count,
  flag = true,
}) {


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
                    <Link href="/">
                      <img
                        src="/assets/images/blog/item1.png"
                        alt=""
                        style={{
                          borderRadius: 10,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Link>
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
                      padding: 15,
                      boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <div
                      style={{
                        color: '#838383',
                        textAlign: 'left'
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
                      > Join the Festivi Celebrate Special Moments </p>

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

                        <div>
                          <p
                            style={{
                              fontSize: 12,
                              fontStyle: 'normal',
                              fontWeight: 600
                            }}
                          >
                            October 19, 2022
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

                        <div>
                          <p
                            style={{
                              fontSize: 12,
                              fontStyle: 'normal',
                              fontWeight: 600
                            }}
                          >
                            Hacienda La Quinta, Cuenca - Ecuador
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

                        <div>
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

                  {count > 0 &&

                    <div
                      // className="form-inner"
                      style={{
                        position: 'absolute',
                        top: '175%',
                        left: '13%',
                        width: '272px',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        justifySelf: 'center',
                        alignSelf: 'center',
                        padding: 15,
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
                          <p> $ 15.00 </p>

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
                          <p> $ 0.00 </p>

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
                          <p> $ 1.00 </p>
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
                          <p> $ 1.13 </p>
                        </div>


                        <div>
                          <Link href="/team-details" className="main-slider__btn thm-btn"
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
                            {/* <span className="icon-arrow-right"></span> */}
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
      {/* End sidebar widget content */}
    </>
  );
}
