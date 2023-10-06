import './Category.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Category = () => {
    const [activeButton, setActiveButton] = useState (null)

      // Función para manejar el clic en el botón
const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }
  return (
    <div className="contenedorCategorias">
        <NavLink to={`/category/descorchador`} onClick={() => handleButtonClick('descorchador')}>
            <button className={`c-button c-button--gooey ${activeButton === 'descorchador' ? 'active' : ''}`} // Aplica la clase "active" si el botón está activo
             >
                {" "}
                Descorchador
                <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
                </div>
            </button>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="goo">
                    <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
                </defs>
            </svg>
        </NavLink>
        <NavLink to={`/category/oxigenador`} onClick={() => handleButtonClick('oxigenador')}>
            <button className={`c-button c-button--gooey ${activeButton === 'oxigenador' ? 'active' : ''}`} // Aplica la clase "active" si el botón está activo
             >
                {" "}
                Oxigenador
                <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
                </div>
            </button>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="goo">
                    <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
                </defs>
            </svg>
        </NavLink>
        <NavLink to={`/category/corta plomo`} onClick={() => handleButtonClick('corta plomo')}>
            <button className={`c-button c-button--gooey ${activeButton === 'corta plomo' ? 'active' : ''}`} // Aplica la clase "active" si el botón está activo
             >
                {" "}
                Corta Plomo
                <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
                </div>
            </button>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="goo">
                    <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
                </defs>
            </svg>
        </NavLink>
    </div>
  )
}

export default Category
