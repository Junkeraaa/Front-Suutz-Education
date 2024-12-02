import '../global.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Importação das imagens
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
    const navigate = useNavigate();
    const [acoes, setAcoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayComponent, setDisplayComponent] = useState(false); // Estado para controlar a exibição

    useEffect(() => {
        const fetchAcoes = async () => {
            try {
                const response = await axios.get('http://srv656114.hstgr.cloud:4000/stocks');
                console.log('Dados recebidos:', response.data);

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

        fetchAcoes();

        const intervalId = setInterval(fetchAcoes, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayComponent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const imagens = {
        ultraparLogo: ultraparLogo,
        yduqsLogo: yduqsLogo,
        csnLogo: csnLogo,
        petrobrasLogo: petrobrasLogo,
        irbLogo: irbLogo,
        nubankLogo: nubankLogo,
        cognaLogo: cognaLogo,
        bbLogo: bbLogo,
        cyrelaLogo: cyrelaLogo,
        bradescoLogo: bradescoLogo,
        brfLogo: brfLogo,
    };

    const getRandomPercentage = () => {
        return (Math.random() * 20 - 10).toFixed(2);
    };

    const getPercentageStyle = (percentage) => {
        return {
            color: parseFloat(percentage) < 0 ? 'red' : 'green',
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
                    <div
                        key={acao.id}
                        style={styles.cardAcao}
                        onClick={() => navigate(`/insideStock/${index}/${acao.id}`)}
                    >
                        <div style={styles.acaoHeader}>
                            <img
                                src={imagens[acao.iconUrl] || ultraparLogo} // Fallback para uma imagem padrão
                                alt={acao.name}
                                style={styles.acaoLogo}
                            />
                            {acao.name}
                        </div>
                        <div style={styles.acaoBody}>
                            <div style={styles.valueNow}>value now</div>
                            <div style={styles.value}>R${acao.currentPrice.toFixed(2)}</div>
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
        overflow: 'auto',
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
