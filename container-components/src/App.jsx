import CurrentUserLoader from './components/CurrentUserLoader/CurrentUserLoader';
import UserInfo from './components/UserInfo';
import UserLoader from './components/user-loader';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
