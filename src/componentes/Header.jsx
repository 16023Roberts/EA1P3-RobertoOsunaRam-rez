import { Link } from "react-router-dom";
import "./header.css"
function Header()
{
    return(
        <header>
            <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/preguntas'>Preguntas</Link>
            <Link to='/productos'>Productos</Link>
            </nav>
            
            
        </header>
    )
}
export default Header;