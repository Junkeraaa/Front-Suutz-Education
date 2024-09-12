import mGlassLogo from '../assets/svg/mGlassLogo.svg'
import '../global.css'; 

const MyClassesHeaderBar = () => {
  return (
    <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
              <div style={styles.headerLeft}>
                <div>Minhas turmas</div>
                <div style={styles.textUser}>Bem vindo! username</div>
              </div>
                
              <div style={styles.headerRight}>
                <button><img src={mGlassLogo} style={styles.headerLogo}/></button>
                <button style={styles.btnAddTurma}><img src="" alt="" />Adicionar turma</button>
              </div>
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
      justifyContent:"space-between",
      boxSizing: "border-box"
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
      display: 'flex',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    headerLeft:{
      color:"black",
      fontFamily:'freeMono',
      fontSize:'35px',
      fontWeigth:"bold"
    },
    textUser:{
      fontSize:'15px',
      fontWeigth:"bold"
    },
    dashboard:{
  
    }
  
  };

export default MyClassesHeaderBar;
