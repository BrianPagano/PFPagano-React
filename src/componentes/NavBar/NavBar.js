import logo from './img/logo.png'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to='/'>
              <img className="logo" src={logo} alt="logo de VinoMania"/>
            </Link>
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse gap-2" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto gap-2 fs-5">
              <Link className="nav-link link-light text-center animacion-menu" to='/'>Home</Link>
                <Link className="nav-link link-light text-center animacion-menu" to='/productos'>Productos</Link>
              </div>
              <Link className='carrito text-center' to='/cart'>             
                <CartWidget/>
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default Navbar