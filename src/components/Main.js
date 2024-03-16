import { useReducer, useState, useEffect } from 'react';
import Reservation from '../pages/booking/Reservation.js';
import Details from '../pages/booking/Details.js';
import Confirmation from '../pages/booking/Confirmation.js';
import { fetchAPI, submitAPI } from '../utils/fakeAPI.js';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const Main = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [reservationInfo, setReservationInfo] = useState({
    date: '',
    guests: 1,
    time: '',
    occasion: '',
  });

  useEffect(() => {
    const postData = reservationInfo;
    if (activeStep === 2) {
      submitAPI(postData);
      console.log(postData);
    }
  });

  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, []);

  const submitData = (formData) => {
    setReservationInfo({ ...reservationInfo, ...formData });

    setActiveStep(activeStep + 1);
  };

  const goBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <main>
      {activeStep === 0 && (
        <Reservation
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      )}

      {activeStep === 1 && <Details submitData={submitData} goBack={goBack} />}

      {activeStep === 2 && (
        <Confirmation reservationInfo={reservationInfo} goBack={goBack} />
      )}
    </main>
  );
};

export default Main;
