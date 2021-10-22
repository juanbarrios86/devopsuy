import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';

function App() {
  

  return (
    <div className="App">
        
          
        <>
        <UIProvider>
        <CartProvider>
      <BrowserRouter>
        <Layout>
        <Switch>
          <Route exact path="/">
              <ItemListContainer mensaje="Cargando" />
          </Route>

          <Route exact path="/category/:categoryId">
              <ItemListContainer mensaje="Cargando" />
          </Route>

          <Route exact path="/item/:itemId">
              <ItemDetailContainer mensaje="Cargando" />
          </Route>

          
          <Route exact path="/cart">
              <CartScreen/>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          
        </Switch>
        </Layout>
      </BrowserRouter>
      </CartProvider>
      </UIProvider>
    </>
            
        

    </div>
  );
}

export default App;
