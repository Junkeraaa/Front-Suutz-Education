import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonalBalance from './PersonalBalance';
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

const StockHeader = ({ index, stockId }) => {
  const [showModal, setShowModal] = useState(false);
  const [acao, setAcao] = useState({});
  const [buyQuantity, setBuyQuantity] = useState(0);
  const [sellQuantity, setSellQuantity] = useState(0);
  const walletId = sessionStorage.getItem('walletId')
  const [stockWallet, setStockWallet] = useState(0);
  const [stockBalance, setStockBalance] = useState(null); // Estado para armazenar o saldo

  const imagens = {
    img0: yduqsLogo,
    img1: csnLogo,
    img2: ultraparLogo,
    img3: petrobrasLogo,
    img4: irbLogo,
    img5: cognaLogo,
    img6: nubankLogo,
    img7: bbLogo,
    img8: petrobrasLogo,
    img9: cyrelaLogo,
    img10: bradescoLogo,
    img11: brfLogo,
  };

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const fetchAcao = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/stocks/${stockId}`);
        setAcao(response.data.data);
        console.log('acao', acao)

        const response2 = await axios.get(`http://localhost:4000/wallet/${walletId}/stocks`);

        let arrayAcoes = response2.data.data
        for(let i = 0; i < arrayAcoes.length; i++){
          if(arrayAcoes[i].stockId == stockId){
            console.log(arrayAcoes[i], 'oi')
            setStockWallet(arrayAcoes[i].stockAmount)
          }
        }




      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchAcao();
    const intervalId = setInterval(fetchAcao, 3000);

    return () => clearInterval(intervalId);
  }, [stockId]);

  useEffect(() => {
    
    const fetchStocksByWalletId = async () => {
      try {
        const response = await fetch(`http://localhost:4000/wallet/${walletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar o saldo');
        }

        const data = await response.json();
        
        
        setStockBalance(data.data); // Atualiza o estado com o saldo retornado
        sessionStorage.setItem('walletId', data.data.id);
        console.log('data da wallet', stockBalance)
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      } 
    };

    fetchStocksByWalletId  }, []);

  const handleBuyChange = (e) => setBuyQuantity(Number(e.target.value) || 0);
  const handleSellChange = (e) => setSellQuantity(Number(e.target.value) || 0);

  const handleBuy = async () =>{
    try {
      const response = await fetch(`http://localhost:4000/stocks/buy/wallet/${walletId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: [
            {
              stockId: acao.id,
              moneyAmount: acao.currentPrice * buyQuantity
            }
          ]
        }),
      });

      console.log(response, 'resposta api buy')

      if (!response.ok) {
        throw new Error('Erro ao comprar acao');
      }

      const data = await response.json();
      
      
      setStockBalance(data.data); // Atualiza o estado com o saldo retornado

      console.log('data da wallet', stockBalance)
    } catch (error) {
      console.error('Erro ao comprar acao:', error);
    } 
  }

  const handleSell = async () =>{
    try {
      const response = await fetch(`http://localhost:4000/stocks/sell/wallet/${walletId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: [
            {
              stockId: acao.id,
              stockAmount: sellQuantity
            }
          ]
        }),
      });

      console.log('resposta sell', response)

      if (!response.ok) {
        throw new Error('Erro ao comprar acao');
      }

      const data = await response.json();
      
      
      setStockBalance(data.data); // Atualiza o estado com o saldo retornado

      console.log('data da wallet', stockBalance)
    } catch (error) {
      console.error('Erro ao comprar acao:', error);
    } 
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
            <div style={styles.headerLeft}>
              <div style={styles.headerStock}>
                <img src={imagens[`img${index}`]} alt="Logo" style={styles.acaoLogo} />
                <div style={styles.textUser}>Bem vindo! Lui</div>
              </div>
              <div style={styles.buySellButtons}>
                <button style={styles.btnBuy} onClick={toggleModal}>
                  Buy
                </button>
                <button style={styles.btnSell} onClick={toggleModal}>
                  Sell
                </button>
              </div>
            </div>
            <PersonalBalance />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          style={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleModal();
          }}
        >
          <div style={styles.modalContent}>
            {/* Buy Section */}
            <div style={styles.boxBuySell}>
              <h2>Buy</h2>
              <div>Price: R$ {acao.currentPrice}</div>
              <input
                type="number"
                style={styles.inputField}
                placeholder="Enter quantity"
                value={buyQuantity}
                onChange={handleBuyChange}
              />
              <div>Total: R$ {(acao.currentPrice * buyQuantity).toFixed(2)}</div>
              <div style={styles.modalActions}>
                <button style={styles.saveButton} onClick={handleBuy}>Buy</button>
              </div>
            </div>

            {/* Sell Section */}
            <div style={styles.boxBuySell}>
              <h2>Sell</h2>
              <div>Price: R$ {acao.currentPrice}</div>
              <input
                type="number"
                style={styles.inputField}
                placeholder="Enter quantity"
                value={sellQuantity}
                onChange={handleSellChange}
              />
              <div>Total: R$ {(acao.currentPrice * sellQuantity).toFixed(2)}</div>
              <div style={styles.modalActions}>
                <button onClick={handleSell} style={styles.cancelButton}>
                  Sell
                </button>
              </div>
              <div>Você possui {stockWallet} unidades</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const styles = {
  boxBuySell:{
    marginLeft:"0.4em"
  },

  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    display:"flex",
    flexDirection:"row",
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    border:"2px solid grey",
    width: '400px',
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  saveButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
    container: {
      display: 'flex',
      flexDirection:"row",
      justifyContent: 'center',
    },
    title: {
      fontSize: '2rem',
    },
    myClasses:{
      display:"flex",
      flexDirection:"column",
      width:"84vw",
      heigth:"100vh",
      fontFamily:"freeMono",
      fontWeight:"bold"
    },
    cabecalho:{
      paddingLeft:"2vw",
      paddingRight:"2vw",
      marginTop:"2vh",
      // height:"10vh",
      // width:"84vw",
      display: 'flex',
      flexDirection:"row",
      boxSizing: "border-box",
      justifyContent:"space-between"
    },
    headerLogo:{
      width:"2.5vh",
    },
    btnAddTurma:{
      backgroundColor:"#231f20",
      color:"white",
      paddingTop:"1.5vh",
      paddingBottom:"1.5vh",
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      justifyContent:"center",
      marginLeft:"0.5vw"
    },
    headerRight:{
        color:"black",
        fontWeight:"bold",
      fontSize:"1.5rem",
      display: 'flex',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    headerLeft:{
      color:"black",
      fontFamily:'freeMono',
      fontSize:'35px',
      fontWeight:"bold",
      justifyContent:'center',
      alignItems:'center',
      display:"flex",
      flexDirection:"row"
    },
    textUser:{
      fontSize:'15px',
      fontWeight:"bold"
    },
    newsLogo:{
        width:"35px"
      },
      suutzNews:{
        width:"15vw",
        height:"6vh",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
   
    header:{
        marginRight:"1vw",
    },

    acaoLogo: {
      width: '2em',
      marginLeft: '0.5em',
      marginTop: '0.5em',
      marginRight: '1em'
    },

    buySellButtons:{
      display:"flex",
      flexDirection:'column'
    },


    btnBuy:{
      border:'none',
      color:"white",
      width:'6em',
      fontSize:"1rem",
      backgroundColor:"#00cb5e",
      
    },
    btnSell:{
      border:'none',
      color:"white",
      width:'6em',
      fontSize:"1rem",
      backgroundColor:"#ff3131",
      marginTop:"0.5em"
    }
     
  
  };

export default StockHeader;
