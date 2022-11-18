import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route to='/' element={<Home/>}/>
        <Route to='/register' element={<Register/>}/>
        <Route to='/login' element={<Login/>}/>
        <Route to='/dashboard' element={<Dashboard/>}>
          
        </Route>
        <Route to='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
