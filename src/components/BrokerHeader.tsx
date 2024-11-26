import mGlassLogo from '../assets/svg/mGlassLogo.svg'
import '../global.css'; 
import SideBar from './SideBar';
import SideBarBrokerHeader from './SideBarBrokerHeader';
import NewsLogo from '../assets/svg/newsPaperLogo.svg'
import PersonalBalance from './PersonalBalance';

const BrokerHeader = ({tipo}) => {
  const role = sessionStorage.getItem('role')
  const showPersonalBalance = role === 'student'; 
  if(tipo == 'brokerHeader'){
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
                {showPersonalBalance && <PersonalBalance />}  
            </div>       
          </div>
      </div>
    );
  }

  else if(tipo == 'suutzNews'){
    return (
      <div style={styles.container}>
          <div style={styles.myClasses}>
            <div style={styles.cabecalho}>
              <div style={styles.sN}>

                  <div>
                    <div style={styles.newsHeader}>Suutz News</div>
                    <div style={styles.newsSubHeader}>O maior portal de notícias</div>
                  </div>
                
                  <div>
                    <img src={NewsLogo} alt="" style={styles.newsLogo2}/>
                  </div>


              </div>
              {showPersonalBalance && <PersonalBalance />}
            </div>       
          </div>
      </div>
    )
  }

  else{
    return(
      <div style={styles.container}>
          <div style={styles.myClasses}>
            <div style={styles.cabecalho}>
                <div style={styles.headerLeft}>
                  <div style={styles.header}>
                  <div>Minha carteira</div>
                  {/* broker aula  */}
                  <div style={styles.textUser}>Bem vindo! Luis</div>
                  </div>
                </div>
                {showPersonalBalance && <PersonalBalance />} 
            </div>       
          </div>
      </div>
    )
  }
  
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
    sN:{
      display:'flex',
      flexDirection:"row",
      alignItems:"center"
    },
    newsHeader:{
      color:'black',

      fontSize:"3rem"
    },
    newsSubHeader:{
      fontSize:"1.5rem",
      color:"black"
    },
    newsLogo2:{
      width:"50px",
      marginLeft:"1em"
    },
   
    header:{
        marginRight:"1vw",
    }
     
  
  };

export default BrokerHeader;
