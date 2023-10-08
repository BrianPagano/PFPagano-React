import './Cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clearCart, totalPrice} = useContext(CartContext)
        return (
            <div>
                {cart.length
                ? 
                <div>
                    <section className='alineadoCarrito'>
                        <p className='tituloCarrito'>Producto</p>
                        <p className='tituloCarrito'>Nombre</p>
                        <p className='tituloCarrito'>Precio</p>
                        <p className='tituloCarrito'>Cantidad</p>
                        <p className='tituloCarrito'>Subtotal</p>
                        <div className='contenedorTachito'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </div>
                    </section>
                    <hr className='tamañoLinea'></hr>
                    { cart.map (p => <CartItem key={p.id} {...p}/>)}
                    <hr className='tamañoLinea'></hr>
                    <div className='totalPrecio'>
                        <h3 className='totalTexto'> Total </h3>
                        <h3>&nbsp;</h3>
                        <h3>&nbsp;</h3>
                        <h3>&nbsp;</h3>
                        <h3 className='totalTexto'> ${totalPrice()} </h3>
                        <button className='cancelarCompra' onClick={() => clearCart()}> Cancelar Compra </button>
                    </div>
                    <div className='contenedorCheckout'>
                        <Link to='/checkout' className='checkout'> Iniciar Compra </Link>
                    </div>
                </div>
                :
                <div className='contenedorCarritoVacio'>
                    <h2 className='h2CarritoVacio'>Aun no has agregado productos en el carrito</h2>
                    <Link to='/productos' className='btn btn2'>Ir a Productos</Link> 
                </div> 
                } 
            </div>
        )
    }


export default Cart