// LinkInput.js
import React, { useState } from 'react';

const LinkInput = () => {
  const [link, setLink] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setLink(inputValue);

    // Validate the input as a URL
    const isValidUrl = validateUrl(inputValue);
    setIsValid(isValidUrl);
  };

  const validateUrl = (url) => {
    // Regular expression for a simple URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Enter a valid link:
      </label>
      <input
        type="text"
        className={`formInput ${
          isValid ? 'border-gray-300' : 'border-red-500'
        }`}
        value={link}
        onChange={handleChange}
        placeholder="https://example.com"
      />
      {!isValid && (
        <p className="text-red-500 text-xs mt-1">Please enter a valid link</p>
      )}
    </div>
  );
};

export default LinkInput;
