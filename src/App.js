import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Layout/home';
import React from 'react';
const  PlaceOrder=React.lazy(()=>import("./pages/placeorder"))
const Special =React.lazy(()=>import( './pages/special'));
const Food =React.lazy(()=>import( './pages/food'));

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
