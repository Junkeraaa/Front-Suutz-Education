import mGlassLogo from '../assets/svg/mGlassLogo.svg'
import '../global.css'; 
import SideBar from './SideBar';
import SideBarBrokerHeader from './SideBarBrokerHeader';
import NewsLogo from '../assets/svg/newsPaperLogo.svg'
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
import { displayName } from 'react-quill';

const StockHeader = ({index}) => {

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
        img11: brfLogo
    };




  return (
    <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
              <div style={styles.headerLeft}>
                <div style={styles.headerStock}>
                  <img src={imagens[`img${index}`]} alt="" style={styles.acaoLogo}/>
                  <div style={styles.textUser}>Bem vindo! Lui</div>
                </div>
                <div style={styles.buySellButtons}>
                  <button style={styles.btnBuy}>
                    Buy
                  </button>
                  <button style={styles.btnSell}>
                    Sell
                  </button>
                </div>    
              </div>
                
              
              <PersonalBalance/>   

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
      fontWeigth:"bold"
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
      fontWeigth:"bold",
      justifyContent:'center',
      alignItems:'center',
      display:"flex",
      flexDirection:"row"
    },
    textUser:{
      fontSize:'15px',
      fontWeigth:"bold"
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
