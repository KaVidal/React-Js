import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY" />
    </div>
  );
}

export default App;

