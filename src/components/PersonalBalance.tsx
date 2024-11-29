import React, { useEffect, useState } from 'react';
import '../global.css';
import personalBalanceLogo from '../assets/svg/personalBalance.svg';

const PersonalBalance = () => {
  const id = sessionStorage.getItem('id')
  const [balance, setBalance] = useState(null); // Estado para armazenar o saldo
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    
    const fetchBalance = async () => {
      try {
        const response = await fetch(`http://srv656114.hstgr.cloud:4000/wallet/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar o saldo');
        }

        const data = await response.json();
        
        
        setBalance(data.data); // Atualiza o estado com o saldo retornado
        sessionStorage.setItem('walletId', data.data.id);
        console.log('data da wallet', balance)
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchBalance();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (balance === null) {
    return <div>Erro ao carregar os dados.</div>;
  }

  return (
    <div style={styles.personalBalance}>
      <img src={personalBalanceLogo} alt="Personal Balance Logo" style={styles.personalBalanceLogo} />
      <p style={styles.p}>R${balance.totalMoneyAmount}</p>
    </div>
  );
};

const styles = {
  personalBalance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    fontSize: '1.5em',
    color: 'black',
    marginLeft: '0.5vw',
  },
  personalBalanceLogo: {
    width: '3em',
  },
};

export default PersonalBalance;
