import React from 'react';
import user from '../../image/user.png'
import './Activity.css'

const Activity = () => {
    return (
        <div>
            <div className='user_info'>
               <div className='user_img'>
               <img src={user} alt="" />
               </div>
               <div className='user_bio'>
               <h3>John Doe</h3>
                <p>Sydne,Australia</p>
               </div>
            </div>
            <div className='user_health'>
                <div className='health_info'>
                <h3>75kg</h3>
                <p>Weight</p>
                </div>
                <div className='health_info'>
                <h3>6.5</h3>
                <p>Height</p>
                </div>
                <div className='health_info'>
                <h3>25yrs</h3>
                <p>Age</p>
                </div>
            </div>
            

        </div>
    );
};

export default Activity;