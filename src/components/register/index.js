import { useEffect } from 'react';
import "./index.css";

const Redirect = () => {
  useEffect(() => {
    window.location.replace('https://forms.gle/NEdTo4aiYcHc3iYw9');
  }, []);

return (
    <div className='redirect-container'>  
      <h1>Redirecting to Google Forms...</h1>
      <p>If you are not redirected automatically, click <a href="https://forms.gle/NEdTo4aiYcHc3iYw9">here</a>.</p>
    </div>
  );
};

export default Redirect;