
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://react-project-2-server.vercel.app";

function EditShowPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { showId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${API_URL}/shows/${showId}`)
      .then((response) => {
        
        const oneShow = response.data;
        setTitle(oneShow.title);
        setDescription(oneShow.description);
      })
      .catch((error) => console.log(error));
    
  }, [showId]);

    const handleFormSubmit = (e) => {  
    e.preventDefault();
    
    const requestBody = { title, description };
 
    
    axios
      .put(`${API_URL}/shows/${showId}`, requestBody)
      .then((response) => {
        
        navigate(`/shows/${showId}`)
      });
  };

  const deleteShow = () => {  
    
    axios
      .delete(`${API_URL}/shows/${showId}`)
      .then(() => {
        
        navigate("/shows");
      })
      .catch((err) => console.log(err));
  };  
  
  return (
    <div className="EditShowPage">
      <h3>Edit the Show</h3>
 
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update Show</button>
      </form>

      <button onClick={deleteProject}>Delete Show</button>
      
    </div>
  );
}
 
export default EditShowPage;
