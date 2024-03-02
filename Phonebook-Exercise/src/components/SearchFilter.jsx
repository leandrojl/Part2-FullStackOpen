const SearchFilter = (props) =>{

    return(
      <div>
        <p>Search your contact: <input onChange={props.handleSearchChange} value={props.newSearch}/> </p>
        <div>debug newSearch: {props.newSearch}</div>
      </div>
    )
  
  }

  export default SearchFilter