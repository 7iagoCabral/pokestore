import {Routes, Route, BrowserRouter} from 'react-router-dom';
import GlobalStyled from './global-styled';
import { theme } from './theme/theme'

import { Menu } from './components/Menu';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { CartContextProvide } from './contexts/CartContext';


function App() {
  return (
    
    <BrowserRouter>
      <GlobalStyled />
        <CartContextProvide>
            
              <Menu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>


        </CartContextProvide>
      
      

    </BrowserRouter>
  
  );
}

export default App;
