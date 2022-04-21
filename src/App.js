import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY"/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY"/>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />   
          <Route path='/cart' element={<Cart /> } />   
        </Routes> 
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

