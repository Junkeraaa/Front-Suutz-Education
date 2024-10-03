import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar'
import AulasDisponiveis from '../components/AulasDisponiveis';
import ClassMembers from '../components/ClassMembers';
import '../global.css'; 

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const InsideClass = () => {

  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          console.error('Token não encontrado!');
          return;
        }


        const response = await fetch(`http://localhost:3000/api/class/listClassInfosToFront?classroomId=${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da classe');
        }

        const data = await response.json();
        console.log('dados',data)
        setClassData(data); // Atualizar o estado com os dados da classe
      } catch (error) {
        console.error('Erro ao buscar os dados da classe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClassData(); // Chamar a função para buscar os dados
  }, [id]);

  // Se estiver carregando, mostrar mensagem de carregamento
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se os dados da classe ainda não foram carregados, mostrar mensagem
  if (!classData) {
    return <div>Dados da classe não encontrados.</div>;
  }


  return (
    <div style={styles.container}>
        <MainHeaderLeft/>
        <div style={styles.insideClass}>
          <MyClassesHeaderBar/>
          <div style={styles.dashboard}>
            <AulasDisponiveis aulas={classData.lessons}/>
            <ClassMembers members={classData.membersName}/>
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
    boxSizing:'border-box'
  },
  title: {
    fontSize: '2rem',
  },
  insideClass:{
    display:"flex",
    flexDirection:"column",
    width:"84vw",
    heigth:"100vh",
    fontFamily:"freeMono",
    fontWeigth:"bold",
    boxSizing:'border-box'
  },
  dashboard:{
    display:"flex",
    flexDirection:"row",
    boxSizing:'border-box'
  }

};

export default InsideClass;