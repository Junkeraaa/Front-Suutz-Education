import React, { useState, useEffect } from 'react';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar';
import VerticalBar from '../components/VerticalBar';
import '../global.css'; 
import playButtonSvg from '../assets/svg/playButton.svg';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa o estilo básico do Quill

const InsideClassLesson = () => {
  const location = useLocation();
  const { aula } = location.state || {}; // Acessa o objeto 'aula'

  const [content, setContent] = useState(aula?.content || ''); // Estado para o conteúdo editável
  const [isProfessor, setIsProfessor] = useState(false); // Estado para verificar o tipo de usuário

  // useEffect para checar o tipo de usuário no sessionStorage
  useEffect(() => {
    const userType = sessionStorage.getItem('userType');
    if (userType === 'professor') {
      setIsProfessor(true); // Se for professor, habilita o modo de edição
    } else {
      setIsProfessor(false); // Se for aluno, desabilita a edição
    }
  }, []);

  // Função para salvar o conteúdo editado no backend
  const handleSave = async () => {
    try {
      const response = await fetch(`/api/lessons/${aula.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,  // Conteúdo atualizado
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Mensagem de sucesso
        alert('Aula atualizada com sucesso!');
      } else {
        console.error('Erro ao salvar a aula');
        alert('Erro ao salvar a aula.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição.');
    }
  };

  return (
    <div style={styles.container}>
      <MainHeaderLeft />
      <div style={styles.insideClass}>
        <MyClassesHeaderBar />
        <div style={styles.dashboard}>
          <div style={styles.lessonName}>
            {aula.title}
          </div>

          {/* Se o usuário for professor, mostra o editor Quill */}
          <div style={styles.lessonBody}>
            {isProfessor ? (
              <div>
                <ReactQuill value={content} onChange={setContent} />
                <button onClick={handleSave} style={styles.saveButton}>Salvar</button>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: content }} /> // Exibe conteúdo para alunos
            )}
          </div>

          <div style={styles.lessonFooter}>
            <VerticalBar />
            <div>
              Agora chegou a hora de praticar todo o conteúdo aprendido para fixar na memória.
              <br />
              Clique em play para ser direcionado para o broker da lição!
            </div>
            <button style={styles.btnPlayBroker}>
              <img style={styles.playBtnSvg} src={playButtonSvg} alt="Play" />
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
  },
  lessonName: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: 'black',
  },
  lessonBody: {
    fontSize: '20px',
  },
  lessonFooter: {
    fontSize: '20px',
  },
  insideClass: {
    display: 'flex',
    flexDirection: 'column',
    width: '84vw',
    height: '100vh',
    fontFamily: 'freeMono',
    fontWeight: 'bold',
  },
  dashboard: {
    width: '65vw',
    height: '88vh',
    marginLeft: '2vw',
    marginTop: '1vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  playBtnSvg: {
    width: '3vh',
  },
  btnPlayBroker: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '25px',
    backgroundColor: '#00cb5e',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '5vh',
  },
  saveButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default InsideClassLesson;
