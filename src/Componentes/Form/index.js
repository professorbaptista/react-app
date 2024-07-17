
import styles from './Form.module.css';
import { categorias } from '../Categoria/Category';
import { useState } from 'react';

function Form (){
    //useState para obter as informações dos formularios, o url e a categoria
    const [ url, setUrl ] = useState('');
    const [ categoria, setCategoria ] = useState('');
    // Estado para lista de videos a ser cadastrados
    const [ videos, setVideos ] = useState([]);
    // Estado para exibir mensagem de erro caso exista.
    const [ erros, setErros ] = useState("");

    function valideUrl(url) {
        // Expressão regular para validar URL do YouTube
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        if(!regex.test(url) || url.lenght < 43){
            setErros("Erro! URL Invalido!")
            return false
        } else {
            return url.substring(32, 43) // De 32 a 43 é o id do video.
        }
    }
    // Validar a categoria.
    if(!categoria || categoria === "*"){
       setErros("Erro! Escolhe uma categoria.")
        return 
    } else{
        setErros("")
    }
  
    function onSave(e){
        e.preventDefault()
        console.log(url, categoria)

        // Validar a URL
        const urlVideo = valideUrl(url)
        if(urlVideo && categoria){
            const newVideo = {url, categoria} //objecto
            setVideos([...videos, newVideo]);
            // console.log(videos)
            // Para guardar os dados localmente cria-se a localStore.
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]))
            setUrl("");
            setCategoria("")
        } else {
            setErros('URL ')
        }

        }
        // Recebimento das informações
        // Variavel para guardar os novos ur e videos.

    return(
        <section className={styles.container}>

            <h1> Cadastro de videos </h1>
            <form 
            //Atrelar a função onSave aqui na tag de abertura de form.
            onSubmit={onSave}
            >
                <div>
                    <label>url de Videos</label>
                    <input 
                        type="text" 
                        minLength="43"
                        maxLength="43"
                    
                        placeholder="Digite a url do video"
                        required = "required"
                        value={url}
                        onChange={evento => setUrl(evento.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                     required = "required"
                     value={categoria}
                     onChange={evento => setCategoria(evento.target.value)}
                    >
                        <option value="*">
                            Selecione uma Categoria
                        </option>
                        {categorias.map((item) => {
                            return <option value={item}>
                                {item}
                            </option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div className={styles.erro}>
                    <p>{erros}</p>
                </div>
            </form>
        </section >

    )
}

export default Form 