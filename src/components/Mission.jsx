import { useSelector } from 'react-redux';

const Mission = () => {
  const { missions } = useSelector((state) => state.missions);
  // console.log(missions);
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
          {missions
            && missions.map((mission) => (
              <tr key={mission.mission_id} className="mission-row">
                <td className="mission-name">{mission.mission_name}</td>
                <td className="description">{mission.description}</td>
                <td>
                  <button type="button" className="not-amember">NOT A MEMBER</button>
                </td>
                <td>
                  <button type="button" className="join-mission">
                    JOIN A MISSION
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
