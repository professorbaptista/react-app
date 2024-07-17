
import "./Carousel.css";
import Slider from "react-slick";

function Carousel ({children}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(

        <div className={Carousel}>
            <Slider {... settings}>
                {children}
            </Slider>
        </div>
    )
}
export default Carousel