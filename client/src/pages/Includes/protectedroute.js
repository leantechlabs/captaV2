import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!Cookies.get('token');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const [hasAuthorization, setHasAuthorization] = useState();
  console.log(hasAuthorization,"does");
var count=0
  useEffect(() => {
    const token = Cookies.get('token');
  
    if (token) {
      console.log(count++);
      axios.post('http://localhost:3001/permision/page', { url: location.pathname }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            setHasAuthorization(true);
          } else {
            setHasAuthorization(false);
          }
          setIsLoading(false);

        })
        .catch((error) => {
          console.log("error occurred", error);
          setHasAuthorization(false);
          setIsLoading(false);

        });
    } else {
      setHasAuthorization(false);
      setIsLoading(false);

    }
  }, [location.pathname]);
  

  if (isLoading) {
    return <div>Loading...</div>; // Or some loading spinner
  } else if (!isAuthenticated) {
    console.log("/");
    return <Navigate to="/" replace />;
  } else if (!hasAuthorization) {
    console.log(hasAuthorization,"doesnt");
    return <Navigate to="/dashboard" replace />;
  } else {
    console.log(hasAuthorization,"doesnt");
    return element;
  }
}

export default ProtectedRoute;
