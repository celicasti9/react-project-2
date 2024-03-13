
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://react-project-2-server.vercel.app";
function CreateShowPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();

    const requestBody = { title, description };
    axios
      .post(`${API_URL}/shows`, requestBody)
      .then((response) => {
        
        navigate("/shows");
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="CreateShowPage">
      <h3>Add Show</h3>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateShowPage;
