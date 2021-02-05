import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [fruta, setFruta] = React.useState('');
  const [linguagem, setLinguagem] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'C', 'Python']}
        value={linguagem}
        setValue={setLinguagem}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Banana', 'Maçã', 'Laranja']}
        value={fruta}
        setValue={setFruta}
      />
      <Select
        options={['Smartphone', 'Notebook', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="E-mail" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
