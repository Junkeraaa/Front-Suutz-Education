import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa o estilo básico do Quill
import '../global.css';

const NewsDashboard = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isProfessor, setIsProfessor] = useState(false);

    useEffect(() => {
        // Verifica o papel do usuário
        const role = sessionStorage.getItem('role');
        if (role === 'professor') {
            setIsProfessor(true);
        }

        // Busca as notícias da API
        const fetchNews = async () => {
            try {
                const response = await axios.get('srv656114.hstgr.cloud:4000/news');
                console.log('Notícias recebidas:', response.data.data)
                setNews(response.data.data || response.data);
            } catch (error) {
                setError('Erro ao buscar notícias.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleSave = async (newsId, updatedContent) => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.put(
                `srv656114.hstgr.cloud:4000/news/edit/${newsId}`,
                { content: updatedContent },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 200) {
                setNews((prevNews) =>
                    prevNews.map((item) =>
                        item.id === newsId ? { ...item, content: updatedContent } : item
                    )
                );
            } else {
                alert('Erro ao salvar a notícia.');
            }
        } catch (error) {
            console.error('Erro ao salvar a notícia:', error);
            alert('Erro ao salvar a notícia.');
        }
    };

    if (loading) return <div style={styles.loading}>Carregando...</div>;
    if (error) return <div style={styles.error}>{error}</div>;

    return (
        <div style={styles.container}>
            {news.map((item) => (
                <div key={item.id} style={styles.newsBlock}>
                    <h2 style={styles.title}>{item.title}</h2>
                    <p style={styles.date}>Criado em: {new Date(item.createdAt).toLocaleString()}</p>
                    {isProfessor ? (
                        <div>
                            <ReactQuill
                                value={item.description}  // Assumindo que a descrição é o conteúdo da notícia
                                onChange={(value) =>
                                    setNews((prev) =>
                                        prev.map((newsItem) =>
                                            newsItem.id === item.id ? { ...newsItem, description: value } : newsItem
                                        )
                                    )
                                }
                                style={styles.editor}
                            />
                            <button
                                onClick={() => handleSave(item.id, item.description)}
                                style={styles.saveButton}
                            >
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <div
                            dangerouslySetInnerHTML={{ __html: item.description }}  // Exibe o conteúdo formatado
                            style={styles.content}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow:'auto',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
        height:'90vh',
        backgroundColor: '#f8f9fa',
    },
    newsBlock: {
        width: '45%',
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Alinha o conteúdo à esquerda
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    date: {
        fontSize: '0.9rem',
        color: '#666',
        marginBottom: '10px',
    },
    icon: {
        width: '30px',
        height: '30px',
        marginBottom: '10px',
    },
    content: {
        fontSize: '1rem',
        lineHeight: '1.5',
    },
    editor: {
        height: '150px',
        marginBottom: '20px', // Espaço abaixo do editor para o botão
        width: '100%', // Garante que o editor ocupe toda a largura disponível
    },
    saveButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop:'2em',
        alignSelf: 'flex-end', // Alinha o botão à direita
    },
    loading: {
        fontSize: '1.5rem',
        color: '#666',
    },
    error: {
        fontSize: '1.5rem',
        color: 'red',
    },
};


export default NewsDashboard;
