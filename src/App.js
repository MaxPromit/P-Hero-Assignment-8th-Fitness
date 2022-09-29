import './App.css';
import Activity from './Component/Activity/Activity';
import Break from './Component/Break/Break';
import Card from './Component/Card/Card';

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
    </div>
    </div>
  );
}

export default App;
