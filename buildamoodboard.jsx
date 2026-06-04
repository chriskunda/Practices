export const MoodBoardItem = ({color, image, description}) => {
  return(
    <div className = "mood-board-item" style={{backgroundColor: color}}>
      <img src= {image}>
      </img>
      <h3 className = "mood-board-text">{description}</h3>
    </div>
  )
}

export const MoodBoard = () => {
  return (
    <div>
      <h1 className = "mood-board-heading">Destination Mood Board</h1>
      <div className = "mood-board">
        
      </div>
    </div>
  )
}