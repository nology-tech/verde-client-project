import { screen } from "@testing-library/react";
import Home from "./Home";

import { customRender } from "../../utils/testUtils";

it("should render the form", () => {
  customRender(<Home />);

  const main = screen.getByRole("main");

  expect(main).toBeInTheDocument();
});
