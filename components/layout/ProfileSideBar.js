"use client"
import Link from "next/link";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Close, ExpandMore, LocalActivity, ManageAccounts, PersonPinCircle, SaveAs, Visibility, VisibilityOff } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography, TextField, InputAdornment, IconButton, Box , Button } from "@mui/material";
import { editar_usuario } from "../api/SessionApi";
// import { DoNotDisturbOnTotalSilenceOutlined } from "@mui/icons-material";
// import { FaTicketAlt, FaUserEdit, FaTimes } from 'react-icons/fa';

export default function ProfileSideBar({
    isSidebarProfile,
    handleSidebarProfile,
}) {

    const router = useRouter();
    


    const [userData, setUserData] = useState({
        _id: '',
        name: '',
        phone: '',
        email: ''
    });

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [token, setToken] = useState(null);

    const handleClickShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);

    useEffect(() => {
        const userDataFromSession = JSON.parse(localStorage.getItem('userData'));
        if (userDataFromSession) {
            setUserData(userDataFromSession);
        }

        // Verifica token
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, [token]);

   

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        // router.push('/main'); // Redirige al usuario a la página principal
        // router.reload(); // Recarga la página
        window.location.href = '/main';
      };
      

    const handleSave = () => {
        console.log('save??¡');
        const data = {
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            password: password
        };
        handleEditarUsuario(data);
    };

    const handleEditarUsuario = (data) => {
        console.log('id___:', userData._id);
        // setUserData((prevState) => ({ ...prevState, ...data, password: '' }));
        editar_usuario(userData._id, data)
            .then((res) => {
                console.log("Exito: ", res);
                setPassword(''); 
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    const handleChange = (e) => {
        console.log('dderfs');
        console.log(e.target);
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
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
                                color: 'black',
                                fontSize: 16,
                                paddingLeft: 5
                            }}
                        >
                            Mi Cuenta
                        </h3>
                    </div>
                    
                    {token ? (
                        <>
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
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)',
                                    margin:0,
                                    padding:5
                                }}
                            >
                                <div
                                    style={{
                                        flexDirection: 'column',
                                        display: 'flex',
                                        gap: '20px'                         
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#EF7C25',
                                            overflow: 'hidden',
                                            fontSize: 50 * 0.5,
                                            color: '#555',
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
                                        <p> {userData.name} </p>
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
                                        <p> {userData.phone}</p>
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
                                        <p>{userData.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="menu" style={{ marginTop: 20 }}>
                                <Link  href="/tickets" className="menu-item"   style={{ boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)', }}>
                                    <LocalActivity />
                                    <p style={{ fontSize: 14 }}> Mis Tickets </p>
                                </Link>
                                {/* <button className="menu-item"> */}
                                <Accordion style={{ borderRadius: 10 }}>
                                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div style={{ display: 'flex', flexDirection: 'row', color: '#838383', borderRadius: 20 }}>
                                            <ManageAccounts />
                                            <p style={{ fontSize: 14 }}> Editar Perfil</p>
                                        </div>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Box sx={{ mb: 1 }}>
                                                <TextField
                                                    className="input-container-profile"
                                                    label="Nombre"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="name"
                                                    value={userData.name}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box sx={{ mb: 1 }}>
                                                <TextField
                                                    className="input-container-profile"
                                                    label="Telefono"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="phone"
                                                    value={userData.phone}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box sx={{ mb: 1 }}>
                                                <TextField
                                                    className="input-container-profile"
                                                    label="Correo electrónico"
                                                    name="email"
                                                    type="email"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={userData.email}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box sx={{ mb: 1 }}>
                                                <TextField
                                                    className="input-container-profile"
                                                    label="Contraseña"
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    // value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    variant="outlined"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                                <Button
                                                    onClick={handleSave}
                                                    className="main-slider__btn thm-btn"
                                                    style={{
                                                        color: 'white',
                                                        backgroundColor: '#ef7c25',
                                                        borderRadius: 5,
                                                        fontSize: 12,
                                                        width: 180,
                                                        height: 35,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        textDecoration: 'none',
                                                    }}
                                                    startIcon={<SaveAs fontSize="small" />}
                                                >
                                                    Guardar
                                                </Button>
                                            </Box>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                {/* </button> */}
                            </div>

                            <div className="menu" style={{ marginTop: 20 }}>
                                <button className="btn btn-secondary "
                                onClick={() => {
                                    handleLogOut()
                                }}
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" >
                            <button class="btn btn-secondary" onClick={() => {}}>
                                Iniciar sesión
                            </button>
                        </div>


                    )}
                </div>

            </div>

            {/* End sidebar widget content */}
        </>
    );
}
