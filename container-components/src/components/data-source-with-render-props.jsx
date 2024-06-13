import React, { useEffect, useState } from 'react';

const DataSourceWithRenderProps = ({ getData = () => {}, render }) => {
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

  return render(resource);
};

export default DataSourceWithRenderProps;
