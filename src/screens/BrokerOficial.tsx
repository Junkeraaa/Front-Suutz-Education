import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import AulasDisponiveis from '../components/AulasDisponiveis';
import ClassMembers from '../components/ClassMembers';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';


const BrokerOficial = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.insideClass}>
          <BrokerHeader/>
          <div style={styles.dashboard}>
            <BrokerDashboard/>
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

export default BrokerOficial;