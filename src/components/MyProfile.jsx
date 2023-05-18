import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.filter(
    (mission) => mission.reserved === true,
  ));

  return (
    <div className="my-profile">
      <div className="my-missions">
        <h2 className="missions-title">My Missions</h2>
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
      <div className="my-rockets" />
    </div>
  );
};

export default MyProfile;
