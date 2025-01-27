"use client";
import HomePage from "@/components/default/home/HomePage";
import Layout from "@/components/layout/Layout"
// import useAuth from "./hooks/useauth";

export default function Home() {

    // useAuth();

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="">
                <HomePage/>
            </Layout>
        </>
    )

}