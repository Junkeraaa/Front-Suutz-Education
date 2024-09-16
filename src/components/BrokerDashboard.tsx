import '../global.css'; 
import axios from 'axios';
import { useState, useEffect } from 'react';

import yduqsLogo from '../assets/svg/yduqsLogo.svg';
import ultraparLogo from '../assets/svg/ultraparLogo.svg';
import csnLogo from '../assets/svg/csnLogo.svg';
import petrobrasLogo from '../assets/svg/petrobrasLogo.svg';
import irbLogo from '../assets/svg/irbLogo.svg';
import nubankLogo from '../assets/svg/nubankLogo.svg';
import cognaLogo from '../assets/svg/cognaLogo.svg';
import bbLogo from '../assets/svg/bbLogo.svg';
import cyrelaLogo from '../assets/svg/cyrelaLogo.svg';
import bradescoLogo from '../assets/svg/bradescoLogo.svg';
import brfLogo from '../assets/svg/brfLogo.svg';

const BrokerDashboard = () => {
    const [acoes, setAcoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayComponent, setDisplayComponent] = useState(false); // Estado para controlar a exibição

    useEffect(() => {
        const fetchAcoes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/broker/stocks');
                console.log('Dados recebidos:', response.data); // Verifica o formato dos dados recebidos

                // Ajuste se necessário com base na estrutura da resposta da API
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setAcoes(data);
                } else {
                    console.error('Formato de dados inesperado:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setError('Erro ao buscar dados da API.');
            } finally {
                setLoading(false);
            }
        };

        // Buscar dados inicialmente
        fetchAcoes();

        const intervalId = setInterval(fetchAcoes, 3000);

        // Limpar intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Timer para exibir o componente após um atraso de 2 segundos
        const timer = setTimeout(() => {
            setDisplayComponent(true);
        }, 2000); // Ajuste o tempo conforme necessário

        // Limpar o timer ao desmontar o componente
        return () => clearTimeout(timer);
    }, []);

    const imagens = {
        img1: yduqsLogo,
        img2: csnLogo,
        img3: ultraparLogo,
        img4: petrobrasLogo,
        img5: irbLogo,
        img6: cognaLogo,
        img7: nubankLogo,
        img8: bbLogo,
        img9: petrobrasLogo,
        img10: cyrelaLogo,
        img11: bradescoLogo,
        img12: brfLogo
    };

    const getRandomPercentage = () => {
        return (Math.random() * 20 - 10).toFixed(2); // Gera um número entre -10 e 10 e formata com 2 casas decimais
    };

    const getPercentageStyle = (percentage) => {
        return {
            color: parseFloat(percentage) < 0 ? 'red' : 'green' // Defina a cor com base no valor
        };
    };

    return (
        <div style={styles.container}>
            {!displayComponent ? (
                <div style={styles.loading}>Loading...</div>
            ) : loading ? (
                <div style={styles.loading}>Loading...</div>
            ) : error ? (
                <div style={styles.loading}>{error}</div>
            ) : acoes.length > 0 ? (
                acoes.map((acao, index) => (
                    <div key={index} style={styles.cardAcao}>
                        <div style={styles.acaoHeader}>
                            <img src={imagens[`img${index + 1}`]} alt="" style={styles.acaoLogo} />
                            {acao.name}
                        </div>
                        <div style={styles.acaoBody}>
                            <div style={styles.valueNow}>
                                value now
                            </div>
                            <div style={styles.value}>
                                R${acao.currentPrice.toFixed(2)} 
                            </div>
                        </div>
                        <div style={styles.acaoFooter}>
                            <span style={getPercentageStyle(getRandomPercentage())}>
                                {getRandomPercentage()}%
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div style={styles.loading}>No data available</div>
            )}
        </div>
    );
};

const styles = {
    container: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        height: '80vh',
        width: '84vw',
        marginTop: '2vh',
        justifyContent: 'center',
        paddingLeft: '1vw'
    },
    acaoHeader: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '2em'
    },
    acaoLogo: {
        width: '2em',
        marginLeft: '0.5em',
        marginTop: '0.5em',
        marginRight: '1em'
    },
    acaoFooter: {
        color: '#008425'
    },
    value: {
        fontSize: '2em',
    },
    valueNow: {
        fontSize: '1em'
    },
    acaoBody: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardAcao: {
        display: 'flex',
        flexDirection: 'column',
        width: '18vw',
        height: '25vh',
        border: '2px solid',
        borderRadius: '10px',
        borderColor: '#8d8d8d',
        backgroundColor: '#ededed',
        justifyContent: 'space-between',
        marginTop: '1vh',
        paddingLeft: '0.5vw',
        marginLeft: '3vh'
    },
    loading: {
        fontSize: '1.5em',
        color: '#888'
    }
};

export default BrokerDashboard;
