
import './Item.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, cod,  rutaImagen, precio, stock}) => {

    return (
        <div className="card" >
        <picture>
         <img src={`/img/${rutaImagen}`} className="card-img-top" alt={nombre}/>
        </picture>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p>COD: {cod}</p>
            <p className='precioYCant'> 
                Precio:${precio} Cantidad:{stock}
            </p>
            <Link to={`/item/${id}`} className="btn btn2">
                 Ver detalle
            </Link> 
        </div>
    </div>
    )
}
      


export default Item