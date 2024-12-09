import React, { useState } from 'react';
import PostForm from './PostService/Postservice';

import Transportform from './Transport/Transport';
import ServiceInfoform from './serviceinfo/Serviceinfo';
import PostFormedit from './PostService/PostserviceEdit';
import Transportationedit from './Transport/Transportedit';
import ServiceInfoedit from './serviceinfo/Serviceinfoedit';

const PostTypeModal = ({ onClose }) => {
  const [selectedPostType, setSelectedPostType] = useState('');
  const [showServiceModal, setShowServiceModal] = useState(false);

  const handlePostTypeChange = (e) => {
    setSelectedPostType(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedPostType) {
      setShowServiceModal(true); // Show the service-specific modal
    }
  };

  const closeServiceModal = () => {
    setSelectedPostType('');
    setShowServiceModal(false);
    onClose(); // Close the main modal as well
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {!showServiceModal ? (
        <div className="bg-white rounded-lg p-6 w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Post Type</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
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
              <option value="">Select</option>
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
      ) : (
        <div className="bg-white rounded-lg p-6 w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {selectedPostType} Details
            </h2>
            <button
              onClick={closeServiceModal}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>
          <div className="mb-6">
            {/* Render specific component based on the selected post type */}
            {selectedPostType === 'Property' && <PostFormedit/>}
            {selectedPostType === 'Transportation' && <Transportationedit/>}
            {selectedPostType === 'Service Information' && <ServiceInfoedit/>}
            {selectedPostType === 'Health Care' }
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={closeServiceModal}
              className="bg-purple-700 text-white w-full py-2 rounded-lg hover:bg-purple-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostTypeModal;
