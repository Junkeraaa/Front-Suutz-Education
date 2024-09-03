
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MinhasTurmas from './screens/minhasTurmas';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/minhas-turmas" element={<MinhasTurmas />} />
    </Routes>
  );
};

export default App;
