import '../global.css'; 
import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import { displayName } from 'react-quill';

import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData } from 'chart.js'; // Importa o tipo correto

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const socket = io("http://localhost:4000");
const StockDashboard = ({stockId}) => {
    const navigate = useNavigate();
    const [acao, setAcao] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayComponent, setDisplayComponent] = useState(false); // Estado para controlar a exibição

    const [chartData, setChartData] = useState<ChartData<'line'>>();

    socket.emit('requestForData', stockId);
      
    socket.on('responseForData', (data: { price: number; at: Date }[]) => {
        const formattedData: ChartData<'line'> = {
          labels: data.map((item) => item.at.toString()), 
          datasets: [
            {
              label: 'Dataset Dinâmico',
              data: data.map((item) => item.price),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0,
            },
          ],
        };
  
        setChartData(formattedData);
      });

    useEffect(() => {
        const fetchAcao = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/stocks/${stockId}`);
                console.log('Dados recebidos:', response.data); // Verifica o formato dos dados recebidos

                // Ajuste se necessário com base na estrutura da resposta da API
                const data = response.data.data
                console.log('data', data)
                setAcao(data);  
                console.log('acao', acao)
    
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setError('Erro ao buscar dados da API.');
            } finally {
                setLoading(false);
            }
        };

        // Buscar dados inicialmente
        fetchAcao();

        const intervalId = setInterval(fetchAcao, 3000);

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

    

    return (
        <div style={styles.container}>
            <div style={styles.dashBoxes}>
                <div style={styles.boxValue}>
                    Value now
                    <div style={styles.boxVal}>
                        {acao.currentPrice}
                    </div>
                </div>
                <div style={styles.boxMin}>
                    Min day
                    <div style={styles.boxVal}>
                        {acao.minPriceDay}
                    </div>
                </div>
                <div style={styles.boxMax}>
                    Max day    
                    <div style={styles.boxVal}>
                        {acao.maxPriceDay}
                    </div>
                </div>
                <div style={styles.boxYield}>
                    Dividend Yield
                    <div style={styles.boxVal}>
                    </div>
                </div>
            </div>
            <div style={styles.dashInfos}>
                <div style={styles.stockGraph}>
                    <div style={styles.stockName}>
                        {acao.name}
                    </div>
                    <div style={{ width: '100%', height: '90%', margin: 'auto' }}>
                        {chartData ? (
                            <Line
                            data={chartData}
                            options={{
                                animation: {easing: 'linear', duration: 0},
                                responsive: true,
                                elements: {
                                    point: {
                                        pointStyle: false,
                                    },
                                },
                                plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Gráfico Dinâmico com Chart.js',
                                },
                                },
                            }}
                            />
                        ) : (
                            <p>Carregando dados do gráfico...</p>
                        )}
                    </div>
                </div>
                <div style={styles.stockInfos}>
                    
                </div>
            </div>
            
        </div>
    );
};

const styles = {
    container: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        overflow: 'hidden',
        height: '80vh',
        width: '84vw',
        marginTop: '2vh',
        justifyContent: 'center',
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
        justifyContent: 'space-between',
        marginTop: '1vh',
        paddingLeft: '0.5vw',
        marginLeft: '3vh'
    },
    loading: {
        fontSize: '1.5em',
        color: '#888'
    },

    dashInfos:{
        width: '100%',
        display:'flex',
        flexDirection:"row"
    },

    stockGraph:{
        display: 'flex',
        width:"100%",
        height:"58vh",
    },

    stockInfos:{
        width:"39vw",
        height:"58vh",
    },



    dashBoxes:{
        marginTop:'1em',
        width:"84vw",
        height:"20vh",
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around',
    },

    boxMax:{
        width:"15vw",
        height: "20vh", // Corrigido aqui
        backgroundColor: "#ffefef",
        borderRadius:'10px'
    },

    boxValue:{
        backgroundColor: "#e2ffed",
        width:"15vw",
        height: "20vh", // Corrigido aqui
        borderRadius:'10px'
    },

    boxMin:{
        backgroundColor: "#fbffe0",
        width:"15vw",
        height: "20vh", // Corrigido aqui
        borderRadius:'10px'
    },

    boxYield:{
        backgroundColor: "#eef6ff",
        width:"15vw",
        height: "20vh", // Corrigido aqui
        borderRadius:'10px'
    },
    boxVal:{
        fontSize: '3rem'
    },
    stockName:{
        fontSize:"2em"
    }
};

export default StockDashboard;
