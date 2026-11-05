import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";


function Preguntas(){

    const[mostrar, setMostrar]= useState(false)
    const[mensaje, setMensaje]= useState("")

    const[nombre, setNombre]=useState("")
    const[correo, setCorreo]=useState("")
    const[comentario, setComentario]=useState("")


    function cerrarMensaje(){
        setMostrar(false)
    }  

    function enviarForm(evento){
        evento.preventDefault();
        if( nombre.trim()=== "" || correo.trim()=== "" || comentario.trim()=== "" ){
            setMensaje("Complete todos los campos")
        } else{
            setMensaje("Se envió correctamente")
            limpiarFormulario()
        }

        setMostrar(true)
    }

    function limpiarFormulario()
    {
        setNombre("")
        setCorreo("")
        setComentario("")
    }

    return(
        <main>
        <h1>Preguntas</h1>
        <form onSubmit={enviarForm}>
            <label>Nombre: </label>
            <input
            type="text"
            value={nombre}
            onChange={(evento)=>setNombre(evento.target.value)}
            />
            <label>Correo: </label>
            <input
            type="text"
            value={correo}
            onChange={(evento)=>setCorreo(evento.target.value)}
            />
            <label>Comentario: </label>
            <textarea
            value={comentario}
            onChange={(evento)=> setComentario(evento.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
        

        {mostrar && (
            <Modal>
                <h2>Mensaje</h2>
                <p>{mensaje}</p>
                <Boton funcion={cerrarMensaje}>Aceptar</Boton>
            </Modal>
        )}
        </main>
    )
}
export default Preguntas;