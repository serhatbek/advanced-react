import CurrentUserLoader from './components/CurrentUserLoader/CurrentUserLoader';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
