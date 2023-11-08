// permissionsContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


export const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);
  const token = Cookies.get('token');
  console.log(token);

  const fetchPermissions = () => {
    console.log('Fetching permissions...');
    axios.get(`http://localhost:3001/permision/api/permissions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        setPermissions(response.data);
        console.log('Permissions fetched:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching permissions:', error);
      });
  };

  return (
    <PermissionsContext.Provider value={{ permissions, fetchPermissions}}>
      {children}
    </PermissionsContext.Provider>
  );
};

