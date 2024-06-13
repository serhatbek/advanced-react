import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResourceLoader = ({ children, resourceName, resourceUrl }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        const data = response.data;
        setResource(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    })();
  }, [resourceUrl]);

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

export default ResourceLoader;
