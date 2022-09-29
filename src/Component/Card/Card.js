import React from 'react';
import './Card.css'
import boxing from'../../image/boxing.png'
import cycle from '../../image/cycle.png'
import dumble from '../../image/dumble.png'
import pushup from '../../image/pushup.png'
import rope from '../../image/rope.png'
import ropejump from '../../image/ropejump.png'


const Card = () => {
    return (
        <div>
            <h3>Select Today's Exercise</h3>
            <div className='card_parent'>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={boxing} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>Boxing</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={cycle} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>Cycleing</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={dumble} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>Dumble</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={pushup} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>PushUp</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={ropejump} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>RopeShaker</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
                 <div className='single_card'>
                    <div className='card_img'>
                        <img src={rope} alt="" />
                    </div>
                    <div className='card_info'>
                    <h3>RopeClimbing</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolor a non eligendi accusamus ullam unde animi iusto ipsa reiciendis?</p>
                    <h4>For Age: 20-30</h4>
                    <h4>Time Requard: 30s</h4>
                    <div className='btn_card'>
                        <button>Add To List</button>
                    </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Card;