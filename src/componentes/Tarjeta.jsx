import "./tarjeta.css"
function Tarjeta({imagen, titulo, descripcion, children}){

    return(

        <div className="tarjeta">
            <img className="imagenTarjeta"
            src={imagen}
            alt={titulo}
            />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            {children}
        </div>
    );
}
export default Tarjeta