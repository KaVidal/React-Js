import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <ItemListContainer greeting="PRÓXIMAMENTE TODOS LOS PRODUCTOS DE VEGANNDY" /> */}
      {<ItemDetailContainer></ItemDetailContainer>}
    </div>
  );
}

export default App;

