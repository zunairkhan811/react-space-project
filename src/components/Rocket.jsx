import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reserveRocket } from '../redux/rocket/rocketSlice';
import fetchRockets from '../redux/rocket/fetchAPi';

const Rockets = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!data.rockets.length) dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="card-container">
      {data.rockets.map((item) => (
        <div id={item.id} key={item.id} className="card-item">
          <div className="rocket-image">
            <img src={item.rocket_flickr_images} alt="rocketimg" />
          </div>
          <div className="rocket-info">
            <h1>{item.rocket_name}</h1>
            <p>
              <span><button type="button" className={!item.reserved ? 'c-reserve' : 'd-reserve'}>Reserved</button></span>
              {item.description}
            </p>
            <button type="button" className="reserve-btn" onClick={() => dispatch(reserveRocket(item.id))}>{!item.reserved ? 'Reserve Rocket' : 'Cancel Reservation'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
