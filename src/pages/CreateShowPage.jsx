import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://react-project-2-server.vercel.app";
function CreateShowPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  
  const navigate = useNavigate();

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

  return (
    <div className="bg-blueGray-50 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold text-blueGray-800">Add Show</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-blueGray-600">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    className="mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-blueGray-300 rounded-md"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-blueGray-600">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    required
                    className="mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-blueGray-300 rounded-md"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="schedule" className="block text-sm font-medium text-blueGray-600">Schedule</label>
                  <input
                    id="schedule"
                    name="schedule"
                    type="text"
                    required
                    className="mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-blueGray-300 rounded-md"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="thumbnail" className="block text-sm font-medium text-blueGray-600">Thumbnail</label>
                  <input
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    required
                    className="mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-blueGray-300 rounded-md"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-light-blue-500 group-hover:text-light-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a8 8 0 1116 0v4a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm6-5a2 2 0 10-4 0v1h4V3z"
                      />
                    </svg>
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShowPage;
