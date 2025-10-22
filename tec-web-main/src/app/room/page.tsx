'use client';

import { useEffect, useState } from 'react';
import Button from "@/app/components/button";
import RoomsCarousel from "@/app/components/RoomsCarousel";

const API_BASE = 'http://100.124.95.109:3333';

export default function ChooseRoom() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('bingoToken');
        if (!token) {
            window.location.href = '/login';
            return;
        }

        const checkUser = async () => {
            try {
                const response = await fetch(`${API_BASE}/auth/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    if (userData.is_admin) {
                        window.location.href = '/admin';
                    }
                } else {
                    localStorage.removeItem('bingoToken');
                    window.location.href = '/login';
                }
            } catch (error) {
                console.error('Erro ao verificar perfil:', error);
                localStorage.removeItem('bingoToken');
                window.location.href = '/login';
            }
        };

        checkUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('bingoToken');
        window.location.href = '/login';
    };

    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="page-container">
            <header>
                <nav className="navbar">
                    <div className="navbar-content" style={{ width: "100%" }}>
                        <img
                            src="/bingo-logo.png"
                            alt="logo"
                            className="navbar-logo"
                        />

                        <div className="navbar-links">
                            <a className="nav-links">Como jogar</a>
                            <a className="nav-links">Salas</a>
                            <a className="nav-links">Minha conta</a>
                        </div>

                        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
                            <Button variant="primary" onClick={handleLogout}>Sair</Button>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div className="choose-room-container">
                    <h1 className="title">Escolha sua sala e parta para a diversão!</h1>
                    <RoomsCarousel />
                </div>
            </main>
        </div>
    );
}