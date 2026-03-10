import data from "../data.json";
import pathImage from "../assets/img/path.png";

export default function Card() {
  return data.map(({ country, place, img, description }) => {
    return (
      <div
        className=" max-w-180 flex justify-center  gap-5 p-7 items-center"
        key={place}
      >
        <img
          src={img}
          alt={`an image of ${place}`}
          className="w-50 h-70 object-cover rounded-xl"
        />
        <div>
          <div className="flex items-center gap-4 mb-3">
            <img
              src={pathImage}
              alt="An icon of path"
              className="w-3 h-3 object-cover"
            />
            <p className="font-medium uppercase text-sm">{country}</p>
            <p className="text-maps text-sm underline">View on Google Maps</p>
          </div>
          <p className="text-2xl font-bold mb-3">{place}</p>
          <p className="h-14px]">{description}</p>
        </div>
      </div>
    );
  });
}
