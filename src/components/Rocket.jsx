import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reserveRocket } from '../redux/rocket/rocketSlice';
import fetchRockets from '../redux/rocket/fetchAPi';

const Rockets = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  //   console.log(data.rockets);
  return (
    <div className="card-container">
      {data.rockets.map((item) => (
        <div id={item.rocket_id} key={item.rocket_id} className="card-item">
          <div className="rocket-image">
            <img src={item.flickr_images[0]} alt="rocketimg" />
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
