import style from "./Booking.module.css";
import {useState} from "react";
import { format } from 'date-fns';

const current = new Date();
const today = format(current, 'yyyy-MM-dd');

const DateErrorMessage = () => {
    return (
        <p className="FieldError">Please choose the current date or a date in the future</p>
    );
}

function Booking() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dateReserve, setDateReserve] = useState({
        value: "",
        isTouched: false
    });
    const [timeReserve, setTimeReserve] = useState("11:00 AM");
    const [partyReserve, setPartyReserve] = useState("1 person");


 const getIsFormValid = () => {
   return (
        firstName &&
        lastName &&
        email &&
        dateReserve.value >= today &&
        timeReserve &&
        partyReserve
   );
 };

 const clearForm = () => {
   setFirstName("");
   setLastName("");
   setEmail("");
   setDateReserve({
    value: "",
    isTouched: false
   });
   setTimeReserve("11:00 AM");
   setPartyReserve("1 person");

 };

 const handleSubmit = (e) => {
   e.preventDefault();
   alert("Thanks "+firstName+"! You have reserved a table for "+partyReserve+ " on "+dateReserve.value+" at "+timeReserve); 
   clearForm();
 };

 return (
   <div className={style.Booking}>
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2>Make a reservation with Little Lemon!</h2>
         <div className="Field">
            <label>
                First name <sup>*</sup>
            </label>
            <input
                value={firstName}
                type="text"
                required
                onChange={(e) => {
                setFirstName(e.target.value);
                }}
                placeholder="First name"
            />
         </div>
         <div className="Field">
           <label>Last name <sup>*</sup></label>
           <input
             value={lastName}
             type="text"
             required
             onChange={(e) => {
               setLastName(e.target.value);
             }}
             placeholder="Last name"
           />
         </div>
         <div className="Field">
           <label>
             Email address <sup>*</sup>
           </label>
           <input
             value={email}
             type="email"
             required
             onChange={(e) => {
               setEmail(e.target.value);
             }}
             placeholder="Email address"
           />
         </div>
         <div className="Field">
           <label>
             Date <sup>*</sup>
           </label>
           <input
             value={dateReserve.value}
             type="date"
             required
             onChange={(e) => {
               setDateReserve({value: e.target.value, isTouched: true});
             }}
           />{dateReserve.isTouched && dateReserve.value < today ? (
                <DateErrorMessage />
                ) : null
            }
         </div>
         <div className="Field">
           <label>
             Time <sup>*</sup>
           </label>
           <select value={timeReserve} onChange={(e) => setTimeReserve(e.target.value)}>
             <option value="11:00 AM">11:00 AM</option>
             <option value="12:00 PM">12:00 PM</option>
             <option value="1:00 PM">1:00 PM</option>
             <option value="2:00 PM">2:00 PM</option>
             <option value="3:00 PM">3:00 PM</option>
             <option value="4:00 PM">4:00 PM</option>
             <option value="5:00 PM">5:00 PM</option>
             <option value="6:00 PM">6:00 PM</option>
             <option value="7:00 PM">7:00 PM</option>
             <option value="8:00 PM">8:00 PM</option>
           </select>
         </div>
         <div className="Field">
           <label>
             Party Size <sup>*</sup>
           </label>
           <select value={partyReserve} onChange={(e) => setPartyReserve(e.target.value)}>
             <option value="1 person">1 person</option>
             <option value="2 people">2 people</option>
             <option value="3 people">3 people</option>
             <option value="4 people">4 people</option>
             <option value="5 people">5 people</option>
             <option value="6 people or more">6 people or more</option>
           </select>
         </div>
         <button type="submit" disabled={!getIsFormValid()}>
           Make Reservation
         </button>
       </fieldset>
     </form>
   </div>
 );
}

export default Booking;