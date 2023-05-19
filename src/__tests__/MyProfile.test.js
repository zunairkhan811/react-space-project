import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import { store } from '../redux/store';

it('Profile component renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
