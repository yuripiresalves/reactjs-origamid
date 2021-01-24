import React from 'react';
import Produto from './Produto';
import Limpar from './Limpar';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
