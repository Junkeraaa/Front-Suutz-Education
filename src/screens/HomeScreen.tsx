// src/screens/HomeScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageContainer}>
      {/* Top Bar */}
      <header style={styles.topBar}>
        <h2 style={styles.logo}>Suutz Education</h2>
        <nav style={styles.nav}>
          <button onClick={() => navigate('/')} style={styles.navButton}>
            Home
          </button>
          <button onClick={() => navigate('/login')} style={styles.navButton}>
            Login
          </button>
          <button onClick={() => navigate('/register')} style={styles.navButton}>
            Sign Up
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.imageContainer}>
          <img src="/src/assets/212.png" alt="Background" style={styles.backgroundImage} />
          <div style={styles.textOverlay}>
            <h1 style={styles.title}>Largest immersive financial education platform</h1>
            <p style={styles.subtitle}>Sign up to go from zero to billion.</p>
            <button onClick={() => navigate('/register')} style={styles.signupButton}>
              Sign Up
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <footer style={styles.bottomBar}>
        <img src="/src/assets/inicial1.jpg" alt="Image 1" style={styles.bottomImage} />
        <img src="/src/assets/inicial2.png" alt="Image 2" style={styles.bottomImage} />
        <img src="/src/assets/inicial3.jpg" alt="Image 3" style={styles.bottomImage} />
        <img src="/src/assets/inicial4.jpg" alt="Image 4" style={styles.bottomImage} />
      </footer>
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
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    backgroundColor: '#007bff',
    color: '#ffffff',
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
