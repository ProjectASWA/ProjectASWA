import "./index.css";

const quotationsArr = [
  "Be the change you wish to see.",
  "No act of kindness is ever wasted.",
  "Together, we can do so much",
  "Small acts, when multiplied, can change the world.",
  "Service to others is the rent we pay for living",
  "The power of one is infinite.",
  "Lift others, lift yourself.",
  "Kindness creates endless ripples"
]

const randomIndex = Math.floor(Math.random() * quotationsArr.length);

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className="footer-section-first-container">
          <div className="logo-and-gmail-container">
            <img src="/Images/logoAswa.png" className="aswa-logo" />
            <div className="reach-us-container">
              <h5 className="reach-us">Reach us</h5>
              <a href="mailto:info@aswa4u.org">
                <div className="mail-container">
                  <img
                    className="locationImageFooter"
                    src="/Images/email.svg"
                  />
                  <p className="mail">amma.aswa@gmail.com</p>
                </div>
              </a>
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
            <a href="https://www.facebook.com/AMMAASWA">
              <img
                className="locationImageFooter1"
                src="/Images/facebook.svg"
              />
            </a>
            <a href="https://www.instagram.com/ammaaswa/">
              <img
                className="locationImageFooter1"
                src="/Images/instagram.svg"
              />
            </a>

            <a href="https://twitter.com/ammaaswa">
              {" "}
              <img className="locationImageFooter1" src="/Images/xLogo.svg" />
            </a>

            <a href="https://api.whatsapp.com/send/?phone=919948885111&text&type=phone_number&app_absent=0">
              {" "}
              <img
                style={{ objectFit: "contain" }}
                src="/Images/whatsapp.svg"
                className="locationImageFooter1"
              />
            </a>

            <a href="https://www.youtube.com/channel/UCi3-LOqxkkyrIAxKv8WtGoA">
              {" "}
              <img className="locationImageFooter1" src="/Images/youtube.svg" />
            </a>
          </div>
          <div>
            <p className="quotation">
              {quotationsArr[randomIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
