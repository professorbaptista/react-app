import styles from './VideoCadastre.module.css';
import Header from '../../Componentes/Header/Header';
import Container from '../../Componentes/Container/Container'
import Form from '../../Componentes/Form';
import Footer from '../../Componentes/Footer/Footer';

function VideoCadastre (){
    return(
        <section className={styles.container}>
        <Header />
        <Container>
            <Form />
        </Container>
        <Footer />
        
        </section>
    )
}

export default VideoCadastre