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
        navigate(`/shows/${showId}`);
      })
      .catch((error) => console.log(error));
  };

  const deleteShow = () => {
    axios
      .delete(`${API_URL}/shows/${showId}`)
      .then(() => {
        navigate("/shows");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="EditShowPage p-6">
      <h3 className="text-xl font-semibold mb-4">Edit the Show</h3>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Update Show
        </button>
      </form>

      <button
        onClick={deleteShow}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Delete Show
      </button>
    </div>
  );
}

export default EditShowPage;
