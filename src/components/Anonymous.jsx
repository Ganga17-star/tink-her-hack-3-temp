import React, { useState } from 'react';
import "./Psychology.css"
// Sample psychology profiles
const profiles = [
  {
    name: 'Dr. John Doe',
    image: 'https://randomuser.me/api/portraits/men/11.jpg', // Example image URL
    bio: 'Specialist in Cyber Bullying and its psychological effects on adolescents.',
  },
  {
    name: 'Dr. Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/22.jpg', // Example image URL
    bio: 'Expert in educational institution counseling and student mental health.',
  },
  {
    name: 'Dr. Alice Brown',
    image: 'https://randomuser.me/api/portraits/women/10.jpg', // Example image URL
    bio: 'Focuses on workplace bullying and corporate mental health.',
  },
];

function Anonymous() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Handle selection change
  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  return (
    <div className="psychology-container">
      <h1>Anonymous Help</h1>

      {/* Selection Menu */}
      <div className="selection-menu">
        <h3>Select a Topic:</h3>
        <select onChange={handleSelectionChange} value={selectedOption}>
          <option value="">--Select--</option>
          <option value="Cyber Bullying">Cyber Bullying</option>
          <option value="Educational Institution">Educational Institution</option>
          <option value="Workspace">Workspace</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <input type="text" />

      {/* Display images based on selection */}
      {selectedOption && (
        <div className="selected-option-image">
          {selectedOption === 'Cyber Bullying' && (
            <img
              src="https://via.placeholder.com/300x200?text=Cyber+Bullying+Image"
              alt="Cyber Bullying"
            />
          )}
          {selectedOption === 'Educational Institution' && (
            <img
              src="https://via.placeholder.com/300x200?text=Educational+Institution+Image"
              alt="Educational Institution"
            />
          )}
          {selectedOption === 'Workspace' && (
            <img
              src="https://via.placeholder.com/300x200?text=Workspace+Bullying+Image"
              alt="Workspace Bullying"
            />
          )}
          {selectedOption === 'Others' && (
            <img
              src="https://via.placeholder.com/300x200?text=Other+Bullying+Image"
              alt="Other Bullying"
            />
          )}
        </div>
      )}

      
    </div>
  );
}

export default Anonymous;
