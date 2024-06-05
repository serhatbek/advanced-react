const NumberedList = ({ items, sourceName, ItemComponent }) => {
  //NOTE - 1  ItemComponent props objesinde spread operator ile objenin diğer tüm değerlerini aynı bırakırken, > {...{ [sourceName]: item }}
  //NOTE - 2 items.map den dönen item ile Dynamic Property mantığında sourceName e verilen değeri eşleştiriyoruz. Key value eşleştirmesi > author={item}
  //NOTE -  Is equivalent to this: <ItemComponent key={item.id} author={item} />;
  return (
    <>
      {items.map((item, i) => {
        return (
          <>
            <h3>{i + 1}</h3>
            <ItemComponent key={item.id} {...{ [sourceName]: item }} />
          </>
        );
      })}
    </>
  );
};
export default NumberedList;
