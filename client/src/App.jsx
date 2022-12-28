import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navar';
import Footer from './components/footer';
import Table from './components/table';
import Login from './pages/Login'
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="dashboard" element={<Table/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
