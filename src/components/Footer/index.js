import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className="footer-section-first-container">
          <div className="logo-and-gmail-container">
            <img src="/Images/aswalogo1.svg" className="aswa-logo" />
            <div className="reach-us-container">
              <h5 className="reach-us">Reach us</h5>
              <div className="mail-container">
                <img src="/Images/email.svg" />
                <p className="mail">amma.aswa@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="address-container">
            <div className="address-heading-container">
              <img src="/Images/location.svg" />
              <p className="address-heading">Registered Office</p>
            </div>
            <p className="address-description">
              #13-120, 2nd Floor,Christian Colony,Shadnagar, Ranga Reddy
              Dist.,Hyderabad 509216.Telangana, India.
            </p>
          </div>
          <div className="address-container">
            <div className="address-heading-container">
              <img src="/Images/location.svg" />
              <p className="address-heading">ADMIN OFFICE</p>
            </div>
            <p className="address-description">
              #13-120, 2nd Floor,Christian Colony,Shadnagar, Ranga Reddy
              Dist.,Hyderabad - 509216.Telangana, India.
            </p>
          </div>
        </div>
        <div className="horizontal-line-container">
          <hr />
        </div>
        <div className="follow-us-section-container">
          <div className="follow-us-icons">
            <img src="/Images/facebook.svg" />
            <img src="/Images/instagram.svg" />
            <img src="/Images/twitter.svg" />
            <img src="/Images/linkedin.svg" />
            <img src="/Images/youtube.svg" />
          </div>
          <div>
            <p className="quotation">
              All our efforts are made possible only because of your support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
