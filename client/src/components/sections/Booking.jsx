import { useState } from 'react';
import axios from 'axios';
import { procedureOptions } from '../../constants/data';
import '../ui/Card.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedure: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/book', formData);
      alert(response.data.message);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        procedure: '',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="section-padding">
      <div className="container">
        <div className="interactive-card booking-card card-animate">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img src="/images/slider/pic03.jpg" alt="Booking" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="mb-4">Book an Appointment</h2>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="procedure" className="form-label">Procedure</label>
                <select 
                  className="form-select" 
                  id="procedure" 
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Procedure</option>
                  {procedureOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Additional Message (optional)</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
