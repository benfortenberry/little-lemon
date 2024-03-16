import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

function Reservation({ availableTimes, dispatchOnDateChange, submitData }) {
  const handleDateChange = (e) => {
    dispatchOnDateChange(e.target.value);
  };

  return (
    <section>
      <h4>Reservation</h4>

      <div className='row'>
        <div className='five columns'>
          <Formik
            initialValues={{ date: '', guests: 1, time: '', occasion: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.guests) {
                errors.email = 'Required';
              }
              if (!values.date) {
                errors.date = 'Required';
              }

              if (!values.time) {
                errors.time = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                submitData(values);
              }, 2000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='guests'># Guests</label>
                <Field
                  name='guests'
                  component='select'
                  className='u-full-width'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                </Field>
                <ErrorMessage
                  className='form-error'
                  name='guests'
                  component='div'
                />
                <label htmlFor='date'>Date</label>
                <Field
                  placeholder='Choose a Date'
                  className='u-full-width'
                  type='date'
                  name='date'
                  onBlur={handleDateChange}
                />
                <ErrorMessage
                  className='form-error'
                  name='date'
                  component='div'
                />
                <label htmlFor='time'>Time</label>
                <Field name='time' component='select' className='u-full-width'>
                  <option> Select a time</option>
                  {availableTimes.map((times) => (
                    <option data-testid='booking-time-option' key={times}>
                      {times}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className='form-error'
                  name='time'
                  component='div'
                />
                <label htmlFor='occasion'>
                  Special Occasion (<small>optional)</small>
                </label>
                <Field
                  name='occasion'
                  component='select'
                  className='u-full-width'
                >
                  <option value=''></option>
                  <option value='birthday'>Birthday</option>
                  <option value='anniversary'>Anniversary</option>
                </Field>
                <ErrorMessage
                  className='form-error'
                  name='occasion'
                  component='div'
                />
                <br /> <br />
                <Link className='button mr-3' to={`/`}>
                  Cancel
                </Link>
                <button
                  type='submit'
                  className='button button-primary'
                  disabled={isSubmitting}
                >
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </button>{' '}
                &nbsp;
                {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
