import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import Details from '../../components/booking/Details.js';
import { MemoryRouter } from 'react-router-dom';

const goBack = jest.fn();
const submitData = jest.fn();

describe('Details', () => {
  test('should correctly render all fields and their default values', async () => {
    render(
      <MemoryRouter>
        <Details goBack={goBack} submitData={submitData} />
      </MemoryRouter>
    );

    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const emailAddressInput = screen.getByLabelText(/Email Address/);
    const submitButton = screen.getByTestId('submit-button');

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('id', 'firstName');
    expect(firstNameInput).toHaveValue('');

    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('id', 'lastName');
    expect(lastNameInput).toHaveValue('');

    expect(phoneNumberInput).toBeInTheDocument();
    expect(phoneNumberInput).toHaveAttribute('id', 'phoneNumber');
    expect(phoneNumberInput).toHaveValue('');

    expect(emailAddressInput).toBeInTheDocument();
    expect(emailAddressInput).toHaveAttribute('id', 'emailAddress');
    expect(emailAddressInput).toHaveValue('');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit form with valid values', async () => {
    render(
      <MemoryRouter>
        <Details goBack={goBack} submitData={submitData} />
      </MemoryRouter>
    );

    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const emailAddressInput = screen.getByLabelText(/Email Address/);

    fireEvent.change(firstNameInput, { target: { value: 'Prince' } });
    fireEvent.change(lastNameInput, { target: { value: 'Nelson' } });
    fireEvent.change(phoneNumberInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailAddressInput, {
      target: { value: 'prince@prince.com' },
    });

    const submitButton = screen.getByTestId('submit-button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(submitData).toHaveBeenCalledWith({
        emailAddress: 'prince@prince.com',
        firstName: 'Prince',
        lastName: 'Nelson',
        phoneNumber: '123-456-7890',
      });
    });
  });

  test('should NOT submit form without valid values', async () => {
    render(
      <MemoryRouter>
        <Details goBack={goBack} submitData={submitData} />
      </MemoryRouter>
    );

    const submitButton = screen.getByTestId('submit-button');
    await act(async () => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      expect(submitData).not.toHaveBeenCalled();
    });
  });
});
