import '../global.css'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

const NewsDashboard = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayComponent, setDisplayComponent] = useState(false); // Estado para controlar a exibição

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:4000/news');
                console.log('Dados recebidos:', response.data); // Verifica o formato dos dados recebidos

                // Ajuste se necessário com base na estrutura da resposta da API
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setNews(data);
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
        fetchNews();

        const intervalId = setInterval(fetchNews, 15000);

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

    return (
        <div style={styles.container}>
            {!displayComponent ? (
                <div style={styles.loading}>Loading...</div>
            ) : loading ? (
                <div style={styles.loading}>Loading...</div>
            ) : error ? (
                <div style={styles.loading}>{error}</div>
            ) : news.length > 0 ? (
                news.map((news, index) => (
                    <div>
                        {news.description}
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

export default NewsDashboard;
