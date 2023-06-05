import { render, screen } from "@testing-library/react";
import { formatDate } from "./utils/helperFunctions";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const dateString = "2023-06-02";
    const expectedFormattedDate = "06/02/2023";

    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe(expectedFormattedDate);
  });

  it("should return the original date string if an invalid date is passed", () => {
    const dateString = "Invalid Date";

    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe(dateString);
  });

  it("should render the formatted date in the component", () => {
    const dateString = "2023-06-02";
    const expectedFormattedDate = "06/02/2023";

    render(<div>{formatDate(dateString)}</div>);
    const formattedDateElement = screen.getByText(expectedFormattedDate);

    expect(formattedDateElement).toBeInTheDocument();
  });
});
