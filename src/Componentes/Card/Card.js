
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import { useFavoritesContext } from '../../contexts/Favorites';
import unFavoriteIcon from './unfavorite.jpg';

function Card ({ id }){
    // Depois de efetuar o useContext na pagina dos favotitos chamar o hook aqui
    const { favorite, addFavorite } = useFavoritesContext()
    const isFavorite = favorite.some((favorite) => favorite.id === id)
    const image = isFavorite ? unFavoriteIcon : favoriteIcon;

    return(
        <section className={styles.card}>
           
           <Link to={`/assistir/${id}`}>

                <img src={`https://img.youtube.com/vi/${id}/sddefault.jpg`} alt="capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img 
                src={image} 
                alt='icone' 
                onClick={() => addFavorite({id})}
               
                />
           </figure>
        </section>
    )
}
export default Card