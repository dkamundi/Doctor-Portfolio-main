import { Link } from 'react-router-dom';
import { procedures } from '../../constants/data';
import '../ui/Card.css';

function Procedures() {
  return (
    <section id="procedures" className="section-padding">
      <div className="container">
        <h2 className="mb-5">Highlighted Procedures</h2>
        <div className="row g-4">
          {procedures.map((procedure, index) => (
            <div key={procedure.id} className="col-lg-4 col-md-6 col-12">
              <div className="interactive-card procedure-card card-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={procedure.image} alt={procedure.name} />
                <h5>{procedure.name}</h5>
                <p>{procedure.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/scope" className="btn btn-primary">Explore More Services</Link>
        </div>
      </div>
    </section>
  );
}

export default Procedures;