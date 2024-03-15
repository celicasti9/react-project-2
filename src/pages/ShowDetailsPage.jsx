import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://react-project-2-server.vercel.app";

function ProjectDetailsPage(props) {
  const [show, setShow] = useState(null);
  const { showId } = useParams();

  const getShow = () => {
    axios
      .get(`${API_URL}/shows/${showId}`)
      .then((response) => {
        const oneShow = response.data;
        setShow(oneShow);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <div className="bg-blueGray-50 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        {show && (
          <>
            <h1 className="text-2xl font-semibold text-center mb-4">{show.title}</h1>
            <p className="text-gray-700">{show.description}</p>
            <br />
            <p className="text-gray-700">{show.schedule}</p>
            <br />
            <p className="text-gray-700">{show.thumbnail}</p>
          </>
        )}

        <div className="flex justify-center mt-8 space-x-4">
          <Link to="/shows">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Back to shows</button>
          </Link>

          {show && (
            <Link to={`/shows/edit/${showId}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit Show</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
