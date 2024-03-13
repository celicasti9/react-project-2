
import { useState } from "react";
import axios from "axios";

const API_URL = "https://react-project-2-server.vercel.app";


function AddTalent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {        
    e.preventDefault();
 
    
    const { showId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, showId };
 
    axios
      .post(`${API_URL}/talents`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddTalent">
      <h3>Add New Talent</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Talent</button>
      </form>
    </div>
  );
}

export default AddTalent;
