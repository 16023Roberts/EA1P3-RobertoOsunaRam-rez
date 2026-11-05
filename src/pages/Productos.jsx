import Tarjeta from "../componentes/Tarjeta";
import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";
function Productos()
{
    const[mostrar, setMostrar]= useState(false)

    function cerrarModal(){
        setMostrar(false)
    }
    function mostrarModal(){
        setMostrar(true)
    }
    return(
        <main>
            <h1>Productos</h1>
            <Tarjeta 
                imagen="/src/img/ham.jpg"
                titulo="Hamburgesa"
                descripcion="Incluye papas y chesco"
            >
                <Boton funcion={mostrarModal}>Aceptar</Boton>
            </Tarjeta>
            <Tarjeta 
                imagen="/src/img/ham.jpg"
                titulo="Hamburgesa"
                descripcion="Incluye papas y chesco"
            >
                <Boton funcion={mostrarModal}>Aceptar</Boton>
            </Tarjeta>
            <Tarjeta 
                imagen="/src/img/ham.jpg"
                titulo="Hamburgesa"
                descripcion="Incluye papas y chesco"
            >
                <Boton funcion={mostrarModal}>Aceptar</Boton>
            </Tarjeta>
            {mostrar && (
            <Modal>
                <h2>¡Listo!</h2>
                <p>Tu mensaje fue enviado</p>
                <Boton funcion={cerrarModal}>Aceptar</Boton>
            </Modal>
        )}
        </main>
    )
}
export default Productos;