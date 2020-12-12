import { shallow} from 'enzyme';
import Login from '../../pages/login'
import toJson from "enzyme-to-json";

it('renders correctly', () => {
  const wrapper = shallow(<Login />);
  expect(toJson(wrapper)).toMatchSnapshot();
});