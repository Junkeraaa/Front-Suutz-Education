
import React from 'react';
import MainHeaderLeft from '../components/MainHeaderLeft';
import mGlassLogo from '../assets/svg/mGlassLogo.svg'


const MyClassesScreen = () => {
  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
              <div style={styles.headerLeft}>
                <div>Minhas turmas</div>
                <div style={styles.textUser}>Bem vindo! username</div>
              </div>
                
              <div style={styles.headerRight}>
                <button><img src={mGlassLogo} style={styles.headerLogo}/></button>
                <button style={styles.btnAddTurma}><img src="" alt="" />Adicionar turma</button>
              </div>
          </div>    
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
  },
  title: {
    fontSize: '2rem',
  },
  myClasses:{
    display:"flex",
    flexDirection:"column",
    width:"84vw",
    heigth:"100vh",
  },
  cabecalho:{
    paddingLeft:"2vw",
    paddingRight:"2vw",
    marginTop:"2vh",
    width:"84vw",
    display: 'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    boxSizing: "border-box"
  },
  headerLogo:{
    width:"30px"
  },
  btnAddTurma:{
    backgroundColor:"#231f20",
    color:"white"
  },
  headerRight:{
    display: 'flex',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  headerLeft:{
    color:"black",
    fontFamily:'freeMono',
    fontSize:'35px',
    fontWeigth:"bold"
  },
  textUser:{
    fontSize:'15px',
    fontWeigth:"bold"
  },
  dashboard:{

  }

};

export default MyClassesScreen;
