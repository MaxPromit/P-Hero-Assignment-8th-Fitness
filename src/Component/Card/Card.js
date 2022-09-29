import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, time, img,text} = props.product;
    return (
        <div>
            <div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: {time}</h4>
                    <div onClick={()=>props.handleExerciseTime(props.product)} className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Card;