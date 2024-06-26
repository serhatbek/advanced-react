import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/current-user');
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    })();
  }, []);

  return (
    <>
      {children &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
          }
          return child;
        })}
    </>
  );
};

export default CurrentUserLoader;
