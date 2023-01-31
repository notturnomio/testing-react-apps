import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorld = screen.getByText(/hello world/i, { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders text is not changed if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const textBeforeClick = screen.getByText("text is not changed", {
      exact: false,
    });
    expect(textBeforeClick).toBeInTheDocument();
  });

  test("renders text is changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const textAfterClick = screen.getByText("text is changed", {
      exact: false,
    });
    expect(textAfterClick).toBeInTheDocument();
  });

  test("does not render text is NOT changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const hiddenTextAfterClick = screen.queryByText("text is not changed", {
      exact: false,
    });
    // expect(hiddenTextAfterClick).not.toBeInTheDocument();
    expect(hiddenTextAfterClick).toBeNull();
  });
});
