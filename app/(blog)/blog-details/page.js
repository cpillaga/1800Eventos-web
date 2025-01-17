"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import initConfig from "@/components/configs/initConfig";
// import MessageIcon from '@mui/icons-material/Message';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";
import MapDetails from "@/components/elements/MapDetails";

export default function Home() {

  const CONSULTAR_IMAGEN_EVENTOS_URL = initConfig.host + "/api/eventos/consultarImagenEvento";

  const id = useSearchParams().get('id');
  const idUser = useSearchParams().get('idUser');
  const title = useSearchParams().get('title');
  const price = useSearchParams().get('price');
  const date = useSearchParams().get('date');
  const description = useSearchParams().get('description');
  const location = useSearchParams().get('location');
  const image = useSearchParams().get('image');
  const availableTickets = useSearchParams().get('availableTickets');

  const etapasString = useSearchParams().get('etapas');
  const localidadesString = useSearchParams().get('localidades');
  const etapas = etapasString ? JSON.parse(etapasString) : [];
  const localidades = localidadesString ? JSON.parse(localidadesString) : [];

  const [isSidebar, setSidebar] = useState(false)
  const [enSesion, setEnSesion] = useState(false)

  const handleSidebar = () => {
    setSidebar(!isSidebar)
  }

  const [counts, setCounts] = useState(new Array(etapas.length).fill(0));
  const [valorTotal, setValorTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const cantidadTotal = (newCounts) => {

    const total = newCounts.reduce((sum, count) => sum + count, 0);
    setCantidad(total);
    // setSidebar(total > 0)

    const totalPrecio = newCounts.reduce(
      (sum, count, index) => sum + count * etapas[index].price,
      0
    );
    setValorTotal(totalPrecio);

  };

  const increment = (index) => {

    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);

    cantidadTotal(newCounts);

  };

  const decrement = (index) => {

    const newCounts = [...counts];

    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }

    setCounts(newCounts);
    cantidadTotal(newCounts);

  };

  useEffect(() => {
    handleSidebar()
  }, [])

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (

    <>

      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog_Details">

        <section>

          <div
            style={{
              width: '550px',
              height: '350px',
              marginTop: 0,
              marginLeft: 210,
              flexDirection: 'row',
              display: 'flex',
              gap: 15,
              // backgroundColor: 'green'
            }}
          >

            <div
              style={{
                boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                padding: 5,
                borderRadius: 10,
                width: '100%',
              }}
            >
              <img
                src={CONSULTAR_IMAGEN_EVENTOS_URL+'/'+id}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />

              <div
                style={{
                  //backgroundColor: 'yellow',
                  width: '70%',
                  height: '200px',
                  margin: 10,
                  justifyContent: 'center',
                  alignContent: 'center',
                  justifyItems: 'center',
                  alignItems: 'center',
                  justifySelf: 'center',
                  alignSelf: 'center',

                }}
              >

                <div
                  style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    top: '-100px',
                    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                    justifyContent: 'center',
                    alignContent: 'center',
                    // justifyItems: 'center',
                    // alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    //padding: 40,
                    borderRadius: 10,
                    paddingLeft: 25,
                    paddingRight: 25
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
                        fontSize: 15,
                        fontStyle: 'normal',
                        fontWeight: 600,
                        //marginBottom: 30
                      }}
                    > {title} </p>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 10
                      }}
                    >

                      <div className="icon" style={{ marginRight: 10 }}>
                        <span className="icon-calendar"></span>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: 13,
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
                        marginTop: 10
                      }}
                    >

                      <div className="icon" style={{ marginRight: 10 }}>
                        <span className="icon-pin"></span>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: 13,
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
                        marginTop: 10
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
                            fontSize: 13,
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

              </div>

            </div>

          </div>

          <div
            style={{
              marginTop: 120,
              marginLeft: 120
            }}
          >

            <div
              style={{
                color: '#838383',
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
                width: '65%',
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
                boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',

              }}
            >

              <div style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 5 }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}> Selección de Tickets </p>
              </div>

              {
                etapas.map((e, index) => {

                  return (
                    <div
                      key={e?.id || index}
                      style={{
                        backgroundColor: '#E5E7EB',
                        marginTop: 10,
                        borderRadius: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'black'
                      }}
                    >
                      <div
                        style={{
                          width: '100px',
                          justifyContent: 'center',
                          alignContent: 'center',
                          justifyItems: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <p style={{ fontSize: 16, fontWeight: 800 }}> $ {e.price}.00 </p>
                      </div>

                      <div
                        style={{
                          //backgroundColor: 'blue',
                          width: '458px',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}
                      >
                        <div style={{ paddingLeft: 60}}>
                          <p style={{ fontSize: 16, fontWeight: 500 }}> {e.name} </p>
                        </div>
                        <div style={{ paddingLeft: 60, paddingTop: 10}}>
                          <p style={{ fontSize: 16, fontWeight: 500 }}> {description} </p>
                        </div>
                      </div>



                      <div
                        style={{
                          display: 'flex',
                          width: '200px',
                          color: 'black',
                        }}
                      >
                        <button
                          onClick={() => decrement(index)}
                          style={{
                            backgroundColor: '#EF7C25',
                            color: 'white',
                            border: 'none',
                            width: '70px',
                            height: '100px',
                            fontSize: 30,
                            cursor: 'pointer',
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5
                          }}
                        >
                          -
                        </button>
                        <div
                          style={{
                            width: '70px',
                            height: '100px',
                            fontSize: 30,
                            backgroundColor: '#EF7C25',
                            // backgroundColor: 'azul',
                            color: 'white',
                            justifyContent: 'center',
                            alignContent: 'center',
                            justifyItems: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <p
                            style={{
                              fontSize: 18,
                              fontWeight: 800
                            }}
                          >
                            {counts[index]}
                          </p>

                        </div>

                        <button
                          onClick={() => increment(index)}
                          style={{
                            backgroundColor: '#EF7C25',
                            color: 'white',
                            border: 'none',
                            width: '70px',
                            height: '100px',
                            cursor: 'pointer',
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                            fontSize: 30
                          }}
                        >
                          +
                        </button>
                      </div>


                    </div>
                  )
                })
              }
          
              <div style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 5, paddingTop: 25 }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}> Descripción </p>
              </div>

              <div
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  //marginTop: 10,
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'black',
                  width: '100%',
                  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)'
                }}
              >

                <p>
                  {description}
                </p>

              </div>

              <div style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 5, paddingTop: 25 }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}> Localizacion </p>
              </div>

              <div
                style={{
                  padding: 10,
                  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                  borderRadius: 10
                }}
              >
                {isClient &&
                  <MapDetails>
                  </MapDetails>
                }
              </div>

              <div style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 5, paddingTop: 25 }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}> Organizador </p>
              </div>

              <div
                style={{
                  padding: 10,
                  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >

                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    overflow: 'hidden',
                    fontSize: 50 * 0.5,
                    color: '#555',
                    margin: 20
                  }}
                >

                  <div className="icon-profile">
                    <span className="icon-user" style={{ fontSize: 50 }}></span>
                  </div>

                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    //backgroundColor: 'red',
                    justifyContent: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    width: '60%',
                  }}
                >

                  <div style={{ fontSize: 20, color: 'black' }}>
                    <p> Michael Angelo </p>
                  </div>

                  <div style={{ fontSize: 16, color: '#838383' }}>
                    <p> Organizador del Evento </p>
                  </div>

                </div>

                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    overflow: 'hidden',
                    fontSize: 50 * 0.5,
                    color: '#555',
                    margin: 20
                  }}
                >

                  <div className="icon">
                    {/* <LocalPhoneIcon fontSize="large" /> */}
                  </div>

                </div>

                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    overflow: 'hidden',
                    fontSize: 50 * 0.5,
                    color: '#555',
                    margin: 20
                  }}
                >

                  <div className="icon">
                    {/* <MessageIcon fontSize="large" /> */}
                  </div>

                </div>
              </div>

            </div>
          </div>

          <Sidebar
            id = {id}
            idUser={idUser}
            title = {title}
            price = {price}
            date = {date}
            description = {description}
            location = {location}
            image = {image || ''}
            availableTickets = {availableTickets}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
            cantidad={cantidad}
            valorTotal={valorTotal}
            initConfig={initConfig.host}
            etapas={etapas}
            localidades={localidades}
            enSesion={enSesion}
            setEnSesion={setEnSesion} 
            CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
          />
        </section>
      </Layout>

    </>
  );
}
