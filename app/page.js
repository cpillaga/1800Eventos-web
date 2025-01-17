"use client";
import HomePage from "@/components/default/home/HomePage";
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="">
                <HomePage/>
            </Layout>
        </>
    )

}