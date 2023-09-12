import './App.css';
import Cardcontainer from './Cardcontainer';
import Navbar from './Navbar';
import "./style.css";
import Whatsd from './Whatsd';


function App() {
  return (
    <div>
      <Navbar/>
      <div className="row">
         <div className='col-sm-5'>
             <img className='fgh' src= "./pics/image33.png"/>
             <h1 className="abc"> Principal Portal </h1>
              <input type="text" class="form-control" />
         </div>
         <div className='col-sm-5'>
           <Cardcontainer/>
         </div>
      </div>
      <Whatsd />
      
      
    </div>
  );
}

export default App;
