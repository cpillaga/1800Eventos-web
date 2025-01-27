"use client";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/eventflow.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
// import 'owl.carousel'
import "swiper/css/free-mode";
import { dM_Sans, inter } from "@/lib/font";
import useAuth from "./hooks/useauth";
import { metadata } from "./metadata";



export default function RootLayout({ children }) {
  // useAuth();
  return (
    <html lang="en" className={`${dM_Sans.variable} ${inter.variable}`}>
      <body className="body-bg-color-1">

          {children}
      </body>
    </html>
  );
}
