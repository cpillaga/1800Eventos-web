"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import TicketsPage from "@/components/default/tickets/TicketsPage";

export default function Home() {

  return (
    <>
        <Layout headerStyle={1} footerStyle={1}>
            <TicketsPage/>
        </Layout>

    </>
  );
}
