import Part from "./Part"

const Content = ({parts}) =>{

    console.log("parts from content component",parts)

    let newContent = parts.map((part)=>{
      return <Part key={part.name} name={part.name} exercises={part.exercises} />
      
    })
  
    return(
      <ul>
        {newContent}
      </ul>
    )
    
  }

  export default Content