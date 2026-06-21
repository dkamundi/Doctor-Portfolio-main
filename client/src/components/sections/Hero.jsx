import { useEffect, useRef } from 'react';
import Carousel from 'bootstrap/js/dist/carousel';
import { carouselImages } from '../../constants/data';

function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return undefined;

    const carouselInstance = new Carousel(carouselRef.current, {
      interval: 5000,
      ride: 'carousel',
      pause: false,
      touch: true,
    });

    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div ref={carouselRef} id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                {carouselImages.map((image, index) => (
                  <div key={image.src} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image.src} className="img-fluid" alt={image.alt} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <button
                    type="button"
                    key={`indicator-${index}`}
                    data-bs-target="#myCarousel" 
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;