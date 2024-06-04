const AuthorSmallListItems = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
export default AuthorSmallListItems;
