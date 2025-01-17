"use client";
// import Layout from "@/components/layout/Layout"
import { useRouter } from 'next/navigation';
import { Container, Box, Card, Typography, TextField, Button, Grid, Link } from '@mui/material';
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

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function LoginScreen() {

    const router = useRouter();

    const [parsedData, setParsedData] = useState({})
    const [stringValor, setStringValor] = useState('')
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const teamDetailsData = localStorage.getItem('teamDetailsData');
        const teamDetailsDataParsedData = JSON.parse(teamDetailsData);
        setParsedData(teamDetailsDataParsedData)
    }, [])

    useEffect(() => {
        if (parsedData && parsedData.valorTotal) {
            setAmount(parsedData.valorTotal);
            setStringValor(parsedData.valorTotal.toString())
            console.log("Valor Total: ", parsedData.valorTotal)
        }
    }, [parsedData]);

    const [openRegister, setOpenRegister] = useState(false);

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [estadoSesion, setEstadoSesion] = useState(false);

    ///////////////////////////////////////////////////////////////
    const [queryData, setQueryData] = useState(null);
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    ///////////////////////////////////////////////////////////////
    const [open, setOpen] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    const handleOpenModalRegister = () => {
        setOpenRegister(!openRegister)
    }

    const handleLogin = (data) => {

        iniciar_sesion(data)
            .then(async (res) => {

                console.log("Data Sesion: ", res.data)

                if (res.data) {

                    sessionStorage.setItem('userData', JSON.stringify(res.data));
                    const teamDetailsData = localStorage.getItem('teamDetailsData');

                    if (teamDetailsData) {

                        const teamDetailsDataParsed = JSON.parse(teamDetailsData);

                        if (typeof teamDetailsDataParsed === 'object' && teamDetailsDataParsed !== null) {

                            const combinedData = {
                                ...teamDetailsDataParsed,
                                idUser: res.data.id
                            };

                            setQueryData(combinedData);
                            localStorage.setItem('teamDetailsData', JSON.stringify(combinedData));

                            setOpen(true)

                            // router.push('/team-details');

                        }
                        else {
                            console.log('Invalid teamDetailsDataParsed:', teamDetailsDataParsed);
                        }

                    }
                    else {
                        setQueryData({});
                    }

                    // router.push('/team-details');
                }

            })
            .catch((err) => {
                console.log("Error Sesion: ", err)
            })
            .finally()

    }

    // const handleLogin = async (data) => {
    //     try {
    //         const res = await iniciar_sesion(data);
    //         console.log("Data Sesion: ", res.data);

    //         if (res.data) {
    //             sessionStorage.setItem('userData', JSON.stringify(res.data));
    //             const teamDetailsData = localStorage.getItem('teamDetailsData');

    //             if (teamDetailsData) {
    //                 const teamDetailsDataParsed = JSON.parse(teamDetailsData);
    //                 if (typeof teamDetailsDataParsed === 'object' && teamDetailsDataParsed !== null) {
    //                     const combinedData = {
    //                         ...teamDetailsDataParsed,
    //                         idUser: res.data.id, // Replace the idUser property
    //                     };
    //                     setQueryData(combinedData);
    //                     localStorage.setItem('teamDetailsData', JSON.stringify(combinedData));

    //                     // Create a payment intent
    //                     const { client_secret } = await createPaymentIntent(1000); // Example amount in cents
    //                     setClientSecret(client_secret);

    //                     // Navigate to team-details page with the query parameters
    //                     router.push({
    //                         pathname: '/team-details',
    //                         query: combinedData,
    //                     });
    //                     setOpen(true); // Open the modal
    //                 } else {
    //                     console.error('Invalid teamDetailsDataParsed:', teamDetailsDataParsed);
    //                 }
    //             } else {
    //                 setQueryData({});
    //             }
    //         } else {
    //             console.error('Login failed: No data returned');
    //         }
    //     } catch (err) {
    //         console.log("Error Sesion: ", err);
    //     }
    // };

    useEffect(() => {
        console.log("Activa?: ", estadoSesion)
    }, [estadoSesion])

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

                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            marginTop: 30
                        }}
                    >

                        {/* <Link href={"/main" }> */}
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
                        {/* </Link> */}




                    </div>

                    <div
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
                                onClick={() => {

                                }}
                            >
                                Iniciar Sesion como Invitado
                            </button>
                        </Link>

                    </div>

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

                <Elements
                    stripe={stripePromise}
                    options={
                        {
                            mode: "payment",
                            amount: convertToCents(amount),
                            currency: "usd"
                        }
                    }
                >
                    <CheckoutForm
                        stringValor={stringValor}
                        open={open}
                        onClose={() => setOpen(false)}
                        amount={convertToCents(amount)}
                    />
                </Elements>

            </Box>
        </>
    )
}