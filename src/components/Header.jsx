import React, { useState } from 'react';
import { FaInfoCircle, FaExclamationCircle, FaHandsHelping } from 'react-icons/fa';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [showPopup, setShowPopup] = useState(null); // State to control popup visibility and content
  const [selectedBullying, setSelectedBullying] = useState(null); // State to store selected bullying type
  const [showDropdown, setShowDropdown] = useState({
    awareness: false,
    faq: false,
  });
  const navigate = useNavigate();

  // Toggle popup visibility and set content based on clicked section
  const togglePopup = (section) => {
    if (showPopup === section) {
      setShowPopup(null); // Close the popup if clicking the same section
    } else {
      setShowPopup(section); // Show popup for the clicked section
    }
  };

  // Toggle dropdown visibility for Awareness and FAQ sections
  const toggleDropdown = (section) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Handle the bullying selection in the "Help" section
  const handleBullyingSelection = (bullyingType) => {
    setSelectedBullying(bullyingType); // Set the selected bullying type
  };

  // Handle Panic Button click to send an emergency message
  const handlePanicButtonClick = () => {
    alert("Emergency message sent!");  // Example action - could be replaced with an API call or other logic
  };

  return (
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

      {/* About Popup */}
      {showPopup === 'about' && (
        <div className="popup">
          <div className="popup-content">
            <h3>About Us</h3>
            <p>This is a brief about the website. Here, you can add more details about your site or service.</p>
            <button onClick={() => setShowPopup(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Precautions Popup */}
      {showPopup === 'precautions' && (
        <div className="popup">
          <div className="popup-content">
            <h3>Precautions and Awareness</h3>
            <p><strong>Bullying</strong> can be prevented through awareness and understanding.</p>

            {/* Awareness Dropdown */}
            <div>
              <button onClick={() => toggleDropdown('awareness')}>
                {showDropdown.awareness ? 'Hide Awareness' : 'Show Awareness'}
              </button>
              {showDropdown.awareness && (
                <div className="dropdown-content">
                  <h4>Awareness About Bullying</h4>
                  <p><strong>Bullying</strong> is intentional harm or mistreatment directed towards an individual or a group, often involving an imbalance of power. It can happen in various forms including physical, verbal, and online bullying.</p>
                  <h4>Types of Bullying:</h4>
                  <ul>
                    <li>Physical Bullying</li>
                    <li>Verbal Bullying</li>
                    <li>Social Bullying</li>
                    <li>Cyberbullying</li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQ Dropdown */}
            <div>
              <button onClick={() => toggleDropdown('faq')}>
                {showDropdown.faq ? 'Hide FAQ' : 'Show FAQ'}
              </button>
              {showDropdown.faq && (
                <div className="dropdown-content">
                  <h4>Frequently Asked Questions</h4>
                  <p><strong>Q1:</strong> What is bullying?</p>
                  <p>A: Bullying is intentional harmful behavior directed towards someone, often leading to physical or emotional damage.</p>
                  <p><strong>Q2:</strong> How can I prevent bullying?</p>
                  <p>A: You can prevent bullying by speaking up, supporting victims, and promoting kindness and empathy in your community.</p>
                </div>
              )}
            </div>

            <button onClick={() => setShowPopup(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Help Popup */}
      {showPopup === 'help' && (
        <div className="popup">
          <div className="popup-content">
            <h3>Help Section</h3>
            <p>Here you can find resources and ways to seek help if you or someone you know is being bullied.</p>

            {/* Question about the type of bullying */}
            <h4>What kind of bullying do you face?</h4>
            <div>
             
              <Link to="/psychology">
                <button style={{margin:"5px"}}>Psycological Help</button>
              </Link>
            
              <Link to="/anonymous"> <button  onClick={() => handleBullyingSelection('Anoymous Report')} style={{margin:"5px"}}>Anoymous Report</button></Link>
              <Link to="/evidence"> <button onClick={() => handleBullyingSelection('Report With Evidence')} style={{margin:"5px"}}>Report With Evidence</button></Link>
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

      {/* Panic Button */}
      {showPopup === null && (
        <button className="panic-button" onClick={handlePanicButtonClick}>
          Panic Button
        </button>
      )}
    </div>
  );
}

export default Header;