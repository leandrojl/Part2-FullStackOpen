const SearchFilter = (props) =>{

    return(
      <div>
        <p>Search your contact: <input onChange={props.handleSearchChange} value={props.newSearch}/> </p>
      </div>
    )
  
  }

  export default SearchFilter