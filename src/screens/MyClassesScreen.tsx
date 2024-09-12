import AulasDisponiveis from '../components/AulasDisponiveis';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import classBackgroundImage from '../assets/svg/classBackground.svg'

import '../global.css'; 



const MyClassesScreen = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.myClasses}>
          <MyClassesHeaderBar/>
          <div style={styles.dashboard}>
            <div style={styles.class}>
              <div style={styles.classHeader}>
                Classe Senac
              </div>
            </div>
            <div style={styles.class}>
              oi
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
    boxSizing:"border-box"
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
  dashboard:{
    display:"flex",
    flexDirection:"row",
    marginLeft:"0.5vw",
    marginTop:"2vh"
  },
  class:{
    display:"flex",
    flexDirection:"row",
    backgroundColor:"#ededed",
    border:"1px solid",
    borderRadius:"15px",
    borderColor:"#8d8d8d",
    width:"40vw",
    height:"40vh",
    marginLeft:"1vw",
  },
  classHeader:{
    color:'black',
    fontSize:"40px",
    fontWeigth:"bold",

  }

};

export default MyClassesScreen;