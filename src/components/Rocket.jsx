import { useSelector } from 'react-redux';
import { useState } from 'react';

const Rockets = () => {
  const [reserve, setReserve] = useState('Reserve Rocket');
  const data = useSelector((state) => state.rockets);
  console.log(data.rockets);
  return (
    <div className="card-container">
      {data.rockets.map((item) => (
        <div id={item.rocket_id} key={item.rocket_id} className="card-item">
          <div className="rocket-image">
            <img src={item.flickr_images[0]} alt="rocketimg" />
          </div>
          <div className="rocket-info">
            <h1>{item.rocket_name}</h1>
            <p>{item.description}</p>
            <button type="button">{reserve}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
