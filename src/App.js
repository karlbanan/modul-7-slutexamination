import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Menu from './components/Menu'
import Cart from './components/Cart'
import Order from './components/Order'
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Splash/> } exact />
        <Route path="/menu/" element={ <Menu /> } />
        <Route path="/cart/" element={ <Cart /> } />
        <Route path="/order/" element={ <Order /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>      
    </div>
  );
}

export default App;
