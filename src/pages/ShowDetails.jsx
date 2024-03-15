import { useContext } from 'react';
import { ShowContext } from '../context/shows.context';
import { useParams } from 'react-router-dom';



function ShowDetails() {
  const { id } = useParams();
  const { shows } = useContext(ShowContext)
  const show = shows.find((item) => item.id === parseInt(id, 10));

  if (!show) {
    return <p>Show not found</p>;
  }

  return (
    <div className='show-details'>
        

      <h2>{show.title}</h2>
      <img src={show.thumbnail} alt={show.title} width="100" height="100" />
      <p>Description: {show.description}</p>
      <p>Schedule: {show.schedule}%</p>
      </div>
      );
    }
    
    export default ShowDetails;
    