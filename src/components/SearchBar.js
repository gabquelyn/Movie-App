import "./Search.css";
const SearchBar = (props) => {
  return (
    <input
      type="text"
      id="search"
      class="search"
      placeholder="Search"
      onChange={props.onChange}
    />
  );
};

export default SearchBar;
