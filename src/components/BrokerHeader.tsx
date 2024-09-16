import mGlassLogo from '../assets/svg/mGlassLogo.svg'
import '../global.css'; 
import SideBar from './SideBar';
import SideBarBrokerHeader from './SideBarBrokerHeader';
import NewsLogo from '../assets/svg/newsPaperLogo.svg'
import PersonalBalance from './PersonalBalance';

const BrokerHeader = () => {
  return (
    <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
              <div style={styles.headerLeft}>
                <div style={styles.header}>
                <div>Broker - Oficial</div>
                {/* broker aula  */}
                <div style={styles.textUser}>Bem vindo! Luis</div>
                </div>
                <SideBarBrokerHeader/>
                <div style={styles.headerRight}>
                    <div style={styles.suutzNews}>Suutz News <br/>
                    O maior portal de notícias
                    </div>
                    <div>
                        <img src={NewsLogo} alt="" style={styles.newsLogo}/>
                    </div>
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
    }
     
  
  };

export default BrokerHeader;
