import { useState } from 'react'

function Main() {
  const [contador, setContador] = useState(0); //let contador = 0;

  const handleClickAdd = () => {
    setContador(contador + 1)
  }
  const handleClickSubtract = () => {
    setContador(contador - 1)
  }
  const handleClickReset = () => {
    setContador(0)
  }

  // Ejercicio 2
  const [message, setMessage] = useState('Tienes activado el Light Mode');

  const handleClickMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('darkMode');
    if (message == 'Tienes activado el Light Mode') {
      setMessage('Tienes activado el Dark Mode');
    } else {
      setMessage('Tienes activado el Light Mode');
    }
  }



  return (
<>
      <div>
        <p>Contador: {contador}</p>
        <button onClick={handleClickAdd}>Incrementar</button>
        <button onClick={handleClickSubtract}>Restar</button>
        <button onClick={handleClickReset}>Reset</button>
      </div>

      <div>
        <button onClick={handleClickMode}>Des/activar Dark Mode</button>
        <p>{message}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quam sunt officiis nobis enim amet unde earum voluptas perferendis, quo laborum ea eos incidunt voluptates laboriosam iusto. Nobis, placeat quidem?</p>
      </div>

</>
  );
}
export default Main;