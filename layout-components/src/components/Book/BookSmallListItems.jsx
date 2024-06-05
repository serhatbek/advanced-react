const BookSmallListItems = ({ book }) => {
  const { name, title } = book;
  return (
    <p>
      Name: {name}, Title: {title}
    </p>
  );
};
export default BookSmallListItems;
