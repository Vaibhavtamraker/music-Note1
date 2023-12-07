import React, { useState } from 'react';
import { FaFileAudio, FaImage, FaVideo } from 'react-icons/fa';
import axios from 'axios';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];

    switch (type) {
      case 'audio':
        setSelectedAudio(file);
        break;
      case 'image':
        setSelectedImage(file);
        break;
      case 'video':
        setSelectedVideo(file);
        break;
      default:
        break;
    }

    // Trigger handleAddMedia function directly when a file is selected
    handleAddMedia(file, type);
  };

  const handleAddMedia = async (file, type) => {
    let selectedFile = file;
     
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('title', title); // Append title
      formData.append('description', description);
       console.log(formData,"ssjsjssjj")
      try {
        const response = await axios.post('http://localhost:6000/createTask', formData);

        if (response.status === 200) {
          alert(`Uploading ${type}: ${selectedFile.name} successful!`);
        } else {
          alert(`Error uploading ${type}: ${selectedFile.name}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`Error uploading ${type}: ${selectedFile.name}`);
      }
    } else {
      alert(`Please select a ${type} file`);
    }
  };

  const handleSubmit = () => {
    alert('Blog post submitted!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 border rounded-md w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          className="mt-1 p-2 border rounded-md w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="audioFile" className="cursor-pointer mr-4">
          <FaFileAudio size="2em" color="#3182CE" />
          <input
            type="file"
            id="audioFile"
            accept="audio/*"
            className="hidden"
            onChange={(e) => handleFileChange(e, 'audio')}
          />
        </label>
        <label htmlFor="imageFile" className="cursor-pointer mr-4">
          <FaImage size="2em" color="#38A169" />
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange(e, 'image')}
          />
        </label>

        <label htmlFor="videoFile" className="cursor-pointer">
          <FaVideo size="2em" color="#E53E3E" />
          <input
            type="file"
            id="videoFile"
            accept="video/*"
            className="hidden"
            onChange={(e) => handleFileChange(e, 'video')}
          />
        </label>
      </div>
      <button className="bg-indigo-500 text-white p-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Blog;
