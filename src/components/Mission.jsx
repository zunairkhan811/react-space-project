import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="all-missions">
      <h2>Missions</h2>
    </div>
  );
};

export default Mission;
