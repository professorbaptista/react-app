
import { useState } from 'react';
import VideosLista from '../VideosLista';
import styles from './PesquisarVideoLista.module.css';

function FilterVideos (videos, searchText){
    return videos.filter((video) => video.categoria.includes(searchText) || video.titulo.includes(searchText))
}

function PesquisarVideosLista ({videos}){
    const [ searchText, setSearchText ] = useState()
    const foundVideos = FilterVideos(videos, searchText)
    return(
        <>
        <section className={styles.container}>
            <input 
            type="search"
            placeholder="Pesquisar..."
            onChange={e => setSearchText(e.target.value)}

           
            />
        <VideosLista videos={foundVideos} />
        </section>
        
        </>
    )
}
export default PesquisarVideosLista