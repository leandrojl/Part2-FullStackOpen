
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({course}) =>{
 

  //console.log("course name",course[0].name)

    return(
      <div>
        <Header name={course[0].name}/>
        
        <Content parts={course[0].parts}/>
        <Total parts={course[0].parts}/>

        <Header name={course[1].name}/>
        
        <Content parts={course[1].parts}/>
        <Total parts={course[1].parts}/>
      </div>
    )
  
  }

  export default Course