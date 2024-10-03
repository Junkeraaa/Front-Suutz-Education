
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MyClassesScreen from './screens/MyClassesScreen';
import InsideClass from './screens/InsideClass';
import InsideClassLesson from './screens/InsideClassLesson';
import BrokerOficial from './screens/BrokerOficial';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/myClasses" element={<MyClassesScreen />} />
      <Route path="/insideClass/:id" element={<InsideClass />} />
      <Route path="/insideClassLesson" element={<InsideClassLesson />} /> 
      <Route path="/brokerOficial" element={ <BrokerOficial />}/>
    </Routes>
  );
};

export default App;
