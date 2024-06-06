import "./search-box.styles.css";

const SearchBox = (monsterInfo) => {
  const { className, placeholder, onChangeHandler } = monsterInfo;
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type={"search"}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
