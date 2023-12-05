import students from "./components/data"
import Student from "./components/student"


function App() {

return (
     
    
     <div>
{students.map((student) => (

<Student student={student}/>
  

)
)}
</div> 
)

}

export default App
