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

function Psychology() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Handle selection change
  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle profile selection
  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="psychology-container">
      <h1>Psychological Help</h1>

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

      {/* Psychology Profiles */}
      <div className="profiles">
        <h3>Meet Our Experts:</h3>
        <div className="profile-list">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="profile-card"
              onClick={() => handleProfileSelect(profile)}
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-image"
              />
              <h4>{profile.name}</h4>
              <p>{profile.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Profile Details */}
      {selectedProfile && (
        <div className="selected-profile">
          <h3>Profile Details:</h3>
          <div className="profile-card">
            <img
              src={selectedProfile.image}
              alt={selectedProfile.name}
              className="profile-image"
            />
            <h4>{selectedProfile.name}</h4>
            <p>{selectedProfile.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Psychology;
