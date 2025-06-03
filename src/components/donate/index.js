import { useEffect } from 'react';
import "./index.css";

const handleDonateClick = () => {
      window.location.href = "https://pages.razorpay.com/aswa";
  };

const donate = () => {
     useEffect(() => {
        window.location.replace('https://pages.razorpay.com/aswa');
    }, []);

    return (
        <>
            <div class="rounded-box">
                <h2>Important Disclaimer</h2>
                <p>You will be redirected to the designated ASWA Rayzorpay Payment Page (Gateway). Upon successful donation, you will be redirected back to aswa4u.org.</p>
                <br/>
                <p>If you are not redirected automatically, click below button.</p>
                <br/>
                <button onClick={handleDonateClick} className="ok-button">ASWA Rayzorpay Payment Gateway</button>
                <img 
                    src='/Images/razorpay.svg' 
                    alt="Payment" 
                    style={{ display: 'block', margin:'15px auto 0px', maxWidth: '90px', borderRadius: '10px' }} 
                /> 
            </div>      
        </>
    );
};

export default donate;
