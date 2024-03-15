import { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://react-project-2-server.vercel.app";

function Login({ setLoginUser }) {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${API_URL}/users`);
      const userData = response.data;
      const thisUser = userData.find((foundUser) => foundUser.username === user && foundUser.password === pwd);

      if (thisUser) {
        setLoginUser(thisUser);
        setSuccess(true);
      } else {
        setErrMsg('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="bg-blueGray-50 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        {success ? (
          <div>
            <h1 className="text-2xl font-semibold text-center">You are logged in!</h1>
            <p className="mt-4 text-center">
              <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
            </p>
          </div>
        ) : (
          <div>
            <p className={errMsg ? "text-red-500 text-sm mb-4" : "hidden"} aria-live="assertive">{errMsg}</p>
            <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="customCheckLogin" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                <label htmlFor="customCheckLogin" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline">Sign In</button>
              </div>
            </form>
            <p className="mt-8 text-sm text-center">
              Need an Account? <Link to="/register" className="font-semibold text-blue-600 hover:underline">Signup</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
