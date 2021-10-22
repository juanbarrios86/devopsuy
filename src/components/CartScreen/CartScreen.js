import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)


    return (
        <div className="container my-5">

            {
                carrito.length === 0
                ? <>
                    <h2>No hay productos agregados</h2>
                    <Link to="/" className="btn btn-success">Ir a comprar</Link>

                 </>
                :
                    <>
                        <h2>Resumen de compra</h2>
                        <hr/>
                        <div>
                        <Table striped bordered hover variant="dark">
                        <thead>
                            <tr >
                            
                            <th>Art.</th>
                            <th>Cant.</th>
                            <th>Precio unitario</th>
                            <th>Total línea</th>
                            <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
    
  
  
                        {
                            carrito.map( (prod) => (
                                

                                    <tr key={prod.id}>
                                    <td>{prod.name}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.price * prod.cantidad}</td>
                                    <td><button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button></td>
                                    </tr>
                                    
                                    
                                
                            ))
                        }
                        </tbody>
                        </Table>    </div>    
                        <hr/>
                        <h3 className="my-3">Precio total: ${calcularTotal()}</h3>
                        <button
                            className="btn btn-danger"
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>
            } 

        </div>
    )
}
