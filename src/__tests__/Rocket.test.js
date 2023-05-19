import renderer from 'react-test-renderer';
import Rockets from '../components/Rocket';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store ={store}>
            <Rockets />
          </Provider>
           
        </BrowserRouter>
      
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
});