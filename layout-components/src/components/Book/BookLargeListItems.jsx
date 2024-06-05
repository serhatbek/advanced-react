const BookLargeListItems = ({ book }) => {
  const { name, title, pages, price } = book;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
      <p>Price: {price}</p>
    </div>
  );
};
export default BookLargeListItems;
