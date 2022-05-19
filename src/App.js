import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />   
          <Route path='/cart' element={<Cart /> } />   
        </Routes> 
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

