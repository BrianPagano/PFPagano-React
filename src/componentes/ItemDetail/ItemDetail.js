import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, cod, nombre, rutaImagen, rutaImagen2, descripcion, precio, stock}) => {
    const [quantityAdded, setquantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setquantityAdded (quantity)

        const item = {
            id, rutaImagen,  nombre, precio 
        }

        addItem(item, quantity)
    }

    return (
        <section className='DetalleProducto' >
            <div id="carouselExampleIndicators" className="carousel slide carousel-dark">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={`/img/${rutaImagen}`} className="d-block imgDetalle" alt={nombre}/>
                </div>
                <div className="carousel-item">
                <img src={`/img/${rutaImagen2}`} className="d-block imgDetalle" alt={nombre}/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='detalles'>
                <h2 className='mb-3'> {cod} - {nombre}</h2>
                <p>
                    {descripcion} 
                </p>
                <p className='precio'>
                     Precio: ${precio}
                </p>
            {
                quantityAdded > 0 ? (
                    <div>
                        <Link to='/productos' className='btn btn2 botonCarritoYContinuar'> Continuar Comprando </Link>
                        <Link to='/cart' className='btn btn2'> ir al Carrito </Link>
                    </div>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            </div>
      </section>
    )
}
      
export default ItemDetail
