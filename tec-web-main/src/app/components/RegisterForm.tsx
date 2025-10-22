"use client";
import React, { useState } from "react";

const API_BASE = 'http://100.124.95.109:3333';

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: name,
          email: email,
          senha: password,
          is_admin: isAdmin
        })
      });

      if (response.ok) {
        setSuccess("Conta criada com sucesso! Redirecionando para login...");
        // Limpar formulário
        setName("");
        setEmail("");
        setPassword("");
        setIsAdmin(false);
        // Redirecionar para login após 2 segundos
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao criar conta.');
      }
    } catch (error) {
      console.error('Erro no registro:', error);
      setError('Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

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

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="isAdmin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <label htmlFor="isAdmin" className="form-label">
            Conta de administrador
          </label>
        </div>
      </div>

      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
      {success && <div className="success-message" style={{ color: 'green', textAlign: 'center' }}>{success}</div>}

      <button type="submit" className="login-button">
        Criar Conta
      </button>
    </form>
  );
}