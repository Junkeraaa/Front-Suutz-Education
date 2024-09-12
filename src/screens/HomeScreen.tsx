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
      <button onClick={() => navigate('/insideClass')} style={styles.button}>
        Dentro da Classe
      </button>
      {/* <button onClick={() => navigate('/insideClassLesson')} style={styles.button}>
        Dentro da aula
      </button> */}
    </div>
  );
};

// Estilos para a página
const styles: Record<string, React.CSSProperties> = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e0e0e0',
    fontFamily: 'serif',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'underline',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative' as const, // Corrigido para 'relative' explicitamente
    width: '100%',
    height: '640px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute' as const, // Corrigido para 'absolute' explicitamente
    top: 0,
    left: 0,
    zIndex: -1,
  },
  textOverlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 1,
    color: '#ffffff',
    padding: '0 20px',
    fontFamily: 'serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  signupButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontFamily: 'serif',
    border: 'none',
    cursor: 'pointer',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
    borderTop: '1px solid #e0e0e0',
    backgroundColor: '#111112',
  },
  bottomImage: {
    width: '23%', // Ajusta o tamanho das imagens para que ocupem a tela toda.
    height: 'auto',
  },
};

export default HomeScreen;
