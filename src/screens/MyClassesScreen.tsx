import { useEffect, useState } from 'react';
import AulasDisponiveis from '../components/AulasDisponiveis';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import classBackgroundImage from '../assets/svg/classBackground.svg'

import '../global.css'; 
import { useNavigate } from 'react-router-dom';



const MyClassesScreen = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);  // Estado para o carregamento
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // Fazer a requisição ao backend com o token no cabeçalho
        const response = await fetch('http://localhost:3000/api/class/listClassCards', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do usuário');
        }

        // Converter a resposta para JSON
        const classes = await response.json();
        console.log("classes", classes)
        setClasses(classes)
        
        // Atualizar o estado com os dados do usuário
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
        // Opcionalmente, redirecionar para a página de login se o token for inválido
        navigate('/login');
      } finally {
        setLoading(false);  // Desativar o estado de carregamento
      }
    };

    // Chamar a função para buscar os dados do usuário
    fetchUserData();
  }, [navigate]);

  // Renderizar uma mensagem de carregamento enquanto busca os dados
  if (loading) {
    return <div>Carregando...</div>;
  }
  

  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.myClasses}>
          <MyClassesHeaderBar/>
          <div style={styles.dashboard}>
            {classes.map((classItem, index) => (
              <div key={index} style={styles.class} onClick={() => navigate(`/insideClass/${classItem.classroomId}`)}>
                <div>
                  <div style={styles.classHeader}>
                    {classItem.nameClassroom} {/* Nome da classe */}
                  </div>
                  <p>{classItem.nameProfessor}</p> {/* Nome do professor */}
                </div>
                <div style={styles.classFooter}>
                  <div>{classItem.availableLessons} aulas disponíveis</div> {/* Número de aulas disponíveis */}
                  <div>{classItem.membersClassroom} alunos</div> {/* Número de alunos */}
                </div>
              </div>
            ))}
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
    boxSizing:"border-box"
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
    fontWeigth:"bold"
  },
  dashboard:{
    display:"flex",
    flexWrap:'wrap',
    flexDirection:"row",
    marginLeft:"0.5vw",
    marginTop:"2vh"
  },
  class:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor:"#ededed",
    border:"1px solid",
    borderRadius:"15px",
    borderColor:"#8d8d8d",
    width:"40vw",
    height:"40vh",
    marginLeft:"1vw",
    paddingLeft:"0.5vw",
    paddingRight:"0.5vw",
    marginBottom:"2vh"
  },
  classHeader:{
    color:'black',
    fontSize:"40px",
    fontWeigth:"bold",
  },
  classFooter:{
    color:'black',
    fontSize:"20px",
    fontWeigth:"bold",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },

};

export default MyClassesScreen;