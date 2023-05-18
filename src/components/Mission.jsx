/* eslint-disable operator-linebreak */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/mission/missionSlice';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (e) => {
    dispatch(joinMission(e.target.id));
  };

  return (
    <div className="all-missions">
      <table className="missions-table">
        <thead className="table-header">
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="dot">.</th>
          </tr>
        </thead>
        <tbody>
          {missions &&
            missions.map((mission) => (
              <tr key={mission.id} className="mission-row">
                <td className="mission-name">{mission.mission_name}</td>
                <td className="description">{mission.description}</td>
                <td>
                  {mission.reserved ? (
                    <button type="button" className="active-member">
                      Active Member
                    </button>
                  ) : (
                    <button type="button" className="not-amember">
                      NOT A MEMBER
                    </button>
                  )}
                </td>
                <td>
                  {mission.reserved ? (
                    <button
                      type="button"
                      className="leave-amission"
                      id={mission.id}
                      onClick={handleJoinMission}
                    >
                      LEAVE MISSION
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="join-amission"
                      id={mission.id}
                      onClick={handleJoinMission}
                    >
                      JOIN A MISSION
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
