const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  return user ? (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h4>Books</h4>
      <ul>
        {books.map((book) => (
          <li key={book}> {book}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default UserInfo;
