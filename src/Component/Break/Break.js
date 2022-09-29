import React from 'react';
import './Break.css'

const Break = (props) => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break_container'>
            
                <h5 onClick={()=>props.breakBtnHandler(10)}>10s</h5>
                <h5 onClick={()=>props.breakBtnHandler(20)}>20s</h5>
                <h5 onClick={()=>props.breakBtnHandler(30)}>30s</h5>
                <h5 onClick={()=>props.breakBtnHandler(40)}>40s</h5>
             </div>

        </div>
    );
};

export default Break;