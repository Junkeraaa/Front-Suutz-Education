import '../global.css'; 

const ClassMembers = () => {
  return (
    <div style={styles.container}>
        <div style={styles.leftBar}>.</div>
        <div style={styles.classMembers}>
            <h2 style={styles.h2}>Membros da turma</h2>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>
            <div style={styles.membroBox}>
                Jonas Silva
            </div>  
        </div>
    </div>
  );
};

const styles = {
  container: {
    color:"black",
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'center',

  },
  classMembers:{
    display: 'flex',
    flexDirection:"column",
    width:"18vw",
    heigth:"90vh",
    justifyContent:"space-around"
  },
  h2: {
    fontSize:"35px"
  },
  membroBox: {
    fontSize:"20px",
    backgroundColor:"#606060",
    display: 'flex',
    flexDirection:"row",
    alignItems:"center",
    width:"17vw",
    height:"7vh",
    justifyContent:"center",
    borderRadius:"30px"
  },
  leftBar: {
    backgroundColor:"black",
    display: 'flex',
    flexDirection:"row",
    marginRight:"2vw",
    marginTop:"5vh",
    width:"2px"
  }
};

export default ClassMembers;