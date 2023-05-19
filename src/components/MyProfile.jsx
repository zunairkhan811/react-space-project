import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.filter(
    (mission) => mission.reserved === true,
  ));
  return (
    <>
      <div className="profile-container">
        <div className="my-profile">
          <div className="my-missions">
            <h1 className="missions-title">My Missions</h1>
            <table className="missions-table">
              <tbody>
                {missions && missions.map((mission) => (
                  <tr key={mission.id}>
                    <td>{mission.mission_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rocket-container">
          <h1>My Rockets</h1>
          <ul className="rockets-lists">
            {data.rockets
              .filter((item) => item.reserved)
              .map((item) => (

                <li key={item.id}>{item.rocket_name}</li>

              ))}
          </ul>
        </div>
      </div>

    </>

  );
};

export default MyProfile;
