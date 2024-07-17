
import styles from './Pesquisa.module.css'; 
import Header from '../../Componentes/Header/Header';
import Container from '../../Componentes/Container/Container';
import Footer from '../../Componentes/Footer/Footer';
import videos from '../../Videos/videos.json';
import PesquisarVideosLista from '../../Componentes/PesquisarVideoLista';

function Pesquisar(){
    return(
        <>
        <Header />
        <Container>
        <>
        <section className={styles.pesquisa}>
        <h1>Pesquisar</h1>
        <PesquisarVideosLista videos={videos} />
        </section>
        </>
        </Container>
        <Footer />
        </>
    )
}
export default Pesquisar