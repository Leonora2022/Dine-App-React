

import React from 'react'
import { useState, useRef } from 'react';
import { useId } from 'react'

export default function ReservationPage() {
    const [count, setCount] = useState(0);
    const [empty, setEmpty] = useState(true);
    const dayInput = useRef(null);
    const monthInput = useRef(null);
    const yearInput = useRef(null);
    const dateInput = useRef(null);



    const [details, setDetails] = useState({
        name: "",
        email: "",
        date: "",
        month: "",
        year: "",
        day: "",
        hour: "",
        mins: "",
        time: ""
    });

    function handlePlusClick() {
            return  setCount((preCount) => preCount + 1);
    }
    function handleMinusClick() {
        if (count > 0) {
            return  setCount((preCount) => preCount - 1);
        } 
    }

    function handleFormElement(e) {
        var {value, name} = e.target;
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (details.name !== null ) setEmpty(preState => !preState)
        if (details.email !== null)  setEmpty(preState => !preState)  
        if (details.date !== null)  setEmpty(preState => !preState)
        if (details.hour !== null)  setEmpty(preState => !preState)
        if (details.mins !== null ) setEmpty(preState => !preState)
        if (details.time !== null ) setEmpty(preState => !preState)
        
        if (details.date) {
           const date = dateInput.current.valueOf(details.date)
           const chosenDate = date.value.split("-");
           const [year, month, day] = chosenDate;
           details.year = year;
           details.month = month;
           details.day = day;
        }
    }

    const id = useId();
  return (
   <section className='reservation-page'>
    <div className="reservation-summary">
        <h2 className='reserve-title'>Reservations </h2>
        <p className='reserve-data'>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you. </p>
    </div>
    <div className="reservation-form">
        <form className="form" autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text"
             name="name"
              id={`${id}-name`}
               value={details.name}
                onChange={ handleFormElement} />
            <output htmlFor={`${id}-name`} className="name-out">
                {empty ? "Enter name" : null }
            </output>
            <label htmlFor={`${id}-email`} >Email</label>
            <input type="email"
             name="email"
              id={`${id}-email`}
              value={details.email} 
              onChange={ handleFormElement}/>
            <output htmlFor={`${id}-email`}>
                {empty ? "Enter email" : null }
            </output>
            <div className="date">
                <label htmlFor={`${id}-date`}>Pick a date
                <input type="date"
                 name="date"
                  id={`${id}-date`} 
                  value={details.date}
                  onChange={ handleFormElement} ref={dateInput}
                  />
                <output htmlFor={`${id}-date`} className="date-out">
                    { empty ? "Choose Date" : null  }
                </output>
                </label>
                <div className="display">
                <input type="text" name="month" 
                placeholder='MM' readOnly value={details.month} 
                 onChange={handleFormElement} ref={monthInput} />
                <input type="text" name="day"
                 placeholder='DD'readOnly value={details.day} onChange={handleFormElement}  ref={dayInput}/>
                <input type="text" name="year"
                 placeholder='YYYY' readOnly value={details.year} onChange={handleFormElement} ref={yearInput} /> 
                </div> 
            </div>
            <div className="time">
                <label htmlFor={`${id}-time`}>Pick a time</label>
                <input type="number" name="hour" id={`${id}-time`}
                 value={details.hour}  onChange={handleFormElement}  />
                <input type="number" name="mins" id={`${id}-time`}
                value={details.mins} onChange={handleFormElement}  />
                <select name="time" id={`${id}-time`}
                 value={details.time} onChange={handleFormElement} >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
                <output htmlFor={`${id}-time`} className="date-out">
                    { empty ? "Choose time" : null  }
                </output>
            </div>
            <div className="people">
                <p className='symbol' onClick={handleMinusClick}>{"-"}</p>
                <p><span className="count">{count}</span>People</p>
                <p className='symbol' onClick={handlePlusClick}>{"+"}</p>
            </div>
             
            <button type='submit' className='res-btn'>Make Reservation</button>
        </form>
    </div>
   </section>
  )
}
