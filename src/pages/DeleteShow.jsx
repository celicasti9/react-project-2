import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://react-project-2-server.vercel.app";

function CreateShowPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch shows from the server when the component mounts
    axios.get(`${API_URL}/shows`).then((response) => {
      setShows(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, schedule, thumbnail };
    axios
      .post(`${API_URL}/shows`, requestBody)
      .then((response) => {
        navigate("/shows");
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/shows/${id}`)
      .then((response) => {
        // Remove the deleted show from the shows state
        setShows((prevShows) => prevShows.filter((show) => show.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blueGray-50 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold text-blueGray-800">Delete Show</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Your form inputs here */}
            </form>
            <div className="mt-8 space-y-6">
              {shows.map((show) => (
                <div key={show.id} className="flex justify-between items-center">
                  <div>
                    <h3>{show.title}</h3>
                    <p>{show.description}</p>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(show.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShowPage;
