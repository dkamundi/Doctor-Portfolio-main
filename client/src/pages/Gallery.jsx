import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../components/ui/Card.css';

function Gallery() {
  const galleryImages = [
    { src: '/images/gallery/about.jpg', alt: 'Dr. Kamundi' },
    { src: '/images/gallery/citizen.JPG', alt: 'Citizen award' },
    { src: '/images/gallery/picture001.png', alt: 'Gallery image 1' },
    { src: '/images/gallery/picture002.png', alt: 'Gallery image 2' },
    { src: '/images/gallery/picture003.png', alt: 'Gallery image 3' },
    { src: '/images/gallery/theatre.jpeg', alt: 'Theatre' }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding" style={{ marginTop: '100px' }}>
          <div className="container">
            <h1 className="mb-5 text-center">Archive</h1>
            <div className="row g-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="interactive-card gallery-card card-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="img-fluid"
                      style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;