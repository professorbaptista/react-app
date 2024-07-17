
import styles from './Favorites.module.css';
import Header from '../../Componentes/Header/Header';
import Container from '../../Componentes/Container/Container';
import Footer from '../../Componentes/Footer/Footer';
import VideosLista from '../../Componentes/VideosLista/index';
import { useFavoritesContext } from '../../contexts/Favorites';


function Favorites (){
    // Estado personalido de videos favotitos.
    const {favorite} = useFavoritesContext()
    return(
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h1>Mues videos Favoritos</h1>
                   {<VideosLista videos={favorite} emptyHeading="Sem videos favoritos" />}
                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Favorites