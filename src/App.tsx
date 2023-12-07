import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hola')
      .then(response => response.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{mensaje}</p>
      </header>
    </div>
  );
}

export default App;
