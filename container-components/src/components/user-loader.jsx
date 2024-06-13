import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
