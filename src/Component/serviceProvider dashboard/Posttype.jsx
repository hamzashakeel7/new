import React, { useState } from 'react';

const PostTypeModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedPostType, setSelectedPostType] = useState('');

  const handleClose = () => {
    setIsVisible(false);
  };

  const handlePostTypeChange = (e) => {
    setSelectedPostType(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Selected Post Type: ${selectedPostType}`);
    setIsVisible(false);  // Close the modal after submission
  };

  if (!isVisible) {
    return null;  // Don't render the modal if it's not visible
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl flex font-semibold"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_694_852)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.875 17.8357V0.125H0.125V22.6875L1.3125 23.875H14.7241H17.0991H17.8357L23.875 17.8357ZM17.0991 21.2528L21.2525 17.0993H17.0991V21.2528ZM21.5 14.7243V2.5H2.5V21.5H14.7241V14.7243H21.5Z" fill="#080341"/>
</g>
<defs>
<clipPath id="clip0_694_852">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
Post Type</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="postType">
            Select Post Type
          </label>
          <select
            id="postType"
            value={selectedPostType}
            onChange={handlePostTypeChange}
            className="block w-full border border-gray-300 rounded-md p-2 text-gray-700"
          >
            <option value="">Name</option>
            <option value="Property">Property</option>
            <option value="Transportation">Transportation</option>
            <option value="Service Information">Service Information</option>
            <option value="Health Care">Health Care</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white w-full py-2 rounded-lg hover:bg-purple-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTypeModal;
