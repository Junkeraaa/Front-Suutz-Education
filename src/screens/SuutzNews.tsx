import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import BrokerHeader from '../components/BrokerHeader';
import BrokerDashboard from '../components/BrokerDashboard';
import NewsDashboard from '../components/NewsDashboard';
import NewsHeader from '../components/NewsHeader';


const SuutzNews = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft />
        <div style={styles.insideClass}>
          <NewsHeader/>
          <div style={styles.dashboard}>
            <NewsDashboard/>
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
    fontWeight:"bold",
    boxSizing:'border-box'
  },
  dashboard:{
    display:"flex",
    flexDirection:"row",
    boxSizing:'border-box'
  }

};

export default SuutzNews;