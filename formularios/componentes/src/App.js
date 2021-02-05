import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="E-mail" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
