import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";

function Inicio()
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
        <h1>Inicio</h1>
        <Boton funcion={mostrarModal}>Aceptar</Boton>

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
export default Inicio;