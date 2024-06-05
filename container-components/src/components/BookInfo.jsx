const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};
  return book ? (
    <div>
      <h3>{name}</h3>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
      <p>Price: {price}</p>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default BookInfo;
