import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  faSpinner,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Details({ submitData, goBack }) {
  const handleGoBack = (e) => {
    goBack();
  };

  return (
    <section>
      <h4>Details</h4>

      <div className='row'>
        <div className='five columns'>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              emailAddress: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = 'Required';
              }
              if (!values.lastName) {
                errors.lastName = 'Required';
              }

              if (!values.phoneNumber) {
                errors.phoneNumber = 'Required';
              }

              if (!values.emailAddress) {
                errors.emailAddress = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              submitData(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='firstName'>First Name</label>
                <Field
                  placeholder='First Name'
                  className='u-full-width'
                  type='text'
                  name='firstName'
                  id='firstName'
                />
                <ErrorMessage
                  className='form-error'
                  name='firstName'
                  component='div'
                />
                <label htmlFor='lastName'>Last Name</label>
                <Field
                  placeholder='Last Name'
                  className='u-full-width'
                  type='text'
                  name='lastName'
                  id='lastName'
                />
                <ErrorMessage
                  className='form-error'
                  name='lastName'
                  component='div'
                />
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field
                  placeholder='Phone Number'
                  className='u-full-width'
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                />
                <ErrorMessage
                  className='form-error'
                  name='phoneNumber'
                  component='div'
                />
                <label htmlFor='emailAddress'>Email Address</label>
                <Field
                  placeholder='Email Address'
                  className='u-full-width'
                  type='email'
                  name='emailAddress'
                  id='emailAddress'
                />
                <ErrorMessage
                  className='form-error'
                  name='emailAddress'
                  component='div'
                />
                <br /> <br />
                <button
                  onClick={handleGoBack}
                  type='button'
                  className='button mr-3 '
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <button
                  type='submit'
                  data-testid='submit-button'
                  className='button button-primary'
                  disabled={isSubmitting}
                >
                  Finish <FontAwesomeIcon icon={faArrowRight} />
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

export default Details;
