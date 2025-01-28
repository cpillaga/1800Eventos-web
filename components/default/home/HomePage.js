"use client"
import React, { useEffect } from 'react'
import Banner from "@/components/sections/home1/Banner"
import SlidingText from "@/components/sections/home1/SlidingText"
import BuyTicket from "@/components/sections/home1/BuyTicket"
import BlogOne from "@/components/sections/home1/BlogOne"
import { consultar_eventos, consultar_imagen_eventos } from '@/components/api/EventosApi'
import { useState } from 'react'
import initConfig from '@/components/configs/initConfig'
import { consultar_localidad } from '@/components/api/LocalidadApi'
import { consultar_etapa } from '@/components/api/EtapaApi'

function HomePage() {

    const CONSULTAR_IMAGEN_EVENTOS_URL = initConfig.host + "/api/eventos/consultarImagenEvento";

    const [eventos, setEventos] = useState([])
    const [guardarTickets, setGuardarTickets] = useState(false)
    const [localizaciones, setLocalizaciones] = useState([])
    const [etapas, setEtapas] = useState([])

    const [idUser, setIdUser] = useState('')

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const res = await consultar_eventos();
                console.log("Eventos desde la API: ", res);
                if (res && res.data) {
                    setEventos(res.data);
                } else {
                    setEventos([]);
                }
            } catch (err) {
                console.log("Error desde la API: ", err);
            }
        };

        fetchEventos();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            const storedData = localStorage.getItem('userData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setIdUser(parsedData.id || '');
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchLocalizacion = async () => {
            if (eventos.length > 0) {
                const idEvento = eventos[0]._id;
                try {
                    const res = await consultar_localidad(idEvento);
                    console.log(res);
                    setLocalizaciones(res);
                } catch (err) {
                    console.error("Error al consultar la localización:", err);
                }
            }
        };

        fetchLocalizacion();
    }, [eventos]);

    useEffect(() => {
        const fetchEtapa = async () => {
            if (eventos.length > 0) {
                const idEvento = eventos[0]._id;
                try {
                    const res = await consultar_etapa(idEvento);
                    setEtapas(res);
                    console.log(res);
                } catch (err) {
                    console.error("Error al consultar la etapa:", err);
                }
            }
        };

        fetchEtapa();
    }, [eventos]);


    return (
        <>
            <Banner
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
                CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
                etapas={etapas || []}
                localizaciones={localizaciones.data||[]} 
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
                etapas={etapas || []}
                localizaciones={localizaciones.data||[]} 
            />
            <BuyTicket
                eventos={eventos || []}
                idUser={idUser || ''}
                guardarTickets={guardarTickets}
                CONSULTAR_IMAGEN_EVENTOS_URL={CONSULTAR_IMAGEN_EVENTOS_URL}
                etapas={etapas || []}
                localizaciones={localizaciones.data||[]} 
            />
        </>
    )
}

export default HomePage