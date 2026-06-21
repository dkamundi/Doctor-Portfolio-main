import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../components/ui/Card.css';

function Scope() {
  const services = [
    {
      title: "Reconstructive Surgery",
      items: [
        { name: "Burns Management - Acute and rehabilitative", desc: "Comprehensive care for burn injuries, including initial treatment and long-term rehabilitation." },
        { name: "Soft tissue trauma", desc: "Treatment of injuries affecting muscles, ligaments, and other soft tissues." },
        { name: "Skin grafting - STSG, FTSG", desc: "Surgical procedures to transplant skin from one area of the body to another, using either split-thickness skin grafts (STSG) or full-thickness skin grafts (FTSG)." },
        { name: "Comprehensive wound care", desc: "Management of various types of wounds, including vascular ulcers, hypertensive ulcers, diabetic ulcers, pressure sores, and trauma-related wounds." }
      ]
    },
    {
      title: "Breast Surgery",
      items: [
        { name: "Breast reconstruction", desc: "Surgical procedures to rebuild the breast shape following a mastectomy." },
        { name: "Reduction mammoplasty", desc: "Surgery to reduce breast size for relief from physical discomfort or for aesthetic purposes." },
        { name: "Gynecomastia surgery", desc: "Correction of overdeveloped or enlarged breasts in men." },
        { name: "Breast augmentation", desc: "Enhancing breast size and shape using implants." },
        { name: "Mastopexy", desc: "Procedures to lift and reshape sagging breasts." }
      ]
    },
    {
      title: "Regional Aesthetic Procedures",
      items: [
        { name: "Facial aesthetic surgery", desc: "Including facelifts, rhinoplasty, blepharoplasty, and otoplasty for enhancing facial features." },
        { name: "Body contouring", desc: "Procedures such as liposuction and tummy tucks to improve body shape." },
        { name: "Non-surgical aesthetic treatments", desc: "Including Botox, fillers, and laser treatments for skin rejuvenation." }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding" id="scope" style={{ marginTop: '100px' }}>
          <div className="container">
            <h2 className="mb-5">Scope of Plastic Reconstructive and Aesthetic Surgery</h2>
            <div className="row g-4">
              {services.map((service, idx) => (
                <div key={idx} className="col-lg-6 col-md-6 col-12">
                  <div className="interactive-card mission-card card-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item, index) => (
                        <li key={index} className="mb-2">
                          <strong>{item.name}:</strong> {item.desc}
                        </li>
                      ))}
                    </ul>
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

export default Scope;