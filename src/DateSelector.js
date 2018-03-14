import React from 'react';

const DateSelector = ({url, dateChange}) => {
    return (
        <div>
            <input
            id="datePicker"
            type="date"
            onChange={dateChange}
            />
        </div>
    );
}

export default DateSelector;