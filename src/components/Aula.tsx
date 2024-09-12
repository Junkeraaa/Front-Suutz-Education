import '../global.css'; 


const Aula = () => {
    return (
      <div style={styles.container}>
        <h1>16 aulas disponiveis</h1>
        <div style={styles.cardAula}>
          
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection:"column",
      height:"90vh",
      width:"65vw",
      justifyContent: 'center',
    },
    cardAula:{
      display:"flex",
      flexDirection:"column",
      width:"60vw",
      height:"14vh",
      border:"1px solid black",
      borderRadius:"10px",
      backgroundColor:"green",
      justifyContent:"center"
    },
    cardAulaHeader:{
      height:"2vh"
    },
    p: {
      overflow: "hidden", // Impede o estouro do texto
      textOverflow: "ellipsis", // Adiciona "..." se o texto for longo demais
    }
  };
  
  export default Aula;