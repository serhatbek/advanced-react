const List = ({ items, sourceName, ItemComponent, numbered = false }) => {
  return (
    <>
      {items.map((item, i) => {
        return numbered ? (
          <div key={item.id}>
            <h3>{i + 1}</h3>
            <ItemComponent {...{ [sourceName]: item }} />
          </div>
        ) : (
          <ItemComponent key={item.id} {...{ [sourceName]: item }} />
        );
      })}
    </>
  );
};
export default List;
