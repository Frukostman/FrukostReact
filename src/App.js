import Navbar from './components/navbar/Index';
import Home from './containers/home/Home';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

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

              <Route exact path="/:type?">
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

            </Switch>
            <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>

    
  );
}

export default App;
