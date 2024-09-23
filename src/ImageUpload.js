import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase storage functions
import { storage } from './firebase';  // Import Firebase storage from firebase.js
import './ImageUpload.css';


function ImageUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);  // To track upload progress
  const [uploadedImage, setUploadedImage] = useState('');   // To store the uploaded image URL
  const [uploadError, setUploadError] = useState('');       // To track upload errors

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];  // Get the first file dropped
    const storageRef = ref(storage, `images/${file.name}`); // Create a storage reference

    // Start uploading the file
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Track the progress of the upload
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);  // Update the progress bar
      },
      (error) => {
        setUploadError(error.message);  // Set error if any occurs
      },
      () => {
        // On successful upload, get the download URL and display the image
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedImage(downloadURL);  // Set the uploaded image URL
        });
      }
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',  // Accept only JPEG and PNG files
    maxSize: 5000000,  // Set a maximum file size of 5MB
    multiple: false  // Allow only one file at a time
  });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      
      {/* Display the upload progress */}
      {uploadProgress > 0 && <p>Upload progress: {uploadProgress.toFixed(2)}%</p>}
      
      {/* Display the uploaded image */}
      {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" style={{ width: '100%' }} />}
      
      {/* Display any errors during upload */}
      {uploadError && <p style={{ color: 'red' }}>Error: {uploadError}</p>}
    </div>
  );
}

export default ImageUpload;
