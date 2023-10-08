import { CartContext } from "../../context/CartContext"
import "./Checkout.css"
import { useContext, useState } from "react"
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'
import Swal from "sweetalert2"



const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const {cart, totalPrice, clearCart } = useContext(CartContext)
    const [orderId, setOrderid] = useState('')


    const datosComprador = (e) => {
        setUser ({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const FinalizarCompra = (e) => {
        e.preventDefault()
        if (!user.nombre || !user.telefono || !user.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completar todos los campos para avanzar',
              })
        } else {
            let order = {
                user,
                items:cart,
                total:totalPrice(),
                date:serverTimestamp()
            }
            const ventas = collection (db, "orders")
            addDoc (ventas,order)
            .then ((res) => {
                setOrderid(res.id)
                clearCart()
            })
            .catch ((err) => console.log(err))
        }
    }
    return (
      <div>
        {orderId !== ''
        ? <div>
            <h2 className="center">Gracias por su compra, ¡su orden fue generada con éxito!</h2>
            <h4 className="center">Su numero de orden es: {orderId}</h4>
        </div>
        : <form onSubmit={FinalizarCompra}>
        <h3 className="tituloTerminar row justify-content-center fw-bold mt-5"> Terminar Compra </h3>
        <h5 className="tituloCompletarDatos row justify-content-center mb-4"> Por favor completar sus datos </h5>
        <div className="mb-3 row justify-content-center">
            <label className="form-label row justify-content-center fw-bold">
            Nombre completo
            </label>
            <input
            type="text"
            className="form-control w-25 row justify-content-center"
            name="nombre"
            onChange={datosComprador}
            />
        </div>
        <div className="mb-3 row justify-content-center">
            <label className="form-label row justify-content-center fw-bold">
            Número de telefono
            </label>
            <input
            type="number"
            className="form-control w-25 row justify-content-center"
            name="telefono"
            onChange={datosComprador}
            />
        </div>
        <div className="mb-4 row justify-content-center">
            <label className="form-label row justify-content-center fw-bold">
            Direccion de Email
            </label>
            <input
            type="email"
            className="form-control w-25 row justify-content-center"
            aria-describedby="emailHelp"
            name="email"
            onChange={datosComprador}
            />
        </div>
        <div className="mb-4 row justify-content-center">
            <label className="form-label row justify-content-center fw-bold">
            Repita su Email
            </label>
            <input
            type="email"
            className="form-control w-25 row justify-content-center"
            aria-describedby="emailHelp"
            name="email"
            onChange={((e) => setValidateEmail(e.target.value))}
            />
        </div>
        <div className="contenedorBoton">
        <button type="submit" disabled={validateEmail !== user.email } className="btn btn-success widthBoton">
            Finalizar Compra
        </button>
        </div>
        </form>   
         }
      </div> 
     )
}

export default Checkout
