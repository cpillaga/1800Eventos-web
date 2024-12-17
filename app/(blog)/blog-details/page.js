"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
// import { useRouter } from 'next/navigation';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Sidebar from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";
import MapDetails from "@/components/elements/MapDetails";

export default function Home() {

  // const router = useRouter();
  // const { query } = router;

  // let data = {};

  // if (query.data) {
  //   data = JSON.parse(query.data); // Deserializa los datos
  // }

  // console.log("Val: ", data);

  // const [data, setData] = useState([]);

  const position = [51.505, -0.09];
  const center = [0.3558, -78.1219];
  const zoom = 15;

  const categories = [
    { name: "Event Prodigy", count: 2, link: "/blog-details" },
    { name: "Stellar Events Co", count: 4, link: "/blog-details" },
    {
      name: "Elite Event Management",
      count: 1,
      link: "/blog-details",
      active: true,
    },
    { name: "Infinite Occasions", count: 6, link: "/blog-details" },
    { name: "Dream Event Planners", count: 3, link: "/blog-details" },
  ];

  const recentPosts = [
    {
      date: "Jan 10, 2024",
      title: "Unforgettable Mome Celebrate Unforgettable Events",
      link: "/blog-details",
    },
    {
      date: "Jun 20, 2024",
      title: "Aliquam an eros justo, posuere lobortis, viverra laoreet",
      link: "/blog-details",
    },
    {
      date: "Jan 15, 2024",
      title: "Aliquam eros justo, posuere loborti viverra laoreet",
      link: "/blog-details",
    },
  ];

  const tags = [
    "All Project",
    "Prodigy",
    "Stellar Events",
    "Occasions",
    "Spectacular",
    "Moments",
  ];

  const [isSidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!isSidebar)
  }

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
    setSidebar(true)
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
              //backgroundColor: 'green'
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
                src="/assets/images/blog/item1.png"
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
                    justifyItems: 'center',
                    alignItems: 'center',
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
                    > Join the Festivi Celebrate Special Moments </p>

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
                          October 19, 2022
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
                          Hacienda La Quinta, Cuenca - Ecuador
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
              //justifyContent: 'center',
              //alignContent: 'center',
              //justifyItems: 'center',
              //alignItems: 'center',
            }}
          >

            <div
              style={{
                color: '#838383',
                borderRadius: 10,
                //backgroundColor: 'blue',
                // marginLeft: isSidebar ? 65 : 0,
                //marginLeft: isSidebar ? null : 100,
                //marginRight: 150,
                marginTop: 20,
                //padding: 40,
                marginBottom: 20,
                width: '65%',
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
                //marginBottom: 60,
                //padding: 40,
                boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.2)',

              }}
            >

              <div style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 5 }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}> Selección de Tickets </p>
              </div>

              <div
                style={{
                  backgroundColor: '#E5E7EB',
                  //padding: 10,
                  //marginTop: 10,
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'black',
                  width: '100%',
                  gap: 30,
                  alignSelf: 'center',
                  justifySelf: 'center'
                }}
              >
                <div
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    padding: 20
                  }}
                >
                  <p style={{ fontSize: 18, fontWeight: 800 }}> $ 15.00 </p>
                </div>

                <div
                  style={{
                    marginLeft: 30,
                    padding: 20
                  }}
                >
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 500 }}> Acceso (Preventa) </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 500 }}> Join the Festivi Celebrate Special Moments </p>
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
                    onClick={decrement}
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
                      {count}
                    </p>

                  </div>

                  <button
                    onClick={() => {
                      increment()
                      // handleSidebar()
                    }}
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
                  Este 1 de noviembre, llega La Bendita, el evento más esperado de las fiestas de Cuenca. Te invitamos a disfrutar de una noche llena de música, energía y entretenimiento, con los mejores DJs
                  Este 1 de noviembre, llega La Bendita, el evento más esperado de las fiestas de Cuenca. Te invitamos a disfrutar de una noche llena de música, energía y entretenimiento, con los mejores DJs
                  Este 1 de noviembre, llega La Bendita, el evento más esperado de las fiestas de Cuenca. Te invitamos a disfrutar de una noche llena de música, energía y entretenimiento, con los mejores DJs
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

                  <div className="icon">
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
                    <LocalPhoneIcon fontSize="large" />
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
                    <MessageIcon fontSize="large" />
                  </div>

                </div>

              </div>


            </div>

          </div>

          <Sidebar
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
            count={count}
          />

        </section>
      </Layout>

    </>
  );
}
