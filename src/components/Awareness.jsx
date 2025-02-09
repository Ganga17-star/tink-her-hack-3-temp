import React, { useState } from 'react';

function AwarenessPopup({ closePopup }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="popup">
        </div>
  );
}

export default AwarenessPopup;
