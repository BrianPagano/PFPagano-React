import './App.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './componentes/Cart/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './componentes/Checkout/Checkout'


function App() {
  return (   
    <div className='body'> 
      <BrowserRouter>
      <CartProvider>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
              <Route path='' element={<Home />}/>
              <Route path='/productos' element={<ItemListContainer titulo={'Nuestros Productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer titulo={'Nuestros Productos'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer titulo={'Detalle del producto'}/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={ <h1> Routes not Found </h1> }/>
          </Routes>
        </main>
        <footer>
             <p>
              todos los derechos reservados
            </p>
        </footer>
      </CartProvider>
      </BrowserRouter>   
    </div>
    )
}

export default App
