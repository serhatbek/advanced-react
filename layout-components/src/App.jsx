import { SplitScreen, SplitScreen2 } from './components';

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: 'burlywood' }}>I'm left side</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: 'crimson' }}>I'm right side.</h2>;
};

const LeftSideComp2 = ({ title }) => {
  return <h2 style={{ backgroundColor: 'burlywood' }}>{title}</h2>;
};

const RightSideComp2 = ({ title }) => {
  return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
};

function App() {
  return (
    <>
      {/* //NOTE - Komponentleri prop olarak verdiğimizde gerektiğinde kendilerine prop ekleyemiyoruz. */}
      <SplitScreen
        Left={LeftSideComp}
        Right={RightSideComp}
        leftWidth={1}
        rightWidth={3}
      />

      <SplitScreen2>
        <LeftSideComp leftWidth={3} title={"I'm left side"} />
        <RightSideComp rightWidth={1} title={"I'm right side."} />
      </SplitScreen2>
    </>
  );
}

export default App;
