import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'



export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return (
        <div>
            <h2 className="my-2">{name}</h2>
            <img width="400px" height="400px" src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
            {/* opción de compra / contador */}

            { isInCart(id) 
                ? <Link to="/cart" className="btn btn-primary">Terminar mi compra</Link>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <button
                            className="btn btn-primary my-1"
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
            }

            <hr/>
            <button 
                className="btn btn-primary my-4"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button 
                className="btn btn-primary mx-2"
                onClick={() => push("/")}
            >
                Volver al inicio
            </button>
        </div>
    )
}
