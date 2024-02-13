import Part from "./Part"

const Content = (props) =>{
  
    let newContent = props.course.parts.map((part)=>{
      return <Part key={part.name} name={part.name} exercises={part.exercises} />
      
    })
  
    return(
      <ul>
        {newContent}
      </ul>
    )
    
  }

  export default Content