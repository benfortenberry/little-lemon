import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import Reservation from '../../components/booking/Reservation.js';
import { MemoryRouter } from 'react-router-dom';

const availableTimes = ['7:00 P.M.', '7:30 P.M.'];
const today = new Date().toISOString().split('T')[0];
const dispatchOnDateChange = jest.fn();
const submitData = jest.fn();

describe('Reservation', () => {
  test('should correctly render all fields and their default values', async () => {
    render(
      <MemoryRouter>
        <Reservation
          availableTimes={availableTimes}
          submitData={submitData}
          dispatchOnDateChange={dispatchOnDateChange}
        />
      </MemoryRouter>
    );

    const guestsSelect = screen.getByLabelText(/# Guests/);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByRole('button');

    expect(guestsSelect).toBeInTheDocument();
    expect(guestsSelect).toHaveAttribute('id', 'guests');
    expect(guestsSelect).toHaveValue('1');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveValue('');

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeSelect).toHaveValue('Select a time');

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toHaveValue('');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit form with valid values', async () => {
    render(
      <MemoryRouter>
        <Reservation
          availableTimes={availableTimes}
          submitData={submitData}
          dispatchOnDateChange={dispatchOnDateChange}
        />
      </MemoryRouter>
    );

    const guestsSelect = screen.getByLabelText(/# Guests/);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);

    fireEvent.change(guestsSelect, { target: { value: '5' } });
    fireEvent.change(dateInput, { target: { value: today } });
    fireEvent.change(timeSelect, { target: { value: '7:00 P.M.' } });

    const submitButton = screen.getByRole('button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(submitData).toHaveBeenCalledWith({
        date: '2024-03-16',
        guests: '5',
        occasion: '',
        time: '7:00 P.M.',
      });
    });
  });

  test('should NOT submit form without valid values', async () => {
    render(
      <MemoryRouter>
        <Reservation
          availableTimes={availableTimes}
          submitData={submitData}
          dispatchOnDateChange={dispatchOnDateChange}
        />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      expect(submitData).not.toHaveBeenCalled();
    });
  });
});
