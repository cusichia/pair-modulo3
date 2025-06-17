import './/styles/App.css';
import './/styles/index.css';
import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import List from './components/List.jsx';

function App() {
  
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];

  return (
  
    <>
    <Header></Header>
    <Main></Main>
    <List tasks = {tasks} ></List> 

    </>
  )
}

export default App
