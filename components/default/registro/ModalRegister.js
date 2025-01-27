"use client"
import React, { useState } from 'react'
import { Box, Button, Card, Grid, Modal, TextField, Typography } from '@mui/material'
import { crear_usuario } from '@/components/api/SessionApi';


function ModalRegister({
    openRegister,
    setOpenRegister
}) {

    const [emailRegistro, setEmailRegistro] = useState('');
    const [nombreRegistro, setNombreRegistro] = useState('');
    const [telefonoRegistro, setTelefonoRegistro] = useState('');
    const [passwordRegistro, setPasswordRegistro] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [checkTerminos, setCheckTerminos] = useState(false);

    const handleNuevoUsuario = (data) => {

        crear_usuario(data)
            .then((res) => {
                console.log("Exito: ", res)
                setOpenRegister(!openRegister)
            })
            .catch((err) => {
                console.log("Error: ", err)
            })

    }

    return (
        <Modal
            open={openRegister}
            onClose={() => {
                setOpenRegister(false);
            }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '455px',
                    height: '600px',
                    borderRadius: '15px',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    outline: 'none',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column'

                }}
            >

                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        marginTop: '25px',
                        width: 180,
                        height: 60
                    }}
                >
                    <img src="/assets/images/shapes/Banner1800gray.png" alt="" style={{ width: 180, height: 60 }} />
                </div>

                <div className="register-text-modal">
                    <p> Regístrate ahora </p>
                </div>

                <div className="register-details-modal">
                    <p> Bienvenido, ingresa tu información </p>
                </div>

                <div style={{ marginTop: 5 }}>

                    <input 
                        className="input-container-register" 
                        placeholder="Correo electrónico" 
                        onChange={(e)=> setEmailRegistro(e.target.value)}
                    />
                    <input 
                        className="input-container-register" 
                        placeholder="Nombre y Apellido"
                        onChange={(e)=> setNombreRegistro(e.target.value)} 
                    />
                    <input 
                        className="input-container-register" 
                        placeholder="Teléfono/Celular" 
                        onChange={(e)=> setTelefonoRegistro(e.target.value)}
                    />
                    <input 
                        className="input-container-register" 
                        placeholder="Crear contraseña" 
                        onChange={(e)=> setPasswordRegistro(e.target.value)}
                    />
                    <input 
                        className="input-container-register" 
                        placeholder="Confirmar contraseña" 
                        onChange={(e)=> setPasswordConfirm(e.target.value)}
                    />

                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        gap: '20px'
                    }}
                >
                    <div>
                        <input 
                            type="checkbox" 
                            style={{ 
                                marginTop: 10, 
                                width: 20, 
                                height: 20 
                            }}
                            onClick={(e) => setCheckTerminos(!checkTerminos)}
                        />
                    </div>
                    <div className='check-terms-text'>
                        <p style={{ color: 'black' }}>
                            Acepto los términos y condiciones
                        </p>
                    </div>
                </div>


                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        marginTop: 20
                    }}
                >

                    <button
                        className="thm-btn-invite"
                        style={{
                            width: '380px',
                            outline: 'none',
                            border: 'none',
                            borderRadius: 5,
                        }}
                        onClick={() => {

                            const dataSend = {
                                "name": nombreRegistro,
                                "phone": telefonoRegistro,
                                "email": emailRegistro,
                                "password": passwordRegistro
                            }

                            if(passwordRegistro === passwordConfirm){
                                handleNuevoUsuario(dataSend)
                            }
                            else{
                                console.log("Las Contraseñas no Coinciden")
                            }

                        }}
                    >
                        Registrar
                    </button>

                </div>

            </Box>
        </Modal>
    )
}

export default ModalRegister