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
        </div>
    );
};

export default Activity;