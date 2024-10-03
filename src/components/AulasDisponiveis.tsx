import { useNavigate } from 'react-router-dom';
import '../global.css'; 


const AulasDisponiveis = ({aulas}) => {
    if(!aulas || aulas.length === 0){
      return <div>Não há aulas disponíveis no momento.</div>;
    }
    else{
      console.log('aulas', aulas)
    }
    const navigate = useNavigate()

    return (
      <div style={styles.container}>
        <h1>{aulas.length == 1 ? `${aulas.length} aula disponível` : `${aulas.length} aulas disponíveis`}</h1>

          {aulas.map((aula, index) => (
            <div style={styles.cardAula}>
            <div style={styles.cardAulaHeader}>
              {aula.title}
            </div>  
            <p style={styles.p}>{aula.content}</p>
          </div>  
          ))}
              
      </div>
    );
  };
  
  const styles = {
    container: {
      color:'black',
      display: 'flex',
      flexDirection:"column",
      height:"90vh",
      width:"65vw",
      justifyContent: 'center',
       paddingLeft:"1vw"
    },
    cardAula:{
      display:"flex",
      flexDirection:"column",
      width:"60vw",
      height:"14vh",
      border:"2px solid",
      borderRadius:"10px",
      borderColor:"#8d8d8d",
      backgroundColor:"#ededed",
      justifyContent:"center",
      marginTop:"1vh",
      paddingLeft:"0.5vw"
    },
    cardAulaHeader:{
      fontSize:"30px",
      fontWeight:"bold",
      height:"3vh"
    },
    p: {
      overflow: "hidden", // Impede o estouro do texto
      textOverflow: "ellipsis", // Adiciona "..." se o texto for longo demais
    }
  };
  
  export default AulasDisponiveis;