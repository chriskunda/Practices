export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        <MoodBoardItem
          color="lightblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Relaxing Santorini getaway"
        />

        <MoodBoardItem
          color="lightgreen"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Peaceful ocean views"
        />

        <MoodBoardItem
          color="lightyellow"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Exploring new adventures"
        />
      </div>
    </div>
  );
};