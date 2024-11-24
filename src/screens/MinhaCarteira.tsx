import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MinhaCarteira = () => {

  const walletId = sessionStorage.getItem('walletId')
  const [acoes, setAcoes] = useState({});

  useEffect(() => {
    const fetchAcoes = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/wallet/${walletId}/stocks`);

        console.log(response.data)
        const array = response.data
        const arrayAcoes = [];

        array.forEach(acao => {
          

        });

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchAcoes();
    const intervalId = setInterval(fetchAcoes, 3000);

    return () => clearInterval(intervalId);
  });






  return (
    <div style={styles.container}>
        <MainHeaderLeft tipo={'broker'}/>
        <div style={styles.insideClass}>
          <BrokerHeader tipo={'minhaCarteira'}/>
          <div style={styles.dashboard}>
            {/* {acoes.map((acoesItem, index) => (
                <div key={index} style={styles.class}>
                  <div>
                    <div style={styles.classHeader}>
                      oi
                    </div>
                    oi
                  </div>
                  <div style={styles.classFooter}>
                    oi
                  </div>
                </div>
              ))} */}
          </div>
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'center',
    boxSizing:'border-box'
  },
  title: {
    fontSize: '2rem',
  },
  insideClass:{
    display:"flex",
    flexDirection:"column",
    width:"84vw",
    heigth:"100vh",
    fontFamily:"freeMono",
    fontWeigth:"bold",
    boxSizing:'border-box'
  },
  dashboard:{
    display:"flex",
    flexDirection:"row",
    boxSizing:'border-box'
  }

};

export default MinhaCarteira;