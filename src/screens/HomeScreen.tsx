// src/screens/HomeScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Suutz Education</h1>
      <button onClick={() => navigate('/login')} style={styles.button}>
        Login
      </button>
      <button onClick={() => navigate('/register')} style={styles.button}>
        Cadastro
      </button>
      <button onClick={() => navigate('/myClasses')} style={styles.button}>
        Minhas classes
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: '10px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default HomeScreen;
