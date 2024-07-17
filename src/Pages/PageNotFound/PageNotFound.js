

import Container from '../../Componentes/Container/Container';
import Footer from '../../Componentes/Footer/Footer';
import Header from '../../Componentes/Header/Header';
import styles from './PageNotFound.module.css';
function PageNotFound (){
    return(
        <>
        <Header />
        <Container>
        <section className={styles.pageNotFound}>
                <h1>Ops! Pagina não encontada</h1>
                <img src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg?size=626&ext=jpg&ga=GA1.2.984212527.1720646235&semt=ais_user" alt='page' />
            </section>
        </Container>
        <Footer />
        </>
    )
}
export default PageNotFound