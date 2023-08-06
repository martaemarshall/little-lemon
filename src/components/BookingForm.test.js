import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
    test("user gets descriptive alert once they submit form", () => {
        //render the component
        render(<BookingForm/>);

        //variable for button
        const btn = screen.getByRole("button");

        //click button
        fireEvent.click(btn);

        //test assumption
        expect(window.alert).toBeCalledWith
    })
    test("user cannot submit form if full email address is not entered", () => {
        const handleSubmit = jest.fn();
        const firstName = "Unit";
        const lastName = "Test";
        const email = "UnitTestEmail";
        const dateReserve = "2023-09-01";
        const timeReserve = "11:00 AM";
        const partyReserve = "2 people";

        render(<BookingForm onSubmit={handleSubmit} />);

        const btn = screen.getByRole("button");
        fireEvent.click(btn);

        expect(handleSubmit).not.toHaveBeenCalledWith({
            firstName,
            lastName,
            email,
            dateReserve,
            timeReserve,
            partyReserve
          });

    })
})