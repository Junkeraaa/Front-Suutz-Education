import '../global.css'; 
import personalBalanceLogo from '../assets/svg/personalBalance.svg'


const PersonalBalance = () => {
    return (
      <div style={styles.personalBalance}>
        <img src={personalBalanceLogo} alt="" style={styles.personalBalanceLogo} />
        <p>R$980,09</p>
      </div>
    );
  };
  
  const styles = {
    personalBalance: {
        fontSize:"1.2rem",
        display: 'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      personalBalanceLogo:{
        width:'3em',        
      }
  };
  
  export default PersonalBalance;