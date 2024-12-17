"use client"
import React from 'react'
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);

const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);

const Marker = dynamic(
    () => import("react-leaflet").then((mod) => mod.Marker),
    { ssr: false }
);

const Popup = dynamic(
    () => import("react-leaflet").then((mod) => mod.Popup),
    { ssr: false }
);

function MapDetails() {

    const position = [51.505, -0.09];
    const center = [0.3558, -78.1219];
    const zoom = 15;

    return (

        <MapContainer
            center={center}
            zoom={zoom}
            style={{
                height: "45.5vh",
                width: "100%", borderWidth: 5, borderColor: 'black'
            }}
            worldCopyJump={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    Ibarra, Imbabura, Ecuador
                </Popup>
            </Marker>
        </MapContainer>


    )
}

export default MapDetails