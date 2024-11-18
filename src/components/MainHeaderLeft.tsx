import suutzLogo from '../assets/logo.svg'
import dashboardLogo from '../assets/svg/dashboardLogo.svg'
import minhasTurmasLogo from '../assets/svg/minhasTurmasLogo.svg'
import brokerLogo from '../assets/svg/brokerLogo.svg'
import settingsLogo from '../assets/svg/settingsLogo.svg'
import signOutLogo from '../assets/svg/signOutLogo.svg'
import NewsLogo from '../assets/svg/newsPaperLogo.svg'
import { useNavigate } from 'react-router-dom';
import '../global.css'; 

const MainHeaderLeft = ({tipo}) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/')
  };

  

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.titleLogo}>
          <img src={suutzLogo} style={styles.logo}/>
        </div>
        <div>
          <button style={styles.btnDashboard}><img src={dashboardLogo} style={styles.dLogo}></img>Dashboard</button>
        </div>
        <div style={styles.menu} onClick={() => navigate('/myClasses')}>
        <img src={minhasTurmasLogo} style={styles.dLogo}/> Minhas turmas
        </div>
        <div style={styles.menu} onClick={() => navigate('/brokerOficial')}>
        <img src={brokerLogo} style={styles.dLogo}/> Broker oficial
        </div>
              {tipo === 'broker' && (
        <div style={styles.menu} onClick={() => navigate('/minhaCarteira')}>
          <img src={brokerLogo} style={styles.dLogo}/> Minha carteira
        </div>
      )}
            {tipo === 'broker' && (
        <div style={styles.menu} onClick={() => navigate('/suutzNews')}>
          <img src={NewsLogo} style={styles.dLogo}/> Suutz News
        </div>
      )}

      </div>
      <div style={styles.rodape}>
        <div style={styles.menu}>
          <img src={settingsLogo} style={styles.dLogo}/> Settings
          </div>
        <div style={styles.menu} onClick={logout}>
          <img src={signOutLogo} style={styles.dLogo}/> Sign out
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily:'freeMono',
    color:"white",
    fontSize:'25px',
    fontWeigth:"bold",
    backgroundColor: '#040404',
    display: 'flex',
    flexDirection: "column",
    justifyContent:"space-between",
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
  },
  rodape:{
    marginBottom:"2vw"
  }
};

export default MainHeaderLeft;
