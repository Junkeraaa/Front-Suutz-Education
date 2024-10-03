// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../global.css'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAsTeacher, setLoginAsTeacher] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const url = loginAsTeacher
      ? 'http://localhost:3000/api/auth/login/teacher'
      : 'http://localhost:3000/api/auth/login/customer';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      let data = await response.json();

      data = data.data


      if (response.ok) {
        alert('Login realizado com sucesso!');
        sessionStorage.setItem('token', data.token); // Armazenar o token na sessão
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('id', data.id);

        navigate('/myClasses'); // Redirecionar para a nova página
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000); // Esconde a mensagem de erro após 2 segundos
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 2000); // Esconde a mensagem de erro após 2 segundos
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div style={styles.container} onKeyDown={handleKeyPress}>
      {showError && <img src="/src/assets/errorLogin.svg" alt="Erro de Login" style={styles.errorImage} />}

      {/* Fundo com a imagem */}
      <div style={styles.background} />

      {/* Conteúdo central */}
      <div style={styles.content}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={loginAsTeacher}
            onChange={() => setLoginAsTeacher(!loginAsTeacher)}
            style={styles.checkbox}
          />
          <label style={styles.checkboxLabel}>Login como professor</label>
        </div>

        <p style={styles.infoText}>Ainda não possui cadastro?</p>
        <p style={styles.registerText}>Faça agora mesmo.</p>
        <button onClick={() => navigate('/register')} style={styles.registerButton}>
          Sign Up
        </button>

        <button onClick={handleLogin} style={styles.loginButton}>
          Login
        </button>
      </div>

      {/* Imagem do logo clicável no canto superior esquerdo */}
      <img
        src="/src/assets/logo.svg"
        alt="Logo Suutz Education"
        style={styles.logo}
        onClick={() => navigate('/')}
      />

      {/* Texto no canto inferior esquerdo */}
      <p style={styles.bottomText}>Sign up to go from zero to billion.</p>
    </div>
  );
};

// Estilos para a tela de login
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/src/assets/fundoLogin.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    zIndex: 1,
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  input: {
    width: '100%',
    marginBottom: '15px',
    padding: '10px 0',
    fontSize: '1rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #ffffff',
    color: '#ffffff',
    outline: 'none',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  checkbox: {
    marginRight: '8px',
  },
  checkboxLabel: {
    fontSize: '0.9rem',
    color: '#ffffff',
  },
  infoText: {
    fontSize: '0.9rem',
    color: '#ffffff',
    marginTop: '10px',
  },
  registerText: {
    fontSize: '0.9rem',
    color: '#ffffff',
    cursor: 'pointer',
  },
  registerButton: {
    marginTop: '10px',
    background: 'none',
    border: 'none',
    color: '#ff0000',
    cursor: 'pointer',
    fontSize: '1rem',
    textDecoration: 'underline',
  },
  loginButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '150px',
    cursor: 'pointer',
  },
  bottomText: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    fontSize: '1rem',
    color: '#ffffff',
  },
  errorImage: {
    position: 'absolute',
    top: '10px',
    width: '300px',
    zIndex: 2,
  },
};

export default LoginScreen;
