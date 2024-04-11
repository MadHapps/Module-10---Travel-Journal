import "./travelCard.css";

export default function TravelCard(props) {
  const { title, location, googleMapsUrl, date, description, imageUrl } =
    props.data;

  return (
    <div className="travel-card">
      <div className="card-map">
        <i className="fa-solid fa-location-dot fa-2xs"></i>
        <p className="location">{location}</p>
        <a href={googleMapsUrl} className="view-map-btn" target="_blank">
          View on Google Maps
        </a>
      </div>
      <h2 className="card-title">{title}</h2>
      <h3 className="card-date">{date}</h3>
      <p className="card-description">{description}</p>
      <img className="card-img" src={imageUrl} alt="" />
    </div>
  );
}