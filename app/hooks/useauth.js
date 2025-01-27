// hooks/useauth.js
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const guest = localStorage.getItem('guest');
        if (!token && !guest) {
            router.push('/login');
        }
    }, [router]);
};

export default useAuth;
