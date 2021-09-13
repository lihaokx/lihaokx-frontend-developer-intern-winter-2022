

function Search(props) {
    const {q, setQ} = props;
    return ( 
        <div className ="row mb-3 searchdiv">
            <input 
                type = "search"
                id="search"
                className = "searchInput col-8 offset-2"
                name = "searchInput"
                placeholder = "Search by title "
                value = {q}
                onChange = {(e)=>{
                    setQ(e.target.value);
                }}
            >
            </input>
       
        </div>
     );
}

export default Search;