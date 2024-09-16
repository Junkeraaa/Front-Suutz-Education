import AulasDisponiveis from '../components/AulasDisponiveis';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import classBackgroundImage from '../assets/svg/classBackground.svg'

import '../global.css'; 
import { useNavigate } from 'react-router-dom';



const MyClassesScreen = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.myClasses}>
          <MyClassesHeaderBar/>
          <div style={styles.dashboard}>
            <div style={styles.class}  onClick={() => navigate('/insideClass')}>
              <div>
              <div style={styles.classHeader}>
                Classe Senac
              </div>
              <p>Professor João</p>
              </div>
              <div style={styles.classFooter}>
                <div>5 aulas disponíveis</div>
                <div>30 alunos</div>
              </div>
            </div>
            <div style={styles.class}>
              <div>
              <div style={styles.classHeader}>
                Classe Alura
              </div>
              <p>Professor Paulo</p>
              </div>
              <div style={styles.classFooter}>
                <div>10 aulas disponíveis</div>
                <div>47 alunos</div>
              </div>
            </div> 
            <div style={styles.class}>
              <div>
              <div style={styles.classHeader}>
                Classe Empresa
              </div>
              <p>Professor Álvaro</p>
              </div>
              <div style={styles.classFooter}>
                <div>13 aulas disponíveis</div>
                <div>2 alunos</div>
              </div>
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
    flexWrap:'wrap',
    flexDirection:"row",
    marginLeft:"0.5vw",
    marginTop:"2vh"
  },
  class:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor:"#ededed",
    border:"1px solid",
    borderRadius:"15px",
    borderColor:"#8d8d8d",
    width:"40vw",
    height:"40vh",
    marginLeft:"1vw",
    paddingLeft:"0.5vw",
    paddingRight:"0.5vw",
    marginBottom:"2vh"
  },
  classHeader:{
    color:'black',
    fontSize:"40px",
    fontWeigth:"bold",
  },
  classFooter:{
    color:'black',
    fontSize:"20px",
    fontWeigth:"bold",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },

};

export default MyClassesScreen;