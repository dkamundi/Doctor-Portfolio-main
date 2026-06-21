import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../components/ui/Card.css';

function LiviaMediSpa() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding" style={{ marginTop: '100px' }}>
          <div className="container">
            <h1 className="mb-5 text-center">Livia MediSpa</h1>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <div className="interactive-card about-card card-animate">
                  <img 
                    src="/images/Livia/livia1.jpeg" 
                    alt="Livia MediSpa" 
                    className="img-fluid rounded mb-4" 
                    style={{ width: '100%' }}
                  />
                  <h3>Welcome to Livia MediSpa</h3>
                  <p>
                    Experience premium aesthetic and wellness treatments in a luxurious and comfortable environment.
                    Our state-of-the-art facility offers a comprehensive range of non-surgical cosmetic procedures
                    and medical spa treatments.
                  </p>
                  <h4 className="mt-4">Our Services Include:</h4>
                  <ul>
                    <li>Advanced skin rejuvenation treatments</li>
                    <li>Non-surgical face and body contouring</li>
                    <li>Laser treatments</li>
                    <li>Aesthetic injectables (Botox & Fillers)</li>
                    <li>PRP therapy</li>
                    <li>Medical-grade skincare</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Contact us to schedule your consultation and discover how we can help you look and feel your best.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LiviaMediSpa;