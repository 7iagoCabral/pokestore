import {Routes, Route, BrowserRouter} from 'react-router-dom';
import GlobalStyled from './global-styled';
import { theme } from './theme/theme'

import { Menu } from './components/Menu';
import { Home } from './pages/home';
import { Cart } from './pages/cart';


function App() {
  return (
    
    <BrowserRouter>
      <GlobalStyled />
      
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

      
      

    </BrowserRouter>
  
  );
}

export default App;
