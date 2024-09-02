
import React from 'react';

const LoginScreen = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tela de Login</h2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '2rem',
  },
};

export default LoginScreen;
