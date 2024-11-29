import { useState, useEffect } from 'react';
import mGlassLogo from '../assets/svg/mGlassLogo.svg';
import '../global.css'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewsHeader = () => {
  const navigate = useNavigate();
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [role, setRole] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { classroomId } = useParams();

  useEffect(() => {
    const storedRole = sessionStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleCreateNews = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    if (role === 'professor') {
      try {
        const response = await fetch('http://srv656114.hstgr.cloud:4000/news/createNews', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            input: [
              {
                title: newsTitle,     // Título da notícia
                description: newsContent  // Conteúdo da notícia
              }
            ]
          }),
        });

        if (!response.ok) {
          throw new Error('Erro ao criar notícia');
        }
        else{
          window.location.reload()
        }

        const resposta = await response.json();
        console.log('Notícia criada:', resposta);
        toggleModal(); // Fecha o modal após a criação da notícia
      } catch (error) {
        console.error('Erro ao criar notícia:', error);
      }
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTitleChange = (e) => {
    setNewsTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewsContent(e.target.value);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
            <div style={styles.headerLeft}>
              <div>Suutz News</div>
              <div style={styles.textUser}>Bem vindo! {sessionStorage.getItem('name')}</div>
            </div>

            <div style={styles.headerRight}>
              {role === 'professor' && (
                <button style={styles.btnAddTurma} onClick={toggleModal}>
                  Adicionar notícia
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          style={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleModal();
          }}
        >
          <div style={styles.modalContent}>
            <h2>Adicionar nova notícia</h2>
            <p>Digite o título e o conteúdo da notícia</p>
            <input
              type="text"
              style={styles.inputField}
              placeholder="Título da notícia"
              value={newsTitle}
              onChange={handleTitleChange}
            />
            <textarea
              style={styles.inputField}
              placeholder="Conteúdo da notícia"
              value={newsContent}
              onChange={handleContentChange}
            />
            <div style={styles.modalActions}>
              <button onClick={toggleModal} style={styles.cancelButton}>
                Cancelar
              </button>
              <button style={styles.saveButton} onClick={handleCreateNews}>
                Criar notícia
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Aqui é onde a transparência é aplicada
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    marginLeft:"auto",
    marginRight: '20px', // Adiciona um pequeno espaço entre o modal e a borda direita
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  saveButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
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
      fontFamily:"freeMono",
      fontWeight:"bold"
    },
    cabecalho:{
      paddingLeft:"2vw",
      paddingRight:"2vw",
      marginTop:"2vh",
      // height:"10vh",
      // width:"84vw",
      display: 'flex',
      flexDirection:"row",
      boxSizing: "border-box",
      justifyContent:"space-between"
    },
    headerLogo:{
      width:"2.5vh",
    },
    btnAddTurma:{
      backgroundColor:"#231f20",
      color:"white",
      paddingTop:"1.5vh",
      paddingBottom:"1.5vh",
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      justifyContent:"center",
      marginLeft:"0.5vw"
    },
    headerRight:{
        color:"black",
        fontWeight:"bold",
      fontSize:"1.5rem",
      display: 'flex',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    headerLeft:{
      color:"black",
      fontFamily:'freeMono',
      fontSize:'35px',
      fontWeight:"bold",
      display:"flex",
      flexDirection:"column"
    },
    textUser:{
      fontSize:'15px',
      fontWeight:"bold"
    },
    newsLogo:{
        width:"35px"
      },
    suutzNews:{
        width:"15vw",
        height:"6vh",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    sN:{
      display:'flex',
      flexDirection:"row",
      alignItems:"center"
    },
    newsHeader:{
      color:'black',

      fontSize:"3rem"
    },
    newsSubHeader:{
      fontSize:"1.5rem",
      color:"black"
    },
    newsLogo2:{
      width:"50px",
      marginLeft:"1em"
    },
   
    header:{
        marginRight:"1vw",
    }
     
  
  };

export default NewsHeader;