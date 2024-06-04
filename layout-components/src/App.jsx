import { SplitScreen } from './components';

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: 'burlywood' }}>I'm left side</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: 'crimson' }}>I'm right side.</h2>;
};

function App() {
  return (
    <>
      <SplitScreen Left={LeftSideComp} Right={RightSideComp} />
    </>
  );
}

export default App;
