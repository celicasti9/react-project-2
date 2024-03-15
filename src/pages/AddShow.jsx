import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowContext } from '../context/products.context';


function AddShows({ onAddShow }) {
  const { ids, setIds } = useContext(ShowContext)

  const [newShow, setNewShow] = useState({
    id: ids,
    title: '',
    schedule: '',
    description: '',
    thumbnail: '',
  });


  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShow({ ...newShow, [name]: value });
  };

  const handleSubmit = (e) => {
    setIds((prev) => prev + 1)
    e.preventDefault();
    
    onAddShow(newShow);
    navigate('/shows')
    // Clear the form after submitting
    setNewShow({
        title: '',
        schedule: '',
        description: '',
        thumbnail: '',
    });
  };

  return (
    <div>
      <h2>Add New Show</h2>
      <form onSubmit={handleSubmit}>
      <label >
          Title:
          <input type='text' name='title' className='fields' value={newShow.title} onChange={handleChange} />
        </label>
        <label >
          Thumbnail:
          <input type='file' name='thumbnail' className='fields' value={newShow.thumbnail} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' className='fields' value={newShow.description} onChange={handleChange} />
        </label>
        <label>
          Schedule:
          <input type='text' name='schedule' className='fields' value={newShow.schedule} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Add Show</button>
      </form>
    </div>
  );
}

export default AddProducts;

