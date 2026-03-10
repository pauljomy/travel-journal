import data from "../data.json";
import pathImage from "../assets/img/path.png";

export default function Card() {
  return data.map(({ country, place, img, description }) => {
    return (
      <div className="flex justify-center max-w-180 gap-5 mb-5 p-4">
        <img
          src={img}
          alt={`an image of ${place}`}
          className="w-50 h-70 object-cover"
        />
        <div>
          <div className="flex items-center gap-4">
            <img
              src={pathImage}
              alt="An icon of path"
              className="w-3 h-3 object-cover"
            />
            <p>{country}</p>
            <p>View on Google Maps</p>
          </div>
          <p>{place}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  });
}
