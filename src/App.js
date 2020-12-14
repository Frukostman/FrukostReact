import Header from './containers/header/Index';
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
        
            <Header />
            <Navbar />
            <Switch>

              <Route exact path='/tag'>
                <Cart />
              </Route>

              <Route exact path="/:type?">
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
