"use client";
// import Layout from "@/components/layout/Layout"
import { useRouter } from 'next/navigation';
import { Alert,Container, Box, Card, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";
import ModalRegister from "@/components/default/registro/ModalRegister";
import { iniciar_sesion } from "@/components/api/SessionApi";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { createPaymentIntent } from '@/components/api/StripeApi';
import CheckoutForm from '../checkout/CheckoutForm';
import convertToCents from '../helpers/convertToCents';
// import handler from '@/app/api/StripeApi';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function LoginScreen() {

    const router = useRouter();
    const [openRegister, setOpenRegister] = useState(false);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    // const [estadoSesion, setEstadoSesion] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Verificar si ya está autenticado y redirigir si es el caso
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData ) {
            router.push('/main');
        }
    }, [router]);

    const handleOpenModalRegister = () => {
        setOpenRegister(!openRegister)
    }

    const handleLogin = async (data) => {
        try {
            console.log(data);
            const res = await iniciar_sesion(data);
            console.log("Data Sesion: ", res.data);

            if (res.data) {
                localStorage.setItem('userData', JSON.stringify(res.data.usuario));
                localStorage.setItem('token', res.data.token);
                // setEstadoSesion(true);
                router.push('/main');
            }
        } catch (err) {
            console.log('errcvbcvcvb', err.response?.data?.msg );
            setErrorMessage(err.response?.data?.msg || 'Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    }

    const handleGuestLogin = () => {
        localStorage.setItem('guest', 'true');
        router.push('/main');
    };

    // useEffect(() => {
    //     console.log("Activa?: ", estadoSesion)
    // }, [estadoSesion]);

    return (
        <>
            <Box
                className="home-container"
            >
                <Card
                    elevation={10}
                    sx={{
                        width: '455px',
                        height: '585px',
                        borderRadius: '15px',
                    }}
                >
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            marginTop: '25px'
                        }}
                    >
                        <img src="/assets/images/shapes/Banner1800gray.png" alt="" />
                    </div>

                    <div className="welcome-text">
                        <p> Bienvenido </p>
                    </div>

                    <div className="welcome-details">
                        <p> Por favor, introduce tus datos </p>
                    </div>

                    <div style={{ marginTop: 30 }}>

                        <input
                            className="input-container"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            onChange={(e) => setEmailLogin(e.target.value)}
                        />
                        <input
                            className="input-container"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPasswordLogin(e.target.value)}
                        />

                    </div>

                    <Grid container display={!!errorMessage ? '':'none'}>
                        <Grid item xs={ 12 } >
                        <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            marginTop: 30
                        }}
                    >
                        <button
                            className="thm-btn-session"
                            style={{
                                marginTop: 20,
                                width: '380px',
                                outline: 'none',
                                border: 'none',
                                borderRadius: 5,
                            }}
                            onClick={() => {

                                const dataLogin = {
                                    email: emailLogin,
                                    password: passwordLogin
                                }
                                handleLogin(dataLogin)
                            }}
                        >
                            Iniciar Sesion
                        </button>
                    </div>

                    {/* <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            marginTop: 12
                        }}
                    >
                        <Link href={"/main"}>
                            <button
                                className="thm-btn-invite"
                                style={{
                                    width: '380px',
                                    outline: 'none',
                                    border: 'none',
                                    borderRadius: 5,
                                }}
                                onClick={handleGuestLogin}
                            >
                                Iniciar Sesion como Invitado
                            </button>
                        </Link>
                    </div> */}

                    <Grid
                        container
                        spacing={2}
                        mt={1}
                    >
                        <Grid xs direction="row" display="flex" justifyContent="center" alignItems="center" margin={2}>

                            <Typography
                                fontSize={15}
                                sx={{
                                    color: '#379221'
                                }}
                                className="register-text-main"
                            >
                                ¿No tienes una cuenta?

                                <Typography
                                    marginLeft={1}
                                    fontSize={15}
                                    component={Link}
                                    className="register-text"
                                    sx={{
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleOpenModalRegister}
                                >
                                    Regístrate Ahora

                                </Typography>
                            </Typography>

                        </Grid>
                    </Grid>

                </Card>

                {openRegister === true && (
                    <ModalRegister
                        openRegister={openRegister}
                        setOpenRegister={setOpenRegister}
                    />
                )}
            </Box>
        </>
    )
}

