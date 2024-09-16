import '../global.css'; 
import personalBalanceLogo from '../assets/svg/personalBalance.svg'


const PersonalBalance = () => {
    return (
      <div style={styles.personalBalance}>
        <img src={personalBalanceLogo} alt="" style={styles.personalBalanceLogo} />
        <p style={styles.p}>R$980,09</p>
      </div>
    );
  };
  
  const styles = {
    personalBalance: {
        display: 'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      p:{
        fontSize:"1.5em",
        color:"black",
        marginLeft:"0.5vw"
      },
      personalBalanceLogo:{
        width:'3em',        
      }
  };
  
  export default PersonalBalance;