import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Info from './components/info/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
