// Import React and any other necessary components
import React from "react";
import "./index.css"; // Import your CSS file if you have one

// Define your functional component
function HorizontalLines() {
  return (
    <div className="hr-container">
      <hr className="hr-line" /> {/* First horizontal line */}
      {/* Space between lines is controlled by CSS margin */}
      <hr className="hr-line" /> {/* Second horizontal line */}
    </div>
  );
}

// Export the component
export default HorizontalLines;
