


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
  
  export default AulasDisponiveis;