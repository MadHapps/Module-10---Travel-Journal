import "./travelCard.css";

export default function TravelCard({data}) {
  const { title, location, googleMapsUrl, date, description, imageUrl } = data;

  return (
    <div className="travel-card">
      <div className="card-info-wrapper">
        <div className="card-map">
          <i className="fa-solid fa-location-dot fa-xs"></i>
          <p className="location">{location}</p>
          <a href={googleMapsUrl} className="view-map-btn" target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{title}</h2>
        <h3 className="card-date">{date}</h3>
        <p className="card-description">{description}</p>
      </div>
      <img className="card-img" src={imageUrl} alt="" />
    </div>
  );
}
