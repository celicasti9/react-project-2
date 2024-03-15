import { useState, useEffect, useContext } from 'react';
import { ShowContext } from '../context/shows.context';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateShow() {

  const [updatedShow, setUpdatedShow] = useState({
    title: '',
    description: '',
    schedule: '',
    thumbnail: ''
  });

  const { id } = useParams()

  const navigate = useNavigate()

  const { shows, setShows } = useContext(ShowContext)

  useEffect(() => {
    console.log("this is the id ===>", id)
    let thisShow = shows.find((show) => show.id == id)
    console.log("This show ===>", thisShow)
    // Populate the form with the current product data when component mounts
    setUpdatedShow(thisShow);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setUpdatedShow({ ...updatedShow, [name]: files[0] });
    } else if (type === 'checkbox') {
      setUpdatedShow({ ...updatedShow, [name]: e.target.checked });
    } else {
      setUpdatedShow({ ...updatedShow, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    let thisIndex
    let foundShow = shows.find((show, i) => {
      thisIndex = i
      return show.id == id
    })

    console.log("Found show ===>", foundShow)

    let updatedShows = [...shows]
    updatedShows[thisIndex] = updatedShow
    setShows(updatedShows)

    navigate(`/shows/${id}`)
  };

  return (
    <div>
      <h2>Update Show</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type='text' name='title' value={updatedShow.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' value={updatedShow.description} onChange={handleChange} />
        </label>
        <label>
          Schedule:
          <input type='text' name='schedule' value={updatedShow.schedule} onChange={handleChange} />
        </label>
        <label>
          Thumbnail:
          <input type='file' name='thumbnail' value={updatedShow.category} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Update Product</button>
      </form>
    </div>
  );
}

export default UpdateShow;