

import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ShowCard ({ title, description, id, schedule }) {
  
  return (
    <div className="ShowCard card">
      <Link to={`/shows/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{schedule} </p>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ShowCard;


// Still need to get schedule