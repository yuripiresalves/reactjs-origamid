import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState(['azul', 'vermelho']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <div>
      <h2>Cores</h2>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </div>
  );
};

export default App;
