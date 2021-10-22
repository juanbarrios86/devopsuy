import React, { useContext } from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {
    
    const { calcularTotal,calcularCantidad } = useContext(CartContext)

    return (
        <div>
            <span>Articulos {calcularCantidad()} </span>
            <FaShoppingBasket className="mx-1"/>
            <span> ${calcularTotal()}</span>
        </div>
    )
}
