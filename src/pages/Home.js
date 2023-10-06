import './Home.css'
import '../font/fontello.css'

const Home = () => {
    return (
        <main>
        <div className="portada-inicio">
            <div className="contenedor">
                <div className="portada-transparente">
                    <div className="contenedor-texto">
                        <h1 className="tituloh1">No te pierdas de lo nuevo</h1>
                        <p className="parrafoHome">¡Encontrá todo lo que buscás para tu negocio!</p>
                        <p className="icon-whatsapp parrafoHome">+541130646142</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
		<a className="btn-wsp" href="https://wa.me/+5491130646142" target="_blank" rel="noreferrer"> <i className="icon-whatsapp" ></i></a>
        <h2 className="tituloh2">ENVÍO DEL PEDIDO</h2>
        <p className="parrafo">Como norma general, los pedidos se envían aproximadamente dentro de las 24/48 horas siguientes a la recepción del pago y el envio del comprobante. El expreso mayormente es elegido por el cliente, pero en caso de no tener acceso a ninguno, podemos brindarle diferentes opciones. Hacemos todo lo posible para proteger todos los artículos frágiles cerrados con presinto a calor y faja inviolable, con todos nuestros datos.</p>
	    </main>
    )
}

export default Home