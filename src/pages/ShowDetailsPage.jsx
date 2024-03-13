
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTalent from "../components/AddTalent";
import TalentCard from "../components/TalentCard";

const API_URL = "https://react-project-2-server.vercel.app";

function ProjectDetailsPage (props) {
  const [show, setShow] = useState(null);

  const { showId } = useParams();        
  
  const getShow = () => {          
    axios
      .get(`${API_URL}/shows/${showId}?_embed=talents`)
      .then((response) => {
        const oneShow = response.data;
        setShow(oneShow);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {            
    getShow();
  }, [] );

  
  return (
    <div className="ShowDetailsPage">
      {show && (
        <>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
        </>
      )}

<AddTalent refreshShow={getShow} showId={showId} />   

      { show && show.talents.map((talent) => (
        <TalentCard key={talent.id} {...talent} />       
      ))} 

      <Link to="/shows">
        <button>Back to shows</button>
      </Link>

      <Link to={`/shows/edit/${showId}`}>
        <button>Edit Show</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
