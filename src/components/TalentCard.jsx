
function TalentCard({ title, description, schedule }) {
    return (
      <div className="TalentCard card">
        <h3>{title}</h3>
        <h4>Schedule:</h4>
        <p>{schedule}</p>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    );
  }
  
  export default TalentCard;
  