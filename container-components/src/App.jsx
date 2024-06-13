import axios from 'axios';
import BookInfo from './components/BookInfo';
import CurrentUserLoader from './components/CurrentUserLoader/CurrentUserLoader';
import UserInfo from './components/UserInfo';
import DataLoader from './components/data-source';
import ResourceLoader from './components/resource-loader';
import UserLoader from './components/user-loader';
import DataSourceWithRenderProps from './components/data-source-with-render-props';

const getDataFromServer = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
  }
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

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

      {/* <ResourceLoader resourceName={'user'} resourceUrl={'/users/2'}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceName={'book'} resourceUrl={'/books/2'}>
        <BookInfo />
      </ResourceLoader>

      <DataLoader
        resourceName={'user'}
        getData={() => getDataFromServer('/users/3')}
      >
        <UserInfo />
      </DataLoader>

      <DataLoader
        resourceName={'book'}
        getData={() => getDataFromServer('/books/3')}
      >
        <BookInfo />
      </DataLoader> */}

      <DataSourceWithRenderProps
        getData={() => getDataFromServer('/users/3')}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRenderProps>

      <DataLoader
        resourceName={'msg'}
        getData={() => getDataFromLocalStorage('test')}
      >
        <Message />
      </DataLoader>
    </>
  );
}

export default App;
