import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';
import { submitAPI } from '../utils/fakeAPI.js';
function Contact() {
  return (
    <section>
      <div className='row'>
        <div className='seven columns'>
          <h4>Contact</h4>
          <Formik
            initialValues={{ email: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.message) {
                errors.message = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                submitAPI(values);
                setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor='email-address'>Email</label>
                <Field
                  placeholder='Your Email'
                  className='u-full-width'
                  type='email'
                  name='email'
                  id='email-address'
                />
                <ErrorMessage className='form-error' name='email' component='div' />
                <label htmlFor='message'>Message</label>
                <Field
                  component='textarea'
                  rows='4'
                  className='u-full-width'
                  name='message'
                  id='message'
                />
                <ErrorMessage
                  className='form-error'
                  name='message'
                  component='div'
                />
                <button
                  type='submit'
                  className='button button-primary'
                  disabled={isSubmitting}
                >
                  Submit
                </button>{' '}
                &nbsp;
                {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
              </Form>
            )}
          </Formik>
        </div>
        <div className='five columns'>
          <img src='contact.jpg' alt='eating' className='u-max-full-width' />
        </div>
      </div>
    </section>
  );
}

export default Contact;
