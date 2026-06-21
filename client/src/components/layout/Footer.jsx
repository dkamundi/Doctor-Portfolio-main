import { siteInfo, socialLinks } from '../../constants/data';

function Footer() {
  return (
    <footer className="site-footer section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
            <h5 className="mb-lg-4 mb-3">Contact</h5>
            <p>Email: <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
            <p>Phone: <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
            <p>{siteInfo.location}</p>
          </div>

          <div className="col-lg-3 col-md-6 col-12 ms-auto">
            <h5 className="mb-lg-4 mb-3">Socials</h5>
            <ul className="social-icon">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url} 
                    className={`social-icon-link ${social.icon}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  ></a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 col-12 ms-auto">
            <h5 className="mb-lg-4 mb-3">Location</h5>
            <ul className="social-icon">
              <li><a href="https://maps.app.goo.gl/aQu2shzWtQmH3XCs8" target="_blank" rel="noopener noreferrer" className="social-icon-link bi-geo-alt-fill"></a></li>
            </ul>
            <p>{siteInfo.doctorName}</p>
            <p>{siteInfo.hospital}</p>
            {siteInfo.addressLines?.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="col-lg-3 col-12 ms-auto mt-4 mt-lg-0">
            <p className="copyright-text">Copyright © Reuben Kamundi 2024
            <br /><br />Design: <a href="https://davidkamundi.vercel.app" target="_blank" rel="noopener noreferrer">David Kamundi</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;