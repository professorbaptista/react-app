
import styles from './Assistir.module.css';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';
import Container from '../../Componentes/Container/Container';
import { useParams } from 'react-router-dom';
import videos from '../../Videos/videos.json';
import PageNotFound from '../PageNotFound/PageNotFound';
function Assistir (){
    const params = useParams()
    const video = videos.find((video) => {return video.id === params.id})
    if(!video){ return <PageNotFound />}
    return(
        <>
        <Header />
        <Container>
            <section className={styles.assistir}>
                <iframe 
                width="660" height="470" src={`https://www.youtube.com/embed/${video.id}?si=hI96XMU5fjKsUA7g`} title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </section>
        </Container>
        <Footer />
        </>
    )
}
export default Assistir