import { Link } from "react-router-dom";

function ShowCard({ title, description, id, schedule, thumbnail }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/shows/${id}`} className="block">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
      </Link>
      <div className="p-6">
        <Link to={`/shows/${id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-4">{schedule}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ShowCard;
