const SearchForm = () =>{
    return(
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onClick={() => alert("Hi Search")}/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    )
}

export default SearchForm;