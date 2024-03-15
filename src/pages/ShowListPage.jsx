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
  }, []);

  return (
    <div className="ShowListPage">
      <Link to="/shows/create">
        <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Show</button>
      </Link>
      <Link to="/shows/delete">
        <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Delete Show</button>
      </Link>

      {shows.map((show) => (
        <ShowCard key={show.id} {...show} />
      ))}
    </div>
  );
}

export default ShowListPage;
