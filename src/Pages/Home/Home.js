
import Banner from "../../Componentes/Banner/Banner";
import Card from "../../Componentes/Card/Card";
import Category, {categorias, filterCategorias } from "../../Componentes/Categoria/Category";
import Container from "../../Componentes/Container/Container";
import Footer from "../../Componentes/Footer/Footer";
import Header from "../../Componentes/Header/Header";
import Carousel from '../../Componentes/Carousel';



function Home (){
  return(
    <>
    <Header />
    <Banner image="assistir" />
    <Container >
      
      {
        categorias.map((categoria, index) =>
        <Category categoria={categoria}>
            <div>
            <Carousel>
              {filterCategorias(index).map((video) => {return <Card id={video.id} key={video.id} />
                })
                }
            </Carousel>
            </div>
          </Category>
        )
      }
    </Container>
    <Footer />
    </>
  )

}
export default Home



