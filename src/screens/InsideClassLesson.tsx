import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import VerticalBar from '../components/VerticalBar';
import '../global.css'; 
import playButtonSvg from '../assets/svg/playButton.svg'
import bovespaFoto from '../assets/bovespafoto.jpg'


const InsideClassLesson = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.insideClass}>
          <MyClassesHeaderBar/>
          <div style={styles.dashboard}>
            <div style={styles.lessonName}>
              Aula 1 - Bolsa de valores do zero
            </div>
            <div style={styles.lessonBody}>
                            A bolsa de valores é um mercado organizado onde se negociam ações de empresas, títulos, commodities, e outros ativos financeiros. Ela atua como uma plataforma que conecta compradores e vendedores, permitindo a negociação de ativos de forma transparente e regulada. A bolsa de valores também é um termômetro da economia, refletindo a saúde financeira de empresas e a confiança dos investidores.
                Exemplos de Bolsas de Valores:
                NYSE (New York Stock Exchange) - Estados Unidos
                B3 (Brasil, Bolsa, Balcão) - Brasil
                LSE (London Stock Exchange) - Reino Unido
                <img src={bovespaFoto} style={styles.bovespafoto} />
            </div>
            <div style={styles.lessonFooter}>
              <VerticalBar/>
              <div>Agora chegou a hora de praticar todo o conteudo aprendido para fixar na memória.<br></br>
              Clique em play para ser direcionado para o broker da lição!</div>
              <button style={styles.btnPlayBroker}>
                <img style={styles.playBtnSvg} src={playButtonSvg} alt="" />
                Play</button>
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
  lessonName: {
    fontSize: '35px',
    fontWeight:'bold',
    color:"black"
  },
  lessonBody: {
    fontSize: '20px',
  },
  lessonFooter: {
    fontSize: '20px',
  },
  insideClass:{
    display:"flex",
    flexDirection:"column",
    width:"84vw",
    heigth:"100vh",
    fontFamily:"freeMono",
    fontWeigth:"bold"
  },
  dashboard:{
    width:"65vw",
    height:'88vh',
    marginLeft:"2vw",
    marginTop:"1vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    flexWrap:"wrap"
  },
  playBtnSvg:{
    width:"3vh"
  },
  btnPlayBroker:{
    fontSize:"1.2rem",
    fontWeight:"bold",
    borderRadius:'25px',
    backgroundColor:"#00cb5e",
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    height:"5vh"
  },
  bovespafoto:{
    marginTop:"2vh",
    width:"650px"
  }

};

export default InsideClassLesson;