"use client";
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
// import ServicesOne from "@/components/sections/home1/ServicesOne"
// import EventOne from "@/components/sections/home1/EventOne"
import SlidingText from "@/components/sections/home1/SlidingText"
import BuyTicket from "@/components/sections/home1/BuyTicket"
// import TeamOne from "@/components/sections/home1/TeamOne"
// import EventDirection from "@/components/sections/home1/EventDirection"
// import GalleryOne from "@/components/sections/home1/GalleryOne"
// import ScheduleOne from "@/components/sections/home1/ScheduleOne"
// import Brand from "@/components/sections/home1/Brand"
import BlogOne from "@/components/sections/home1/BlogOne"
// import CTAOne from "@/components/sections/home1/CTAOne"
// import AboutUs from "@/components/sections/home1/components/AboutUs"
// import { consultar_eventos } from "@/components/api/EventosApi"
// import { useEffect, useState } from "react"

export default function Home() {

    // const [eventos, setEventos] = useState([])

    // useEffect(() => {
    //     consultar_eventos()
    //         .then((res) => {
    //             console.log("Eventos desde la API: ", res)
    //         })
    //         .catch((err) => {
    //             console.log("Error desde la API: ", err)
    //         })
    // }, [])

    return (
        <>
            {/* Pagina Principal : Bandera */}
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <SlidingText />
                {/* <ServicesOne />
                <EventOne />   */}

                {/* <TeamOne /> 
                <EventDirection />  */}
                {/* <GalleryOne />  */}
                {/* <ScheduleOne /> */}
                {/* <Brand />  */}
                <BlogOne />
                <BuyTicket />

                {/* <BlogOne />
                <BuyTicket /> */}

                {/* <AboutUs/> */}

                {/* <CTAOne /> */}
            </Layout>
        </>
    )
}