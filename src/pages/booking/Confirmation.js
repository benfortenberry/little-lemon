
function Confirmation({reservationInfo}) {

  
  return (
    <section>
      <h4>We'll see you soon {reservationInfo.firstName}! </h4>
  <p></p>
    <p>  Table successfully booked for {reservationInfo.date} for {reservationInfo.guests} people at {reservationInfo.time}.</p>
     
     <p>Confirmation will be sent to {reservationInfo.phoneNumber} and {reservationInfo.emailAddress}</p>

   {reservationInfo.occasion && <p>We look forward to seeing you for your {reservationInfo.occasion}</p>
    }
    </section>
  );
}

export default Confirmation;
