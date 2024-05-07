import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className="footer-section-first-container">
          <div className="logo-and-gmail-container">
            <img src="/Images/websiteLogoFooter.png" className="aswa-logo" />
            <div className="reach-us-container">
              <h5 className="reach-us">Reach us</h5>
              <div className="mail-container">
                <img className="locationImageFooter" src="/Images/email.svg" />
                <p className="mail">amma.aswa@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="address-container">
            <div className="address-heading-container">
              <img className="locationImageFooter" src="/Images/location.svg" />
              <p className="address-heading">Registered Office</p>
            </div>
            <p className="address-description">
              #13-104, P & T Colony,Gaddi Annaram,Dilsukh
              Nagar,Hyderabad-500060Telangana, India.
            </p>
          </div>
          <div className="address-container">
            <div className="address-heading-container">
              <img className="locationImageFooter" src="/Images/location.svg" />
              <p className="address-heading">ADMIN OFFICE</p>
            </div>
            <p className="address-description">
              #13-120, 2nd Floor,Christian Colony,Shadnagar, Ranga Reddy
              Dist.,Hyderabad - 509216.Telangana, India.
            </p>
          </div>
        </div>
        <div className="horizontal-line-container">{/* <hr /> */}</div>
        <div className="follow-us-section-container">
          <div className="follow-us-icons">
            <img className="locationImageFooter" src="/Images/facebook.svg" />
            <img className="locationImageFooter" src="/Images/instagram.svg" />
            <img
              style={{ objectFit: "contain" }}
              className="locationImageFooter"
              src="/Images/X1.png"
            />
            <img className="locationImageFooter" src="/Images/linkedin.svg" />
            <img className="locationImageFooter" src="/Images/youtube.svg" />
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
