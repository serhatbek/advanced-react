import { useState } from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledModal from './components/UncontrolledModal';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledModal from './components/ControlledModal';
import UncontrolledFlow from './components/UncontrolledFlow';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};

function App() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <br /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledModal /> */}

      {/* <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      ></ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button> */}

      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
