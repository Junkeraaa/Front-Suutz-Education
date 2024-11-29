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
import { ChartData } from 'chart.js'; 
import { displayName } from 'react-quill';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const socket = io("http://srv656114.hstgr.cloud:5000");

const StockDashboard = ({ stockId }) => {
  const navigate = useNavigate();
  const [acao, setAcao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayComponent, setDisplayComponent] = useState(false);
  const [chartData, setChartData] = useState<ChartData<'line'>>();

  useEffect(() => {
    console.log('Emitindo requestForData...');
    socket.emit('requestForData', stockId);

    // Remover listener ao desmontar o componente
    return () => {
      socket.off('responseForData');
    };
  }, [stockId]);

  useEffect(() => {
    socket.on('responseForData', (data: { price: number; at: Date }[]) => {
      const formattedData: ChartData<'line'> = {
        labels: data.map((item) => item.at.toString()),
        datasets: [
          {
            label: '',
            data: data.map((item) => item.price),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0,
          },
        ],
      };

      setChartData(formattedData);
    });

    // Remover listener ao desmontar o componente
    return () => {
      socket.off('responseForData');
    };
  }, []);

  useEffect(() => {
    const fetchAcao = async () => {
      try {
        const response = await axios.get(`http://srv656114.hstgr.cloud:4000/stocks/${stockId}`);
        console.log('Dados recebidos:', response.data);

        const data = response.data.data;
        setAcao(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setError('Erro ao buscar dados da API.');
      } finally {
        setLoading(false);
      }
    };

    fetchAcao();
    const intervalId = setInterval(fetchAcao, 3000);

    return () => clearInterval(intervalId);
  }, [stockId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayComponent(true);
    }, 2000);

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
    img12: brfLogo,
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
          <div style={{ width:"50vw", height:"55vh" }}>
            {chartData ? (
              <Line
              data={chartData}
              options={{
                responsive: true,
                animation: {
                  easing: 'linear',
                  duration: 0,
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Horário', // Rótulo do eixo X
                      color: '#555', // Cor do texto
                      font: {
                        family: 'Arial',
                        size: 16,
                        weight: 'bold',
                      },
                    },
                    ticks: {
                      color: '#888', // Cor dos ticks (valores do eixo)
                      font: {
                        size: 12,
                      },
                      callback: function (value, index, ticks) {
                        // Formatação personalizada (ex.: exibir apenas os horários)
                        const label = this.getLabelForValue(value);
                        return label.slice(11, 16); // Exibe HH:MM de uma data ISO
                      },
                    },
                    grid: {
                      display: false, // Oculta as linhas de grade do eixo X
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Preço (R$)', // Rótulo do eixo Y
                      color: '#555',
                      font: {
                        family: 'Arial',
                        size: 16,
                        weight: 'bold',
                      },
                    },
                    ticks: {
                      color: '#888',
                      font: {
                        size: 12,
                      },
                      callback: function (value, index, ticks) {
                        // Formatação personalizada (ex.: prefixo "R$")
                        return `R$ ${value.toFixed(2)}`;
                      },
                    },
                    grid: {
                      color: '#ddd', // Cor das linhas de grade do eixo Y
                      borderDash: [5, 5], // Estilo pontilhado das linhas
                    },
                    min: 0, // Define o valor mínimo do eixo Y
                    max: Math.max(...chartData.datasets[0].data) + 10, // Define o valor máximo dinamicamente
                  },
                },
                plugins: {
                  legend: {
                    position: 'top', // Define a posição da legenda
                    labels: {
                      color: '#555', // Cor dos textos da legenda
                      font: {
                        size: 14,
                      },
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        // Personaliza o texto do tooltip
                        return `Preço: R$ ${context.raw.toFixed(2)}`;
                      },
                    },
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
          <div>Infos</div>
          <div style={styles.dados}>
            <div>
              Fechamento anterior
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Abertura
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Negócios
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Volume
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Min - Max (Dia)
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Variacao (Dia)
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Variacao (Mes)
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Variacao (2024)
            </div>
            <div>
              Valor
            </div>
          </div>
          <div style={styles.dados}>
            <div>
              Variacao (52 Semanas)
            </div>
            <div>
              Valor
            </div>
          </div>
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

  dados:{
    display:"flex",
    flexDirection:"row",
    width:"26vw",
    justifyContent:"space-between",
    marginTop:"2px"
  },
  dashBoxes: {
    marginTop: '1em',
    width: '84vw',
    height: '20vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxValue: {
    backgroundColor: '#e2ffed',
    width: '15vw',
    height: '20vh',
    borderRadius: '10px',
  },
  boxMin: {
    backgroundColor: '#fbffe0',
    width: '15vw',
    height: '20vh',
    borderRadius: '10px',
  },
  boxMax: {
    backgroundColor: '#ffefef',
    width: '15vw',
    height: '20vh',
    borderRadius: '10px',
  },
  boxYield: {
    backgroundColor: '#eef6ff',
    width: '15vw',
    height: '20vh',
    borderRadius: '10px',
  },
  boxVal: {
    fontSize: '3rem',
  },
  dashInfos: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  stockGraph: {
    display: 'flex',
    flexDirection:"column",
    width: '100%',
    height: '58vh',
  },
  stockInfos: {
    width: '39vw',
    height: '58vh',
    display:'flex',
    flexDirection:"column",
    paddingTop:"4em",
    paddingRight:'1em',
  },
  stockName: {
    fontSize: '1.5em',
  },
};

export default StockDashboard;
