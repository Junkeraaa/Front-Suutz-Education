import AulasDisponiveis from '../components/AulasDisponiveis';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'



const MyClassesScreen = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.myClasses}>
          <MyClassesHeaderBar/>
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
    flexDirection:"row"
  }

};

export default MyClassesScreen;