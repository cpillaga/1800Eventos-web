// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const guest = sessionStorage.getItem('guest');
        if (!token && !guest) {
            router.push('/login');
        }
    }, [router]);

    return children;
};

export default ProtectedRoute;

