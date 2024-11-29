import mGlassLogo from '../assets/svg/mGlassLogo.svg';
import '../global.css'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const MyClassesHeaderBar = ({ tipo }) => {
  const navigate = useNavigate();
  const [className, setClassName] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [studentLogin, setStudentLogin] = useState(Boolean);
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState('');

  const { id } = useParams();


  const handleCriar = async () => {
    const token = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('role');
    if (!token) {
      navigate('/login');
      return;
    }

    if(tipo == 'ic' && role == 'professor'){
      try {
        console.log('oioioioioioioioioi', id)
        const response = await fetch('http://localhost:3000/api/lesson/createLesson', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: className, // Nome da aula
            content: '.',      // Sempre vazio
            classroomId: id,      // ID da turma associado
          }),
        }); 

        if (!response.ok) {
          throw new Error('Erro ao criar classe');
        }

        const resposta = await response.json();
        if(resposta.message == 'Lesson created successfully'){
          window.location.reload()
        }


        navigate(`/insideClass/${resposta.classId}`);
      } catch (error) {
        console.error('Erro ao criar classe:', error);
      }
    }
    else if (role === 'professor') {
      try {
        const response = await fetch('http://localhost:3000/api/class/createClass', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ className }),
        });

        if (!response.ok) {
          throw new Error('Erro ao criar classe');
        }

        const resposta = await response.json();
        console.log('resposta', resposta);

        navigate(`/insideClass/${resposta.classId}`);
      } catch (error) {
        console.error('Erro ao criar classe:', error);
      }
    } else {
      const classroomCode = className;
      try {
        const response = await fetch('http://localhost:3000/api/class/insertInClass', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ classroomCode }),
        });

        if (!response.ok) {
          throw new Error('Erro ao entrar na turma');
        }

        const resposta = await response.json();
        console.log('resposta', resposta);
      } catch (error) {
        console.error('Erro ao adicionar turma:', error);
      }

      window.location.reload();
    }

    toggleModal(); // Fecha o modal após a ação
  };

  useEffect(() => {
    const storedRole = sessionStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
      setStudentLogin(storedRole === 'student');
    }

    const nome = sessionStorage.getItem('name');
    if (nome) {
      setNomeUsuario(nome);
    }
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleNomeChange = (e) => {
    setClassName(e.target.value);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.myClasses}>
          <div style={styles.cabecalho}>
            <div style={styles.headerLeft}>
              <div>Minhas turmas</div>
              <div style={styles.textUser}>Bem vindo! {nomeUsuario}</div>
            </div>

            <div style={styles.headerRight}>
              <button>
                <img src={mGlassLogo} style={styles.headerLogo} />
              </button>
              <button style={styles.btnAddTurma} onClick={toggleModal}>
                {studentLogin ? 'Adicionar turma' : 'Criar nova turma'}
              </button>

              {/* Botão "Adicionar aula" somente para tipo 'ic' e role 'professor' */}
              {tipo === 'ic' && role === 'professor' && (
                <button style={styles.btnAddTurma} onClick={toggleModal}>
                  <img src="" alt="" />
                  Adicionar aula
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
            <h2>{studentLogin ? 'Adicionar Turma' : tipo === 'ic'? 'Criar nova aula' : 'Criar nova turma'}</h2>
            <p>{studentLogin ? 'Digite o código da turma' : tipo ==='ic'? 'Digite o título da aula' : 'Digite o nome da turma'}</p>
            <input
              type="text"
              style={styles.inputField}
              value={className}
              onChange={handleNomeChange}
            />
            <div style={styles.modalActions}>
              <button onClick={toggleModal} style={styles.cancelButton}>
                Cancelar
              </button>
              <button style={styles.saveButton} onClick={handleCriar}>
                {studentLogin ? 'Adicionar' : 'Criar'}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
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
      justifyContent:"space-between",
      boxSizing: "border-box"
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
      display: 'flex',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    headerLeft:{
      color:"black",
      fontFamily:'freeMono',
      fontSize:'35px',
      fontWeight:"bold"
    },
    textUser:{
      fontSize:'15px',
      fontWeight:"bold"
    },
    dashboard:{
  
    }
  
  };

export default MyClassesHeaderBar;
