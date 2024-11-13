import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';


const MinhaCarteira = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft tipo={'broker'}/>
        <div style={styles.insideClass}>
          <BrokerHeader tipo={'minhaCarteira'}/>
          <div style={styles.dashboard}>
            
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
    boxSizing:'border-box'
  },
  title: {
    fontSize: '2rem',
  },
  insideClass:{
    display:"flex",
    flexDirection:"column",
    width:"84vw",
    heigth:"100vh",
    fontFamily:"freeMono",
    fontWeigth:"bold",
    boxSizing:'border-box'
  },
  dashboard:{
    display:"flex",
    flexDirection:"row",
    boxSizing:'border-box'
  }

};

export default MinhaCarteira;