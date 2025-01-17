"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Close, ExpandMore, LocalActivity, ManageAccounts, PersonPinCircle, SaveAs } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
// import { DoNotDisturbOnTotalSilenceOutlined } from "@mui/icons-material";
// import { FaTicketAlt, FaUserEdit, FaTimes } from 'react-icons/fa';

export default function ProfileSideBar({
    isSidebarProfile,
    handleSidebarProfile,
}) {

    return (
        <>

            <div
                className={`xs-sidebar-group info-group info-sidebar ${isSidebarProfile ? "isActive" : "close-sidebar"
                    }`}
            >

                <div
                    className="xs-sidebar-widget"
                    style={{ backgroundColor: '#E5E7EB', padding: 20 }}
                >

                    <div>

                        <Close
                            style={{
                                width: 19,
                                height: 19,
                                color: '#838383',
                                position: 'absolute',
                                top: 21,
                                right: 22,
                                fontWeight: 800
                            }}
                            onClick={handleSidebarProfile}
                        />

                        <h3
                            className="menu-profile-title"
                            style={{
                                // textAlign: 'center',
                                color: 'black',
                                fontSize: 16,
                                paddingLeft: 5

                            }}
                        >
                            Mi Cuenta
                        </h3>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div
                            style={{
                                flexDirection: 'column',
                                display: 'flex',
                                // backgroundColor: 'blue',
                                gap: '30px'
                                // height: '100%'
                            }}
                        >

                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#EF7C25',
                                    overflow: 'hidden',
                                    fontSize: 50 * 0.5,
                                    color: '#555',

                                    // margin: 20,
                                }}
                            >

                                <div className="icon">
                                    <span
                                        className="icon-user"
                                        style={{
                                            fontSize: 50, color: 'white',
                                            alignSelf: 'center', justifyContent: 'center'
                                        }}
                                    >

                                    </span>
                                </div>

                            </div>

                        </div>

                        <div
                            style={{
                                // display: 'flex',
                                // flexDirection: 'column',
                                // backgroundColor: 'red',
                                padding: 10,
                                width: '60%',
                                borderRadius: 10
                            }}
                        >

                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 13
                                }}
                            >
                                <p> Nombre: </p>
                            </div>
                            <div
                                style={{
                                    color: '#838383',
                                    fontSize: 13
                                }}
                            >
                                <p> User Prueba </p>
                            </div>

                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 13
                                }}
                            >
                                <p> Telefono: </p>
                            </div>
                            <div
                                style={{
                                    color: '#838383',
                                    fontSize: 13,

                                }}
                            >
                                <p> 0983334944</p>
                            </div>

                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 13
                                }}
                            >
                                <p> Correo: </p>
                            </div>
                            <div
                                style={{
                                    color: '#838383',
                                    fontSize: 13,
                                }}
                            >
                                <p> correoprueba@gmail.com </p>
                            </div>

                        </div>

                    </div>



                    <div className="menu" style={{ marginTop: 20 }}>
                        <button className="menu-item" style={{ boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)', }}>
                            <LocalActivity />
                            <p style={{ fontSize: 14 }}> Mis Tickets </p>
                        </button>
                        {/* <button className="menu-item"> */}
                        <Accordion style={{ borderRadius: 10 }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', color: '#838383', borderRadius: 20 }}>
                                    <ManageAccounts />
                                    <p style={{ fontSize: 14 }}> Editar Perfil</p>
                                </div>
                            </AccordionSummary>

                            <AccordionDetails>

                                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#E5E7EB', padding: 10, width: '100%', borderRadius: 10, gap: '5px' }}>

                                    {/* <div
                                        style={{
                                            color: '#838383',
                                            fontSize: 13
                                        }}
                                    >
                                        <p> Nombre: </p>
                                    </div> */}
                                    <div>
                                        <input
                                            className="input-container-profile"
                                            placeholder="Nombre"
                                        // type="email"
                                        // id="email"
                                        // name="email"
                                        // onChange={(e) => setEmailLogin(e.target.value)}
                                        />
                                    </div>

                                    {/* <div
                                        style={{
                                            color: '#838383',
                                            fontSize: 13,

                                        }}
                                    >
                                        <p> Telefono: </p>
                                    </div> */}
                                    <div>
                                        <input
                                            className="input-container-profile"
                                            placeholder="Telefono"
                                        // type="email"
                                        // id="email"
                                        // name="email"
                                        // onChange={(e) => setEmailLogin(e.target.value)}
                                        />
                                    </div>

                                    {/* <div
                                        style={{
                                            color: '#838383',
                                            fontSize: 13,

                                        }}
                                    >
                                        <p> Correo: </p>
                                    </div> */}
                                    <div >
                                        <input
                                            className="input-container-profile"
                                            placeholder="Correo electrónico"
                                        // type="email"
                                        // id="email"
                                        // name="email"
                                        // onChange={(e) => setEmailLogin(e.target.value)}
                                        />
                                    </div>

                                    <div style={{ justifySelf: 'center', alignSelf: 'center'}}>

                                        <Link
                                            href={{
                                                pathname: '#',
                                            }}
                                            onClick={() => {}}
                                            className="main-slider__btn thm-btn"
                                            style={{
                                                color: 'white',
                                                backgroundColor: '#ef7c25',
                                                borderRadius: 5,
                                                fontSize: 12,
                                                width: 180,
                                                height: 35,
                                                marginTop: 10,
                                                padding: 0,
                                                justifyContent: 'center',
                                                justifyItems: 'center',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                justifySelf: 'center',
                                                alignSelf: 'center'
                                            }}>

                                            <SaveAs fontSize="small" />
                                            Guardar
                                        </Link>

                                    </div>



                                </div>

                            </AccordionDetails>
                        </Accordion>
                        {/* </button> */}
                    </div>


                </div>

            </div>

            {/* End sidebar widget content */}
        </>
    );
}
