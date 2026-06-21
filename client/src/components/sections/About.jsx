import { about, siteInfo } from '../../constants/data';
import '../ui/Card.css';

function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="interactive-card about-card card-animate">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="mb-lg-4 mb-3">{about.title}</h2>
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <img 
                src={about.image} 
                className="img-fluid rounded" 
                alt={siteInfo.doctorName} 
                title={siteInfo.doctorName}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;