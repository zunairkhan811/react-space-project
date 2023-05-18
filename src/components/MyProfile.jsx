import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/mission/missionSlice';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.filter(
    (mission) => mission.reserved === true,
  ));
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);

  console.log(missions.reserved);
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
