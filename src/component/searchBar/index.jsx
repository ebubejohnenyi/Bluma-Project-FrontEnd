import icon from "../../assets/search 1.svg";
import "../../component/searchBar/style.css"; 
function SearchBar() {
  return (
    <div className="searchArea">
      <input type="search" placeholder="Search Here" />
      <spam><img src={icon}></img></spam>
    </div>
  );
}
export default SearchBar;
