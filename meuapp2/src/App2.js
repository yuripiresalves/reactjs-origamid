import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const isLogado = true;
const nome = 'Yuri';

const App2 = () => {
  return (
    <div>
      <Header logado={isLogado} nome={nome} />
      <Form />
      <Footer />
    </div>
  );
};

export default App2;
