import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import './App.css';

function App() {
  const [id, setId] = useState({});
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home id={id} setId={setId} />} />
        <Route exact path="/posts" element={<Posts id={id} />} />
        <Route exact path="*" />
      </Routes>
    </Router>
  );
}

export default App;
