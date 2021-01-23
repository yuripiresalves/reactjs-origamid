import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar}{' '}
      <button onClick={() => global.AdicionarDois()}>Adicionar</button>{' '}
    </div>
  );
};

export default Produto;
