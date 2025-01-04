"use client";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/default/home/HomePage";
export default function Home() {

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="">
        <HomePage />
      </Layout>
    </>
  );
  
}
