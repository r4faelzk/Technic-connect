import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Servico, Contato, Orcamento, Home, Cadastro, Login} from './components/pages';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servico' element={<Servico />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/orcamento' element={<Orcamento />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
