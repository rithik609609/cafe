import './App.css';
import Card from './component/Card';
import Banner from './pages/banner';
import Header from "./pages/header"

function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
