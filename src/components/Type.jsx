import React, { useState }from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaInfoCircle, FaExclamationCircle, FaHandsHelping } from 'react-icons/fa';
import Nav from './Nav';
import PsychologicalHelpPage from './PsychologicalHelpPage';  // Import new page

function App() {
const [showPopup, setShowPopup] = useState(null); // State to control popup visibility and content
const [selectedBullying, setSelectedBullying] = useState(null); // State to store selected bullying type
const [showDropdown, setShowDropdown] = useState({
  awareness: false,
  faq: false,
});

const togglePopup = (section) => {
  if (showPopup === section) {
    setShowPopup(null);
  } else {
    setShowPopup(section);
  }
};

const toggleDropdown = (section) => {
  setShowDropdown((prevState) => ({
    ...prevState,
    [section]: !prevState[section],
  }));
};

const handleBullyingSelection = (bullyingType) => {
  setSelectedBullying(bullyingType);
};
return (
    <Router>
      <div>
        <Nav />
        {/* Header Section with Divs */}
        <div className="header-container">
          <div className="header-item" onClick={() => togglePopup('about')}>
            <FaInfoCircle size={50} />
            <h2>About</h2>
          </div>
          <div className="header-item" onClick={() => togglePopup('precautions')}>
            <FaExclamationCircle size={50} />
            <h2>Precautions</h2>
          </div>
          <div className="header-item" onClick={() => togglePopup('help')}>
            <FaHandsHelping size={50} />
            <h2>Help</h2>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/psychological-help"
            element={<PsychologicalHelpPage />}
          />
          {/* Other routes (if any) */}
        </Routes>

        {/* Help Popup */}
        {showPopup === 'help' && (
          <div className="popup">
            <div className="popup-content">
              <h3>Help Section</h3>
              <p>Here you can find resources and ways to seek help if you or someone you know is being bullied.</p>

              {/* New Help Buttons */}
              <div>
                <button onClick={() => handleBullyingSelection('Psychological Help')}>
                  Psychological Help
                </button>
                <button onClick={() => handleBullyingSelection('Anonymous Report')}>
                  Anonymous Report
                </button>
                <button onClick={() => handleBullyingSelection('Report with Evidence')}>
                  Report with Evidence
                </button>
              </div>

              {selectedBullying && (
                <div className="selected-bullying">
                  <h5>You selected: {selectedBullying}</h5>
                  <p>Based on your selection, we will provide resources and help for {selectedBullying}.</p>
                </div>
              )}

              <button onClick={() => setShowPopup(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
