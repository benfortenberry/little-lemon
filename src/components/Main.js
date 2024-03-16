import { useReducer, useState } from 'react';
import Reservation from '../pages/booking/Reservation.js';
import Details from '../pages/booking/Details.js';
import Confirmation from '../pages/booking/Confirmation.js';
import { fetchAPI, submitAPI } from '../utils/fakeAPI.js';
import { useNavigate } from 'react-router-dom';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const Main = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [reservationInfo, setReservationInfo] = useState({ date: '', guests: 1, time: '', occasion: ''});

  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, []);

  const submitData = (formData) => {
    console.log(formData)
    setReservationInfo(
      {...reservationInfo, ...formData}
    );
   
    setActiveStep(activeStep + 1);
    console.log(activeStep, reservationInfo)
  };

  const goBack = () => {  
    setActiveStep(activeStep - 1);
  }


  return (
    <main>
      {activeStep === 0 && (
        <Reservation
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      )}

      {activeStep === 1 && <Details submitData={submitData} goBack={goBack}  />}

      {activeStep === 2 && <Confirmation reservationInfo={reservationInfo} goBack={goBack}  />}
    </main>
  );
};

export default Main;
