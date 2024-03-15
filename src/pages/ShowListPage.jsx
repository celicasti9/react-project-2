// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShowCard from "../components/ShowCard";

const API_URL = "https://react-project-2-server.vercel.app";


function ShowListPage() {
  const [shows, setShows] = useState([]);

  const getAllShows = () => {
    axios
      .get(`${API_URL}/shows`)
      .then((response) => setShows(response.data))
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getAllShows();
  }, [] );

  
  return (
    <div className="ShowListPage">

      <Link to="/shows/create">          
        <button>Create Show</button>
      </Link>   
      
      { shows.map((show) => (
        <ShowCard key={show.id} {...show} /> 
      ))}       
       
    </div>
  );
}

export default ShowListPage;
