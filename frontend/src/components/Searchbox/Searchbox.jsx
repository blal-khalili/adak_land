import "../Searchbox/Searchbox.css";

function SearchBox() {
    return (
        <div className="search-container">
            <i className="bi bi-search search-icon"></i>
            <input
                className="search-input"
                type="search"
                placeholder="جستجو در آداک لند..."
            />
        </div>
    );
}

export default SearchBox;
