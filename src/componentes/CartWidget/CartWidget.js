import { useContext } from 'react'
import cart from './img/cart.svg'
import './style.css'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
     <div className='contenedorCarrito'>
       <img className="carrito" src={cart} alt="imagen del carrito de compra"/>
       <span className='contadorCarrito'>{cartQuantity()}</span>
    </div>
    )
}

export default CartWidget