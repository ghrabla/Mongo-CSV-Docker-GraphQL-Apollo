import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navar';
import Footer from './components/footer';
import Table from './components/table';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Table/>
      <Footer/>
      

    </div>
  )
}

export default App
