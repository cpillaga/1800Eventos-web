"use client";
import { obtener_tickets } from "@/components/api/TicketsApi";
import React from "react";
import { useEffect, useState } from "react";
import { Typography, Link } from '@mui/material';

function TicketsPage() {

    const [idConsulta, setIdConsulta] = useState(null);
    const [ticketsArray, setTicketsArray] = useState([])

    useEffect(() => {

        const storedData = sessionStorage.getItem("userData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setIdConsulta(parsedData.id || null);
        }

    }, []);

    useEffect(() => {

        console.log("Consulta: ", idConsulta)

        if (idConsulta) {

            obtener_tickets({ user: idConsulta })
                .then((res) => {
                    console.log("Tickets Obtenidos: ", res);
                    if (res.data) {
                        setTicketsArray(res.data.ticket)
                    }
                })
                .catch((err) => {
                    console.error("Error al obtener los Tickets: ", err);
                });
        }
    }, [idConsulta]);

    const generateUniqueValue = (idTicket, idEvento) => {
        const timestamp = Date.now();
        const randomValue = Math.floor(Math.random() * 100000);
        return `${timestamp}-${randomValue}`;
    }

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
            }}
        >

            {ticketsArray.map((t, index) => (

                <div
                    key={t?._id || index}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 20
                    }}
                >

                    <div
                        style={{
                            width: "150px",
                            height: "200px",
                            borderRadius: "5px",
                            backgroundColor: "#EF7C25",
                            padding: "10px",
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.4)",
                        }}
                    >


                        <div
                            style={{
                                position: 'relative',
                                top: '40px',
                                transform: 'rotate(90deg)',
                                // backgroundColor: 'green', 
                                width: 180,
                            }}
                        >
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: 18,
                                    fontWeight: 600
                                }}
                            >
                                Localidad - Etapa
                            </p>
                            {t.stageId !== null ?
                                (
                                    <div>
                                        Etapa VIP
                                    </div>
                                )
                                :
                                (
                                    <p
                                        style={{
                                            borderRadius: 10,
                                            textAlign: 'center',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            paddingTop: 15,
                                            paddingBottom: 15,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            backgroundColor: 'white',
                                            color: '#EF7C25',
                                            alignSelf: 'center',
                                            justifySelf: 'center',
                                            marginTop: 15
                                        }}
                                    >
                                        General
                                    </p>
                                )
                            }
                        </div>

                        <div
                            style={{
                                position: 'relative',
                                bottom: '135px',
                                left: '75px',
                                backgroundColor: "white",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                            }}
                        >

                        </div>

                        <div
                            style={{
                                position: 'relative',
                                top: '40px',
                                right: '-75px',
                                backgroundColor: "white",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                            }}
                        >

                        </div>

                    </div>

                    <div
                        style={{
                            width: "650px",
                            height: "200px",
                            borderRadius: "5px",
                            backgroundColor: "#ffe0cd",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                // backgroundColor: 'green',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                        >

                            <p
                                style={{
                                    backgroundColor: '#EF7C25',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    borderRadius: 5,
                                    marginLeft: 20,
                                    fontSize: 20,
                                    fontWeight: 800
                                }}
                            >
                                {t.etapa.event.title}
                            </p>
                            <img src="/assets/images/shapes/Banner1800graynot.png" alt="" width={150} height={50} />

                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 10,
                                // backgroundColor: 'red',
                                width: '100%',
                                gap: 5,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 42,

                                // justifyContent: 'center',
                                // alignItems: 'center'
                                // gap: 5,
                            }}
                        >

                            <p style={{ color: '#838383', fontSize: 18, fontWeight: 600 }}> {t.etapa.event.date} </p>
                            <p style={{ color: '#838383', fontSize: 16 }}> {t.etapa.event.location}</p>

                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 10,
                                // backgroundColor: 'blue',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: 57,
                                paddingRight: 45
                                // gap: 5,
                            }}
                        >

                            <p style={{ color: '#838383', fontSize: 16, fontWeight: 600 }}> {generateUniqueValue(t._id, t.etapa.event._id)} </p>

                            <Typography
                                marginLeft={1}
                                fontSize={16}
                                fontWeight={600}
                                component={Link}
                                className="register-text"
                                sx={{
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    color: '#838383'
                                }}
                                onClick={() => { }}
                            >
                                Ver detalles

                            </Typography>

                        </div>

                        {/* <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
                                Tickets
                            </p> */}

                    </div>


                </div>

            ))}



        </div>

    );
}

export default TicketsPage;
