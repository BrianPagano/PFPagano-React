import { createContext, useState } from "react"

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, quantity) => {
        if (!isInCart (item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            setCart (cart.map ((prod)=>{
                if (prod.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod
                }
            }))
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    //funcion para limpiar el carrito completo (le vuelve a asignar un array vacio)
    const clearCart = () => {
        setCart ([])
    }

    //funcion para verificar si el producto agregado esta en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartQuantity = () => {
        const quantity = cart.reduce((acc, item) => acc + item.quantity, 0)
        return quantity > 0 ? quantity : ''
      }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0)
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}