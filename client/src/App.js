import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/AppNavbar'
import ShoppingList from './Components/ShoppingList'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
