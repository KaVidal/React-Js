import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY"/>} />
        <Route path='/category/:id' element={<ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY"/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;

