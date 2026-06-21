import { missionVision } from '../../constants/data';
import '../ui/Card.css';

function MissionVision() {
  return (
    <section id="mission-vision-values" className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="interactive-card mission-card card-animate text-center">
              <h3 className="mb-3">{missionVision.commitment.title}</h3>
              <p>{missionVision.commitment.description}</p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="interactive-card mission-card card-animate text-center" style={{ animationDelay: '0.1s' }}>
              <h3 className="mb-3">{missionVision.mission.title}</h3>
              <p>{missionVision.mission.description}</p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="interactive-card mission-card card-animate text-center" style={{ animationDelay: '0.2s' }}>
              <h3 className="mb-3">{missionVision.vision.title}</h3>
              <p>{missionVision.vision.description}</p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="interactive-card mission-card card-animate text-center" style={{ animationDelay: '0.3s' }}>
              <h3 className="mb-4">{missionVision.values.title}</h3>
              <ul className="list-unstyled">
                {missionVision.values.items.map((value, index) => (
                  <li key={index} className="mb-3">
                    <strong>{value.name}:</strong> {value.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;