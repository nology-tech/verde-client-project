import { render } from '@testing-library/react';
import Home from './Home';


test('renders Home component', () => {
  const authorizationMock = () =>{
    console.log("I am test");
  }
  const setAuthMock = () =>{
    console.log("I am test");

  }

  render(<Home variant="light" authorization={authorizationMock} setAuth={setAuthMock} />);
});