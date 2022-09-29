import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {time} = props
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className='extercise_info'>
            <div>
            <h4>ExerciseTime</h4>
            </div>
            <div>
            <h4>Time: {time}</h4>
            </div>
            </div>
        </div>
    );
};

export default Exercise;