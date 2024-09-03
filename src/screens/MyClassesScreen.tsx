
import React from 'react';
import MainHeaderLeft from '../components/MainHeaderLeft';


const MyClassesScreen = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
      <h2 style={styles.title}>Minhas Turmas</h2>
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

export default MyClassesScreen;
