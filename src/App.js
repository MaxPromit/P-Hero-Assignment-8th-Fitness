import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Activity from './Component/Activity/Activity';
import Blog from './Component/Blog/Blog';
import Break from './Component/Break/Break';
import Breaktime from './Component/BreakTime/Breaktime';
import Card from './Component/Card/Card';
import Exercise from './Component/Exercise/Exercise';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [products, setProducts] = useState([]);
  const [time, setTime] = useState(0);
  const [breaking,setBreaking] = useState(0);

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  useEffect(()=>{
    const localStorageItem = localStorage.getItem('time');
    setBreaking(localStorageItem)
  },[])

const handleExerciseTime = (selectedProduct) =>{
  const selectProduct = selectedProduct.time;
  setTime(time+selectProduct)

}
const breakBtnHandler = (secondValue) =>{
  setBreaking(secondValue);
  localStorage.setItem('time',secondValue)
}
const notify =()=>{
  toast('Wow You Did It')
}
return (
    <div className='parent_header'>

    <div className='product_container'>
      <div className='product_container_title'>
          <h3>Fitness Freak</h3>
         <div className='todays_exercise'>
         <h4>Select Today's Exercise</h4>
         </div>
      </div>
      <div className='card_parent'>
        {
          products.map(product => <Card key={product.id} product={product} handleExerciseTime={handleExerciseTime}></Card>)
        }
      </div>
      <Blog></Blog>
    </div>
    <div className='activity_container'>
      <h3>Activity Info</h3>
      <Activity></Activity>
      <Break breakBtnHandler={breakBtnHandler}></Break>
      <Exercise time={time}></Exercise>
      <Breaktime breaking={breaking}></Breaktime>
      <div className='activity_btn'>
      <button onClick={notify}>Activity Added</button>
      <ToastContainer />
      </div>
    </div>
    </div>
  );
}

export default App;
