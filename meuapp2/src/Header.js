import React from 'react';

const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem-vindo, {nome}</header>;
  } else {
    return <header>Cabeçalho</header>;
  }
};

export default Header;
