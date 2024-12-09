import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import ScheduleTwo from "@/components/sections/home2/ScheduleTwo"
import ServicesTwo from "@/components/sections/home2/ServicesTwo"
import EventTwo from "@/components/sections/home2/EventTwo"
import CounterOne from "@/components/sections/home2/CounterOne"
import Brand from "@/components/sections/home2/Brand"
import ConferenceOne from "@/components/sections/home2/ConferenceOne"
import GalleryTwo from "@/components/sections/home2/GalleryTwo"
import Testimonial from "@/components/sections/home2/Testimonial"
import VideoOne from "@/components/sections/home2/VideoOne"
import TeamTwo from "@/components/sections/home2/TeamTwo"
import BlogTwo from "@/components/sections/home2/BlogTwo"
import PricingOne from "@/components/sections/home2/PricingOne"




export default function Home() {

    return (
        <div className="body-bg-color-2">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <ScheduleTwo />
                <ServicesTwo />
                <EventTwo />
                <CounterOne />
                <Brand />
                <ConferenceOne />
                <GalleryTwo />
                <Testimonial />
                <VideoOne />
                <TeamTwo />
                <PricingOne />
                <BlogTwo />
                


                
            </Layout>
        </div>
    )
}