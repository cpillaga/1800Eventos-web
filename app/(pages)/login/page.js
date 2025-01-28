// "use client";
// import LoginScreen from "@/components/default/login/LoginScreen";
// import Layout from "@/components/layout/Layout";
// export default function Home() {

//   return (
//     <>   
//         <LoginScreen />
//     </>
//   );
  
// }
"use client";
import { useState } from 'react';
import LoginScreen from "@/components/default/login/LoginScreen";
import Layout from "@/components/layout/Layout";

export default function Home() {
    const [openLogin, setOpenLogin] = useState(true); // Modal is open by default, change as needed

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    return (
        <>
            <Layout>
                <LoginScreen open={openLogin} handleClose={handleCloseLogin} />
            </Layout>
        </>
    );
}