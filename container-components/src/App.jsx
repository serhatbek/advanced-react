import BookInfo from './components/BookInfo';
import CurrentUserLoader from './components/CurrentUserLoader/CurrentUserLoader';
import UserInfo from './components/UserInfo';
import ResourceLoader from './components/resource-loader';
import UserLoader from './components/user-loader';

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader> */}

      <ResourceLoader resourceName={'user'} resourceUrl={'/users/2'}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceName={'book'} resourceUrl={'/books/2'}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
