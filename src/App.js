import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Layout/home';
import PlaceOrder from './pages/placeorder';
import Special from './pages/special';
import Food from './pages/food';
import { useSelector } from 'react-redux';

function App() {

  const routes=(<>
  <Route path='/' element={<Special/>}/>
  <Route path='/food' element={<Food/>}/>
  <Route path='/beverages' element={<Food/>}/>
  <Route path='/desserts' element={<Food/>}/>
  </>)
  return (
    <div className='App'>
      <Routes>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
    
        <Route path='/' element={<Home/>}>
          <Route>
            {routes}
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
