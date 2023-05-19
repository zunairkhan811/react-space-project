import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import { store } from '../redux/store';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <MyProfile />
        </Provider>

      </BrowserRouter>,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
