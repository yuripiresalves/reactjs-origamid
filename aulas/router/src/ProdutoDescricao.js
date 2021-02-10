import React from 'react';
import { useParams } from 'react-router-dom';

const ProdutoDescricao = () => {
  const params = useParams();

  return (
    <div>
      <h2>{params.id} Descrição</h2>
    </div>
  );
};

export default ProdutoDescricao;
