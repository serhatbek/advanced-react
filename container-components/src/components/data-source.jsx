import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataLoader = ({ children, resourceName, getData = () => {} }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setResource(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataLoader;
