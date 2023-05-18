import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.rockets);
  return (
    <div className="profile-container">
      <h1>My Rockets</h1>
      <ul className="rockets-lists">
        {data.rockets
          .filter((item) => item.reserved)
          .map((item) => (

            <li key={item.id}>{item.rocket_name}</li>

          ))}
      </ul>

    </div>
  );
};

export default MyProfile;
