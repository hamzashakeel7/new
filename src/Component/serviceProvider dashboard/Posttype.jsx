import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostTypeModal = ({ onClose }) => {
  const [selectedPostType, setSelectedPostType] = useState("");
  const navigate = useNavigate();

  const handlePostTypeChange = (e) => {
    setSelectedPostType(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedPostType) {
      // Navigate to the specific page based on the selected post type
      switch (selectedPostType) {
        case "Property":
          navigate("/servicedashboard/Property");
          break;
        case "Transportation":
          navigate("/servicedashboard/Transportation");
          break;
        case "Service Information":
          navigate("/servicedashboard/Service Information");
          break;
        case "Health Care":
          navigate("/servicedashboard/Health Care");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Post Type</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
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
            {/* <option value="Property">Property</option> */}
            <option value="Transportation">Transportation</option>
            <option value="Service Information">Service Information</option>
            <option value="Health Care">Health Care</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-purple-700  text-white w-full py-2 rounded-lg hover:bg-purple-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTypeModal;
