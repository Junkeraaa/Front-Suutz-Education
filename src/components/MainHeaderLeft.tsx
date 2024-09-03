import suutzLogo from '../assets/svg/suutzLogo.svg'
import dashboardLogo from '../assets/svg/dashboardLogo.svg'
import minhasTurmasLogo from '../assets/svg/minhasTurmasLogo.svg'
import 

const MainHeaderLeft = () => {
  return (
    <div style={styles.container}>
      <div style={styles.titleLogo}>
        <img src={suutzLogo} style={styles.logo}/>
      </div>
      <div>
        <button style={styles.btnDashboard}><img src={dashboardLogo} style={styles.dLogo}></img>Dashboard</button>
      </div>
      <div style={styles.menu}>
      <img src={minhasTurmasLogo} style={styles.dLogo}/> Minhas turmas
      </div>
      <div style={styles.menu}>
      <img src={minhasTurmasLogo} style={styles.dLogo}/> Broker Oficial
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily:'freeMono',
    color:"white",
    fontSize:'20x',
    fontWeigth:"bold",
    backgroundColor: '#040404',
    display: 'flex',
    flexDirection: "column",
    height: '100vh',
    width: '16vw'
  },
  titleLogo: {
    fontSize: '2rem',
  },
  logo:{
    width: "120%",
    marginLeft: "10px"
  },
  btnDashboard:{
    backgroundColor: '#38b6ff',
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    marginLeft: "10px",
    textAlign:"center",
    color:"white"
  },
  dLogo:{
    width:"20px",
    marginRight:"5px"
  },
  menu:{
    marginTop:"1vw",
    marginLeft:"2vw"
  }
};

export default MainHeaderLeft;
