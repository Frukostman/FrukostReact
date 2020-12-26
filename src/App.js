import Navbar from './components/navbar/Index';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'

import Home from './containers/home/Home';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Checkout from '../src/containers/Checkout/Checkout'

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { AppProvider } from './context/useAppContext';


function App() {
  return (
    <div>
      <AppProvider>

        <BrowserRouter>
        
            <Navbar />
            <Switch>

              <Route exact path='/shopping-cart'>
                <Cart />
              </Route>

              <Route exact path='/checkout'>
                <Checkout />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path='/tipo/:cat'>
                <Home />
              </Route>

              <Route exact path='/estacion/:sea'>
                <Home />
              </Route>

              <Route exact path='/detalles/:id'>
                <ItemDetailContainer />
              </Route>

              <Route path='/:otro?'>
                <Error />
              </Route>

            </Switch>
            <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>

    
  );
}

export default App;
