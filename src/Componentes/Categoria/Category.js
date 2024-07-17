
import styles from './Category.module.css';
import videos from '../../Videos/videos.json';

export const categorias = [
    "american", 
    "gospel", 
    "house", 
    "kizomba", 
    "samba", 
    "sloy"]
  
  export function filterCategorias (id){
    return videos.filter(video => video.categoria === categorias[id])
  }

function Category({categoria, children}){
    return(
        <section className={styles.categoria}>
            <h2>{categoria}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}
export default Category