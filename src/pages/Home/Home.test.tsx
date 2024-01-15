import { render } from '@testing-library/react';
import Home from './Home';


test('renders Home component', () => {
  const authorizationMock = jest.fn();
  const setAuthMock = jest.fn();

  render(<Home variant="light" authorization={authorizationMock} setAuth={setAuthMock} />);
});