import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Activity from './Component/Activity/Activity';
import Break from './Component/Break/Break';
import Breaktime from './Component/BreakTime/Breaktime';
import Card from './Component/Card/Card';
import Exercise from './Component/Exercise/Exercise';

function App() {

  const [products, setProducts] = useState([]);
  // const [time, setTime] = useState(0)
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

const handleExerciseTime = (selectedProduct) =>{
  // const selectProduct = selectedProduct.time;
}
  return (
    <div className='parent_header'>

    <div className='product_container'>
      <div className='product_container_title'>
          <h3>Fitness Freak</h3>
          <h4>Select Today's Exercise</h4>
      </div>
      <div className='card_parent'>
        {
          products.map(product => <Card key={product.id} product={product} handleExerciseTime={handleExerciseTime}></Card>)
        }
      </div>
    </div>
    <div className='activity_container'>
      <h3>Activity Info</h3>
      <Activity></Activity>
      <Break></Break>
      <Exercise></Exercise>
      <Breaktime></Breaktime>
      <div className='activity_btn'>
      <button>Activity Added</button>
      </div>
    </div>
    </div>
  );
}

export default App;
