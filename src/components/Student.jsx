import Score from "./Score"


const Student = ({student}) => {
  return (
    <div>
        <h3>{student.name}</h3>
        <p>{student.bio}</p>

        {student.scores.map((score) => (
            <Score score={score} />
        ))}
    </div>
  )
}

export default Student