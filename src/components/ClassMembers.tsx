import '../global.css'; 
import SideBar from './SideBar';

const ClassMembers = ({members}) => {
  if(!members || members.length ===0){
    console.log("members", members)
    return <div>Não há membros disponíveis no momento.</div>;
  }
  else{
    console.log('members,', members)
  }
  return (
    <div style={styles.container}>
        <SideBar/>
        {/* <div style={styles.leftBar}>.</div> */}
        <div style={styles.classMembers}>
            <h2 style={styles.h2}>Membros da turma</h2>
            {members.map((member, index )=>(
              <div style={styles.membroBox}>
                {member}
            </div>
            ))}
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