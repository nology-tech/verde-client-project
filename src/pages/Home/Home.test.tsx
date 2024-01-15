import { render } from '@testing-library/react';
import Home from './Home';


test('renders Home component', () => {
  const authorizationMock = () =>{}
  const setAuthMock = () =>{}

  render(<Home variant="light" authorization={authorizationMock} setAuth={setAuthMock} />);
});