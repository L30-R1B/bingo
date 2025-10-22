'use client';

import { useEffect, useState } from 'react';
import Button from "@/app/components/button";

const API_BASE = 'http://100.124.95.109:3333';

interface User {
    id: number;
    nome: string;
    email: string;
    is_admin: boolean;
    saldo: number;
}

export default function AdminPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        is_admin: false
    });

    const token = localStorage.getItem('bingoToken');

    useEffect(() => {
        if (!token) {
            window.location.href = '/login';
            return;
        }

        const checkAdminAndLoadUsers = async () => {
            try {
                // Verificar se é admin
                const profileResponse = await fetch(`${API_BASE}/auth/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (profileResponse.ok) {
                    const userData = await profileResponse.json();
                    if (!userData.is_admin) {
                        window.location.href = '/rooms';
                        return;
                    }
                } else {
                    window.location.href = '/login';
                    return;
                }

                // Carregar usuários
                await loadUsers();
            } catch (error) {
                console.error('Erro:', error);
                setError('Erro ao carregar dados.');
            } finally {
                setLoading(false);
            }
        };

        checkAdminAndLoadUsers();
    }, [token]);

    const loadUsers = async () => {
        try {
            const response = await fetch(`${API_BASE}/users`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const usersData = await response.json();
                setUsers(usersData);
            } else {
                setError('Erro ao carregar usuários.');
            }
        } catch (error) {
            setError('Erro ao carregar usuários.');
        }
    };

    const handleDeleteUser = async (id: number) => {
        if (!confirm('Tem certeza que deseja excluir este usuário?')) {
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setUsers(users.filter(user => user.id !== id));
            } else {
                alert('Erro ao excluir usuário.');
            }
        } catch (error) {
            alert('Erro ao excluir usuário.');
        }
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
        setFormData({
            nome: user.nome,
            email: user.email,
            senha: '', // Senha em branco, pois não queremos alterar a menos que seja explicitado
            is_admin: user.is_admin
        });
        setShowForm(true);
    };

    const handleCreateUser = () => {
        setEditingUser(null);
        setFormData({
            nome: '',
            email: '',
            senha: '',
            is_admin: false
        });
        setShowForm(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editingUser ? `${API_BASE}/users/${editingUser.id}` : `${API_BASE}/auth/register`;
            const method = editingUser ? 'PATCH' : 'POST';

            const body: any = {
                nome: formData.nome,
                email: formData.email,
                is_admin: formData.is_admin
            };

            // Se estiver criando ou se a senha não estiver vazia (para edição)
            if (!editingUser || formData.senha) {
                body.senha = formData.senha;
            }

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                setShowForm(false);
                await loadUsers();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao salvar usuário.');
            }
        } catch (error) {
            alert('Erro ao salvar usuário.');
        }
    };

    if (loading) {
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
                            <a className="nav-links">Administração</a>
                        </div>

                        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
                            <Button variant="primary" onClick={() => {
                                localStorage.removeItem('bingoToken');
                                window.location.href = '/login';
                            }}>Sair</Button>
                        </div>
                    </div>
                </nav>
            </header>

            <main style={{ padding: '20px' }}>
                <h1 className="title">Gerenciar Usuários</h1>

                <Button variant="primary" onClick={handleCreateUser} style={{ marginBottom: '20px' }}>
                    Criar Usuário
                </Button>

                {showForm && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '400px'
                        }}>
                            <h2>{editingUser ? 'Editar Usuário' : 'Criar Usuário'}</h2>
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>Nome:</label>
                                    <input
                                        type="text"
                                        value={formData.nome}
                                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '8px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>E-mail:</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '8px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>Senha:</label>
                                    <input
                                        type="password"
                                        value={formData.senha}
                                        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                                        placeholder={editingUser ? "Deixe em branco para não alterar" : ""}
                                        required={!editingUser}
                                        style={{ width: '100%', padding: '8px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={formData.is_admin}
                                            onChange={(e) => setFormData({ ...formData, is_admin: e.target.checked })}
                                        />
                                        Administrador
                                    </label>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button type="submit" variant="primary">
                                        Salvar
                                    </Button>
                                    <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                                        Cancelar
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>E-mail</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Admin</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Saldo</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.nome}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.is_admin ? 'Sim' : 'Não'}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>R$ {user.saldo?.toFixed(2) || '0.00'}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <Button variant="primary" onClick={() => handleEditUser(user)} style={{ marginRight: '5px' }}>
                                        Editar
                                    </Button>
                                    <Button variant="secondary" onClick={() => handleDeleteUser(user.id)}>
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}