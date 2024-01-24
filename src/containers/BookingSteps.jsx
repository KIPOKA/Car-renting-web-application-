import React from 'react';
import { FaMapMarkedAlt, FaCalendarAlt, FaCarAlt } from 'react-icons/fa';

function BookingSteps() {
    // Array of steps with their details
    const steps = [
        {
            id: 1,
            icon: <FaMapMarkedAlt />,
            name: 'Choose Location',
            description: 'Find the nearest for your pick up car.'
        },
        {
            id: 2,
            icon: <FaCalendarAlt />,
            name: 'Pick Up Date',
            description: 'Creating sustainable and modern infrastructure.'
        },
        {
            id: 3,
            icon: <FaCarAlt />,
            name: 'Book Your Car',
            description: 'Fostering partnerships for mutual growth and success.'
        }
    ];

    return (
        <>
            <div className='booking-text'>Our Working Steps </div>
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {/* Mapping through the steps array to render each step card */}
                {steps.map((step) => (
                    <div key={step.id} className='card-item'>
                        <div>
                            {/* Step icon with background */}
                            <div className='bg-[#E8F5E9] mb-4 w-20 h-20 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                                <div className='text-4xl text-secondary'>{step.icon}</div>
                            </div>
                            {/* Step name */}
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{step.name}</h4>
                            {/* Step description */}
                            <p className='text-sm text-neutralGrey'>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BookingSteps;
