import { useRef, useState, useEffect, useContext } from 'react';
const API_URL = "https://react-project-2-server.vercel.app";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login ({setLoginUser}) {


  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    axios.get(`${API_URL}/users`)
      .then((response) => {
        console.log(response.data);
        let thisUser = response.data.find((foundUser) => foundUser.username == user && foundUser.password == pwd)
        if (thisUser) {
          console.log('logged in');
          setLoginUser(thisUser);
          setSuccess(true);
        } else {
          console.log('not logged in');
          setErrMsg('Invalid username or password');
        }
      })
      .catch((error) => console.log(error));
    


  }

  

    return (
        <section>
            {success ? (
                <div>
                    <h1>You are logged in!</h1>
                    <p>
                      <Link to="/">Go Home</Link>
                    </p>
                </div>
            ) : (
                <div>
                    <p  className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                          <Link to="/register" > Signup
                          </Link>
                        </span>
                    </p>
                </div>
            )}
        </section>
    )
}

export default Login;
