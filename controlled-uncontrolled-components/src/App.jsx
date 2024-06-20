import { useState } from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledModal from './components/UncontrolledModal';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledModal from './components/ControlledModal';

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      {/* <UncontrolledForm /> */}
      <br />
      {/* <ControlledForm /> */}
      {/* <UncontrolledModal /> */}
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      ></ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>
    </>
  );
}

export default App;
