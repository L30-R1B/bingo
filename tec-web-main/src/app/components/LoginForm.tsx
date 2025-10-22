"use client";
import React, { useState } from "react";

const API_BASE = 'http://100.124.95.109:3333';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          senha: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('bingoToken', token);

        // Verificar se é admin para redirecionar
        const userResponse = await fetch(`${API_BASE}/auth/profile`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          if (userData.is_admin) {
            window.location.href = '/admin';
          } else {
            window.location.href = '/rooms';
          }
        } else {
          setError('Erro ao carregar perfil do usuário.');
        }
      } else {
        setError('E-mail ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      <div className="forgot-password login-signup-link">
        Esqueceu sua senha?
      </div>

      <button type="submit" className="login-button">
        Entrar
      </button>
    </form>
  );
}