import React from 'react';
import './Breaktime.css'

const Breaktime = (props) => {
    return (
        <div className='breaktime'>
            <h4>BreakTime</h4>
            <h4>Time: {props.breaking}</h4>
        </div>
    );
};

export default Breaktime;