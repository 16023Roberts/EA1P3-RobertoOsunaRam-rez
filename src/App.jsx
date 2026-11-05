import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Preguntas from './pages/Preguntas'
import Header from './componentes/Header'
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/preguntas' element={<Preguntas/>}/>
      <Route path='/productos' element={<Productos/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
