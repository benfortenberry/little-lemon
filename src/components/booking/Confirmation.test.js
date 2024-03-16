import { within, render, screen } from '@testing-library/react';
import Confirmation from '../../components/booking/Confirmation.js';
import { MemoryRouter } from 'react-router-dom';

const reservationInfo = {
  date: '2021-12-12',
  guests: 1,
  time: '7:00 P.M.',
  occasion: 'Birthday',
  firstName: 'Prince',
  lastName: 'Nelson',
  phoneNumber: '123-456-7890',
  emailAddress: 'prince@prince.com',
};

describe('Confirmation', () => {
  test('should correctly render all fields and reservationInfo values', async () => {
    render(
      <MemoryRouter>
        <Confirmation reservationInfo={reservationInfo} />
      </MemoryRouter>
    );

    const { getByText } = within(screen.getByTestId('confirmation-text'));

    expect(getByText("We'll see you soon Prince!")).toBeInTheDocument();
    expect(
      getByText(
        'Table successfully booked for 12/11/2021 for 1 people at 7:00 P.M.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `Confirmation will be sent to 123-456-7890 and prince@prince.com`
      )
    ).toBeInTheDocument();
    expect(
      getByText(`We look forward to seeing you for your Birthday`)
    ).toBeInTheDocument();
  });
});
