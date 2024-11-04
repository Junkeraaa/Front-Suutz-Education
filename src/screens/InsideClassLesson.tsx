import React, { useState, useEffect } from 'react';
import MainHeaderLeft from '../components/MainHeaderLeft';
import MyClassesHeaderBar from '../components/MyClassesHeaderBar';
import VerticalBar from '../components/VerticalBar';
import '../global.css'; 
import playButtonSvg from '../assets/svg/playButton.svg';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const InsideClassLesson = () => {
  const location = useLocation();
  const { aula } = location.state || {};
  const [content, setContent] = useState(aula?.content || '');
  const [isProfessor, setIsProfessor] = useState(false);
  const [images, setImages] = useState([]); // Array para armazenar as imagens em base64

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    setIsProfessor(role === 'professor');
  }, []);

  // Função para converter imagem em base64 e adicioná-la ao array de imagens
  const uploadImage = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        const base64Image = reader.result.split(',')[1];
        setImages((prevImages) => [...prevImages, base64Image]);
        resolve();
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Configuração do Quill com handler de imagem
  const quillModules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }, { 'background': [] }],
        ['image']
      ],
      handlers: {
        image: function () {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();

          input.onchange = async () => {
            const file = input.files[0];
            if (file) {
              await uploadImage(file);
              const range = this.quill.getSelection();
              this.quill.insertEmbed(range.index, 'image', reader.result);
            }
          };
        }
      }
    }
  };

  // Função para salvar o conteúdo editado no backend
  const handleSave = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/lesson/editLesson/${aula.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
          images: images, // Envia o array de imagens em base64
        }),
      });

      if (response.ok) {
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
          <div style={styles.lessonName}>{aula.title}</div>
          <div style={styles.lessonBody}>
            {isProfessor ? (
              <div>
                <ReactQuill value={content} onChange={setContent} modules={quillModules} />
                <button onClick={handleSave} style={styles.saveButton}>Salvar</button>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: content }} />
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
  container: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  title: { fontSize: '2rem' },
  lessonName: { fontSize: '35px', fontWeight: 'bold', color: 'black' },
  lessonBody: { fontSize: '20px' },
  lessonFooter: { fontSize: '20px' },
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
  playBtnSvg: { width: '3vh' },
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
