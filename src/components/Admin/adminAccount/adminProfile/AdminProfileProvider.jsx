import { createContext } from "react";
import { useState, useContext } from "react";

const AdminProfileContext = createContext({})

const AdminProfileProvider = ({ children }) => {

  const [profilePhoto, setProfilePhoto] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [contacts, setContacts] = useState('');
  const [services, setServices] = useState('');

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader(); // Create a FileReader instance

    // Check if the file is present
    if (file) {
      // Convert the file to a data URL
      reader.readAsDataURL(file);
      // After reading the file, update the profilePhoto state
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
    }
  };

  const handleAboutMeChange = (e) => {
    // Logic for changing "about me" information
    // Update the aboutMe state
  };

  const handleContactsChange = (e) => {
    // Logic for changing contacts information
    // Update the contacts state
  };

  const handleServicesChange = (e) => {
    // Logic for changing services information
    // Update the services state
  };

  const value = {
    profilePhoto, aboutMe, contacts, services,
    handleProfilePhotoChange, handleAboutMeChange, handleContactsChange,
    handleServicesChange
  }

  return (
    <AdminProfileContext.Provider value={value}>
      {children}
    </AdminProfileContext.Provider>
  )
}

export default AdminProfileProvider;

export const useAdminProfile = () => {
  return useContext(AdminProfileContext);
}