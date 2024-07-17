

import { Link } from 'react-router-dom'
import styles from './Header.module.css'
function Header(){
    return(
        <div>
            <header className={styles.header}>

                <Link to="/">
                    <div className={styles.logo}><span>2N-Flix</span></div>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    
                    <Link to="/pesquisa">Pesquisar</Link>
                    <Link to="/favorites">Favoritos</Link>
                    <Link to="/cadastre">Cadastro</Link>
                </nav>
            </header>

        </div>
    )
}

export default Header