import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MinhaCarteira = () => {
  const walletId = sessionStorage.getItem('walletId');
  const [acoes, setAcoes] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0);

  useEffect(() => {
    const fetchAcoes = async () => {
      try {
        const response = await axios.get(`http://srv656114.hstgr.cloud:4000/wallet/${walletId}/stocks`);
        const fetchedAcoes = response.data.data;

        setAcoes(fetchedAcoes); // Atualiza o estado com os dados da API

        // Calcula o total imediatamente
        const total = fetchedAcoes.reduce((acc, acao) => acc + acao.currentPrice * acao.stockAmount, 0);
        setTotalInvested(total);
        console.log('Total Invested:', total);
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
      <MainHeaderLeft />
      <div style={styles.insideClass}>
        <BrokerHeader tipo="minhaCarteira" />
        <div style={styles.dashboard}>
          <div style={styles.blocoAcoes}>
            {acoes.map((acoesItem, index) => (
              <div key={index} style={styles.class}>
                <div>
                  <div style={styles.classHeader}>{acoesItem.name}</div>
                  Value Now:
                  <div>{acoesItem.currentPrice}</div>
                  Você tem:
                  <div>{acoesItem.stockAmount}</div>
                </div>
                <div style={styles.classFooter}>+30%</div>
              </div>
            ))}
          </div>
          <div style={styles.totalMoneyInvested}>
            <div style={styles.totalMText}>Total money invested</div>
            <div style={styles.totalMValue}>R${totalInvested.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  insideClass: {
    display: 'flex',
    flexDirection: 'column',
    width: '84vw',
    height: '100vh',
    fontFamily: 'freeMono',
    fontWeight: 'bold',
    boxSizing: 'border-box',
  },
  blocoAcoes: {
    display: 'flex',
    flexDirection: 'row',
    width: '65vw',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    width: '84vw',
  },
  class: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    border: '1px solid',
    borderRadius: '15px',
    borderColor: '#8d8d8d',
    width: '40vw',
    height: '40vh',
    marginLeft: '1vw',
    paddingLeft: '0.5vw',
    paddingRight: '0.5vw',
    marginBottom: '2vh',
  },
  classHeader: {
    color: 'black',
    fontSize: '40px',
    fontWeight: 'bold',
  },
  classFooter: {
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalMoneyInvested: {
    width: '18vw',
    height: '90vh',
    borderLeft: '2px solid black',
    marginLeft: '3em',
  },
  totalMText: {
    marginLeft: '1em',
    color: 'black',
  },
  totalMValue: {
    marginLeft: '0.5em',
    color: 'black',
    fontSize: '2rem',
  },
};

export default MinhaCarteira;
