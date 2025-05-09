import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await fetch('http://localhost:4000/api/auth/me', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData.data); // بنجيب الـ name من userData.data
                } else {
                    localStorage.removeItem('token');
                    setUser(null);
                }
            } catch (err) {
                console.error('Auth check error:', err);
                localStorage.removeItem('token');
                setUser(null);
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth(); // تشيك أولي
        const interval = setInterval(checkAuth, 2000); // تشيك كل 2 ثانية
        return () => clearInterval(interval); // تنظيف عند التدمير
    }, []);

    const login = async (userData, token) => {
        localStorage.setItem('token', token);
        setUser(userData); // بنجيب الـ name من userData
        await checkAuth(); // تشيك فوري بعد الـ Login
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};