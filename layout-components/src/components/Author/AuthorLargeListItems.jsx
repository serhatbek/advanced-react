const AuthorLargeListItems = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h4>Books</h4>
      <ul>
        {books.map((book) => (
          <li key={book}> {book}</li>
        ))}
      </ul>
    </div>
  );
};
export default AuthorLargeListItems;
