import React, { useState } from 'react';

function Evidence() {
  const [file, setFile] = useState(null); // State for storing uploaded file
  const [placeOfIncident, setPlaceOfIncident] = useState(''); // State for place of incident text

  // Handle file upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile); // Update state with the uploaded file
    }
  };

  // Handle place of incident text input
  const handlePlaceOfIncidentChange = (e) => {
    setPlaceOfIncident(e.target.value); // Update state with the entered place of incident
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && placeOfIncident) {
      alert('Evidence submitted successfully!');
      // Here you can perform further actions like sending data to a server
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="evidence-container">
      <h2>Submit Evidence</h2>
      <form onSubmit={handleSubmit}>
        {/* File input for image/video */}
        <div>
          <label htmlFor="file-upload">Upload Video or Image:</label>
          <input
            id="file-upload"
            type="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
          {file && <p>Selected file: {file.name}</p>}
        </div>

        {/* Text input for place of incident */}
        <div>
          <label htmlFor="place-of-incident">Place of Incident:</label>
          <textarea
            id="place-of-incident"
            value={placeOfIncident}
            onChange={handlePlaceOfIncidentChange}
            placeholder="Enter the place where the incident occurred"
            rows="4"
            cols="50"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit Evidence</button>
        </div>
      </form>
    </div>
  );
}

export default Evidence;
