function Boton({funcion, children})
{
    return(
        <button onClick={funcion}>{children}</button>
    );
}
export default Boton;