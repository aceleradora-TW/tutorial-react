import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Components/Navbar"
import { Contact } from "./Components/Contact"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact name="Bárbara"/>}/>
      </Routes>
    </div>
  );
}

function Home() {
  return <h1>Home page</h1>;
}

export default App;
