import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';

import Navbar from './Components/Navbar';
import Insight from './Pages/Insight';
import NameConcept from './Pages/NameConcept';
import Presentation from './Pages/Presentation';
import Visual from './Pages/Visual';
import Start from './Pages/Start';
import Loader from './Components/Loader';



function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      
      <header className="header"/>
      
      <h1 className='App-title'>New Project –  Imagine group</h1>
      <h2 className='App-subtitle'>Go from a blank page to amazing idea with ai</h2>
      <Navbar/>
      {isLoading && <div className='position-absolute top-50 start-50 translate-middle"'><Loader/></div>}
      <div className='container'>
        {!isLoading && <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/insight" element={<Insight/>}/>
          <Route path="/nameconcept" element={<NameConcept/>}/>
          <Route path="/visual" element={<Visual/>}/>
          <Route path="/presentation" element={<Presentation/>}/>
        </Routes>}
      </div>
    </div>
  );
}

export default App;
