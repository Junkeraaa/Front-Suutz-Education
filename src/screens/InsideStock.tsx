import MainHeaderLeft from '../components/MainHeaderLeft';
import '../global.css'; 
import StockHeader from '../components/StockHeader';
import { useParams } from 'react-router-dom';
import StockDashboard from '../components/StockDashboard'


const InsideStock = () => {

    const { imageId } = useParams();
    console.log(imageId, 'id')
    const { stockId } = useParams();


  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.insideClass}>
          <StockHeader index={imageId}/>
          <div style={styles.dashboard}>
            <StockDashboard stockId={stockId}/>
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

export default InsideStock;