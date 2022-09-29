import './App.css';
import Activity from './Component/Activity/Activity';
import Break from './Component/Break/Break';
import Breaktime from './Component/BreakTime/Breaktime';
import Card from './Component/Card/Card';
import Exercise from './Component/Exercise/Exercise';

function App() {
  return (
    <div className='parent_header'>
    <div className='product_container'>
      <div className='product_container_title'>
          <h3>Fitness Freak</h3>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
    <div className='activity_container'>
      <h3>Activity Info</h3>
      <Activity></Activity>
      <Break></Break>
      <Exercise></Exercise>
      <Breaktime></Breaktime>
    </div>
    </div>
  );
}

export default App;
