import { useEffect } from "react"
import review1 from "../../assets/imgs/testimonial-1.png"
import review2 from "../../assets/imgs/testimonial-2.png"
import review3 from "../../assets/imgs/testimonial-3.png"
import "./Reviews.css"

const Reviews = () => {

    useEffect(() => {
        // Inicializar el carrusel cuando el componente se monta
        const carousel = document.querySelector("#testimonials .carousel");
        new bootstrap.Carousel(carousel);
      }, []);
      
    return (
        <div id="testimonials" className="testimonials-container">
            <h4 className="testimonials-title">NUESTRAS RESEÑAS DE GOOGLE 📖🖊️</h4>
            <h6 className="testimonials-subtitle">¿Qué opinan sobre nosotros?<br />DEJANOS TU RESEÑA <a
                href="https://www.google.com/maps/place/BR+Burgers/@-34.5261055,-58.4985175,19z/data=!4m8!3m7!1s0x95bcb12ac7de2707:0x704423c3a2da747d!8m2!3d-34.526908!4d-58.4976617!9m1!1b1!16s%2Fg%2F11p0wr_gs_?hl=es"
                target="_blank"
                rel="noreferrer"> <br /> Haciendo click aca!</a></h6>
            <div id="testimonials" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#testimonials" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Testimonial 1"></button>
                    <button type="button" data-bs-target="#testimonials" data-bs-slide-to="1"
                        aria-label="Testimonial 2"></button>
                    <button type="button" data-bs-target="#testimonials" data-bs-slide-to="2"
                        aria-label="Testimonial 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="testimonial">
                            <div className="testimonial-img">
                                <img src={review1} alt="Testimonio" />
                            </div>
                            <div className="testimonial-content">
                                <p>Riquísima la burga, muy jugosa, con un pan que termina siendo casi un blend más con
                                    la carne. Tienen mucha variedad, pero todas muy equilibradas. La cerveza tirada es
                                    Bierhaus, lo que le entrega un plus a los combos. Buena relación precio-calidad.</p>
                                <p><strong>- Jeremías Meniconi Bretscher - </strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial">
                            <div className="testimonial-img">
                                <img src={review2} alt="Testimonio 2" />
                            </div>
                            <div className="testimonial-content">
                                <p>Si te queres comer unas buenas hamburguesas por zona norte este es el lugar, tienen
                                    16 combinaciónes diferentes y muchas veggies tambien.</p>
                                <p><strong>- Manuel Duran -</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial">
                            <div className="testimonial-img">
                                <img src={review3} alt="Imagen del testimonio 3" />
                            </div>
                            <div className="testimonial-content">
                                <p>Se ha convertido en la mejor hamburguesería de zona norte. Desde pandemia que pido, y
                                    el este año es mi ritual de viernes. Nunca falla, las hamburguesas son buenísimas.
                                    Si estás tentando en comer una bien potente, nunca defrauda. Cualquiera de las
                                    variantes son muy buenas. Mis favs son: BR cheese y BigR.</p>
                                <p><strong>- Mateo Sanz Pedemonte -</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews