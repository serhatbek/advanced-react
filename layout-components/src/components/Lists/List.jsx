const List = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item) => {
        // Is equivalent to this: <ItemComponent key={item.id} author={item} />;
        return <ItemComponent key={item.id} {...{ [sourceName]: item }} />;
      })}
    </>
  );
};
export default List;
