import "../Search/Search.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const value = searchInput.trim();

        if (!value) {
            return;
        }

        navigate(`/SearchPage?query=${encodeURIComponent(value)}`);
    };

    return (
        <div className="col-md-5">
            <form className="d-flex" onSubmit={handleSearch}>

                <input
                    className="form-control me-5"
                    type="search"
                    placeholder="جستوجو در آداک لند..."
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <button
                    className="btn btn-outline-primary mx-1"
                    type="submit"
                >
                    جستجو
                </button>

            </form>
        </div>
    );
}

export default Search;
