import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../NavBar';

const PdfComponent = (props)=>{
    const {pdfLink} =  props.location.state;

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>
      <embed
        src={pdfLink}
        type="application/pdf"
        width="100%"
        height="1000px"
      />
    </div>
            
    )
}

export default PdfComponent