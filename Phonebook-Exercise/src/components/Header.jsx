const Header = (props) =>{

    switch(props.headingLevel){
        case "h1":
          return <h1>{props.title}</h1>
        case "h2":
          return <h2>{props.title}</h2>
        case "h3":
          return <h3>{props.title}</h3>
        case "h4":
          return <h4>{props.title}</h4>
        case "h5":
          return <h5>{props.title}</h5>
        case "h6":
          return <h6>{props.title}</h6>
        default:
          return <div>Invalid heading level</div>
      }

  
  }

  export default Header