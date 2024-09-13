import '../global.css'; 


const AulasDisponiveis = () => {
    return (
      <div style={styles.container}>
        <h1>16 aulas disponiveis</h1>
        <div style={styles.cardAula}>
          <div style={styles.cardAulaHeader}>
            Aula 1 - Bolsa de valores do zero
          </div>  
          <p style={styles.p}>A bolsa de valores é um mercado organizado onde ações, títulos e outros ativos financeiros são comprados e vendidos, servindo como um barômetro da economia. Os preços das ações são determinados pela oferta e demanda, influenciados por fatores como resultados financeiros das empresas, taxas de juros, inflação, e eventos políticos ou econômicos. Investidores utilizam</p>
        </div>
        <div style={styles.cardAula}>
          <div style={styles.cardAulaHeader}>
            Aula 1 - Bolsa de valores do zero
          </div>  
          <p style={styles.p}>A bolsa de valores é um mercado organizado onde ações, títulos e outros ativos financeiros são comprados e vendidos, servindo como um barômetro da economia. Os preços das ações são determinados pela oferta e demanda, influenciados por fatores como resultados financeiros das empresas, taxas de juros, inflação, e eventos políticos ou econômicos. Investidores utilizam</p>
        </div>
        <div style={styles.cardAula}>
          <div style={styles.cardAulaHeader}>
            Aula 1 - Bolsa de valores do zero
          </div>  
          <p style={styles.p}>A bolsa de valores é um mercado organizado onde ações, títulos e outros ativos financeiros são comprados e vendidos, servindo como um barômetro da economia. Os preços das ações são determinados pela oferta e demanda, influenciados por fatores como resultados financeiros das empresas, taxas de juros, inflação, e eventos políticos ou econômicos. Investidores utilizam</p>
        </div>
        <div style={styles.cardAula}>
          <div style={styles.cardAulaHeader}>
            Aula 1 - Bolsa de valores do zero
          </div>  
          <p style={styles.p}>A bolsa de valores é um mercado organizado onde ações, títulos e outros ativos financeiros são comprados e vendidos, servindo como um barômetro da economia. Os preços das ações são determinados pela oferta e demanda, influenciados por fatores como resultados financeiros das empresas, taxas de juros, inflação, e eventos políticos ou econômicos. Investidores utilizam</p>
        </div>
        <div style={styles.cardAula}>
          <div style={styles.cardAulaHeader}>
            Aula 1 - Bolsa de valores do zero
          </div>  
          <p style={styles.p}>A bolsa de valores é um mercado organizado onde ações, títulos e outros ativos financeiros são comprados e vendidos, servindo como um barômetro da economia. Os preços das ações são determinados pela oferta e demanda, influenciados por fatores como resultados financeiros das empresas, taxas de juros, inflação, e eventos políticos ou econômicos. Investidores utilizam</p>
        </div>
        
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