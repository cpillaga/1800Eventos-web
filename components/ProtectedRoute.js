// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const guest = localStorage.getItem('guest');
        if (!token && !guest) {
            router.push('/login');
        }
    }, [router]);

    return children;
};

export default ProtectedRoute;

