
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({course}) =>{
 
  //console.log("course name",course[0].name)

    return(
      <div>
        {
          course.map((currentCourse)=>(
            <div key={currentCourse.id}>
                <Header name={currentCourse.name}/>
                <Content parts={currentCourse.parts}/>
                <Total parts={currentCourse.parts}/>
            </div>
          

       

          ))
        }
        
        
      </div>
    )
  
  }

  export default Course