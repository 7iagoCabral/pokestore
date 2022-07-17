import {Routes, Route, BrowserRouter} from 'react-router-dom';
import GlobalStyled from './global-styled';
import { theme } from './theme/theme'

import Menu from './components/Menu';
import Home from './pages/home';
import Cart from './pages/cart';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyled />
                <Menu />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                  </Routes>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
