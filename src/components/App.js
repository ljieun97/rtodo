import React from 'react';
import Home from './Home'
import './App.css'

function App() {
  return (
    <div>
      <Home />
      <footer className="footer">&copy; {new Date().getFullYear()} ljieun </footer>
    </div>
  )
}


export default App;
