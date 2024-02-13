

  
  
 
  
  const Total = (props) =>{
    const initialValue=0;
    const totalExercises =  props.course.parts.reduce(
      (total, part)=>{
  
        return total + part.exercises;
     
    },initialValue)
    return(
      <div>
        <p>Total Exercises: {totalExercises}</p>
      </div>
    )
    
  }

  export default Total