"use client"
import React, { useEffect } from 'react'
import Banner from "@/components/sections/home1/Banner"
import SlidingText from "@/components/sections/home1/SlidingText"
import BuyTicket from "@/components/sections/home1/BuyTicket"
import BlogOne from "@/components/sections/home1/BlogOne"
import { consultar_eventos, consultar_imagen_eventos } from '@/components/api/EventosApi'
import { useState } from 'react'
import initConfig from '@/components/configs/initConfig'

function HomePage() {

    const CONSULTAR_IMAGEN_EVENTOS_URL = initConfig.host + "/api/eventos/consultarImagenEvento";

    const [eventos, setEventos] = useState([])
    const [guardarTickets, setGuardarTickets] = useState(false)
    const [userData, setUserData] = useState({})

    const [idUser, setIdUser] = useState('')

    useEffect(() => {
        consultar_eventos()
            .then((res) => {
                console.log("Eventos desde la API: ", res)
                if (res && res.data) {

                    setEventos(res.data)

                    // console.log("ID Imagen: ", res.data)
                    // consultar_imagen_eventos(res.data._id)
                    //     .then((img) => {
                    //         console.log("Imagen: ", img)
                    //     })
                    //     .catch((err) => {

                    //     })

                }
                else {
                    setEventos([])
                }


            })
            .catch((err) => {
                console.log("Error desde la API: ", err)
            })
    }, [])

    useEffect(() => {
        const storedData = sessionStorage.getItem('userData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setUserData(parsedData);
            setIdUser(parsedData.id || '');
        }
    }, [eventos]);



    // useEffect(() => {
    //     console.log("Lista Eventos: ", eventos)
    //     console.log("User Data: ", idUser)
    // }, [eventos])


    return (

        <>
            <Banner
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
                CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
            />
            <SlidingText
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
            />
            <BlogOne
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
                CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
            />
            <BuyTicket
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
                CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
            />
        </>
    )
}

export default HomePage