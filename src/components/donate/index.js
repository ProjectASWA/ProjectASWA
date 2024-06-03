import "./index.css";

const handleDonateClick = () => {
      window.location.href = "https://pages.razorpay.com/aswa";
  };


const donate = () => {
    return (
        <div class="rounded-box">
            <h2>Important Disclaimer</h2>
            <p>You will be redirected to the designated ASWA Rayzorpay Payment Page (Gateway). Upon successful donation, you will be redirected back to aswa4u.org.</p>
            <br/>
            <p>By clicking "OK", you acknowledge this disclaimer and agree to proceed.</p>
            <br/>
            <button onClick={handleDonateClick} className="ok-button">OK</button>
        </div>
    );
};

export default donate;
