import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import Contact from '../pages/Contact';
import * as submitAPI from '../utils/fakeAPI.js';

const jsonSpy = jest.spyOn(submitAPI, 'submitAPI');

describe('Contact', () => {
  test('should correctly render all fields and their default values', async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/Email/);
    const messageInput = screen.getByLabelText(/Message/);
    const submitButton = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('id', 'email-address');
    expect(emailInput).toHaveValue('');

    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveAttribute('id', 'message');
    expect(messageInput).toHaveValue('');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit form with valid values', async () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/Email/);
    const messageInput = screen.getByLabelText(/Message/);

    fireEvent.change(emailInput, { target: { value: 'little@teapot.org' } });
    fireEvent.change(messageInput, { target: { value: 'Short and stout' } });

    const submitButton = screen.getByRole('button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(jsonSpy).toHaveBeenCalledWith({
        email: 'little@teapot.org',
        message: 'Short and stout',
      });
    });
  });

  test('should NOT submit form without valid values', async () => {
    render(<Contact />);

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      expect(jsonSpy).not.toHaveBeenCalled();
    });
  });
});
