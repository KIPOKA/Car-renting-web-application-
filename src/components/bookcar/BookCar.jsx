import React, { useState } from 'react';
import { FaCalendar, FaCaretUp, FaCaretDown } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
    position: absolute;
    max-width: 300px;
    max-height: 290px;
    top: 3em;
    left: 1em;
   
`;
const ReturnCalendarWrapper = styled.div`
    position: absolute;
    max-width: 300px;
    max-height: 290px;
    top: 3em;
    left: -4em;
   
`;

function BookCar() {
    const [startDate, setStartDate] = useState(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

    // Return date
    const [returnDate, setReturnDate] = useState(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen) {
            setReturnCalendarOpen(false);
        }
    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen) {
            setStartCalendarOpen(false);
        }
    };
 

    return (
        <div className="cardContainer">
            <div className="flex relative">
                <div className='calendar'>
                    <FaCalendar/>
                </div>
                <div className='text flex' onClick={toggleStartDateCalendar}>
                    Pick Up Date 
                    <div className='upanddown'>{isStartCalendarOpen ? <FaCaretUp/> : <FaCaretDown/> }</div>
                </div> 
                {isStartCalendarOpen && (
                    <CalendarWrapper>
                        <Calendar
                            value={startDate}
                            onChange={setStartDate} 
                        />
                    </CalendarWrapper>
                )}
            </div>
            <div className="seperator"></div>
            <div className="flex relative">
                <div className='calendar'>
                    <FaCalendar/>
                </div>
                <div className='text flex' onClick={toggleReturnDateCalendar}>
                    Return Date 
                    <div className='upanddown'>{isReturnCalendarOpen ? <FaCaretUp/> : <FaCaretDown/> }</div>
                </div>
                {isReturnCalendarOpen && (
                    <ReturnCalendarWrapper>
                        <Calendar
                            value={returnDate}
                            onChange={setReturnDate} 
                        />
                    </ReturnCalendarWrapper>
                )}
            </div>
            <button className='btn-tertiary'>
                Book Now
            </button>
        </div>
    );
}

export default BookCar;
