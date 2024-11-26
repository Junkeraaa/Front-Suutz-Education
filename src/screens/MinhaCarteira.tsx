import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MinhaCarteira = () => {

  const walletId = sessionStorage.getItem('walletId')
  const [acoes, setAcoes] = useState([]);

  useEffect(() => {
    const fetchAcoes = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/wallet/${walletId}/stocks`);
        setAcoes(response.data.data); // Atualiza o estado com os dados da API
        console.log('response', response.data.data)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchAcoes(); // Chamada inicial
    const intervalId = setInterval(fetchAcoes, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, [walletId]);







  return (
    <div style={styles.container}>
        <MainHeaderLeft tipo={'broker'}/>
        <div style={styles.insideClass}>
          <BrokerHeader tipo={'minhaCarteira'}/>
          <div style={styles.dashboard}>
            {acoes.map((acoesItem, index) => (
                <div key={index} style={styles.class}>
                  <div>
                    <div style={styles.classHeader}>
                      {acoesItem.name}
                    </div>
                    Value Now:
                    <div>
                      {acoesItem.currentPrice}
                    </div>
                    Você tem:
                    <div>
                    {acoesItem.stockAmount}
                    </div>
                  </div>
                  <div style={styles.classFooter}>
                    oi
                  </div>
                </div>
              ))}
          </div>
        </div>  
        <div style={styles.totalMoneyInvested}>
              a
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
    fontWeight:"bold",
    boxSizing:'border-box'
  },
  dashboard:{
    display:"flex",
    flexDirection:"row",
    boxSizing:'border-box',
    width:"65vw"
  },

  class:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor:"#ededed",
    border:"1px solid",
    borderRadius:"15px",
    borderColor:"#8d8d8d",
    width:"40vw",
    height:"40vh",
    marginLeft:"1vw",
    paddingLeft:"0.5vw",
    paddingRight:"0.5vw",
    marginBottom:"2vh"
  },
  classHeader:{
    color:'black',
    fontSize:"40px",
    fontWeight:"bold",
  },
  classFooter:{
    color:'black',
    fontSize:"20px",
    fontWeight:"bold",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },

  totalMoneyInvested:{
    backgroundColor:"red",
    width:"5vw",
    height:'90vh'
  }

};

export default MinhaCarteira;