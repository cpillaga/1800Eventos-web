"use client"
import React, { useEffect } from 'react'
import Banner from "@/components/sections/home1/Banner"
import SlidingText from "@/components/sections/home1/SlidingText"
import BuyTicket from "@/components/sections/home1/BuyTicket"
import BlogOne from "@/components/sections/home1/BlogOne"
import { consultar_eventos } from '@/components/api/EventosApi'
import { useState } from 'react'

function HomePage() {

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
            />
            <BuyTicket
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
            />
        </>
    )
}

export default HomePage