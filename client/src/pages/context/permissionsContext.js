// permissionsContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    console.log('Fetching permissions...'); 
    const userRole = 'admin'; 
    axios.get('http://localhost:3001/api/permissions?role=' + userRole)
      .then((response) => {
        setPermissions(response.data);
        console.log('Permissions fetched:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching permissions:', error);
      });
  }, []);

  return (
    <PermissionsContext.Provider value={permissions}>
      {children}
    </PermissionsContext.Provider>
  );
};

