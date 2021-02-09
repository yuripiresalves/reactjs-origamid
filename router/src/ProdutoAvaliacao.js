import React from 'react';
import { useParams } from 'react-router-dom';

const ProdutoAvaliacao = () => {
  const params = useParams();

  return (
    <div>
      <h2>{params.id} Avaliação</h2>
    </div>
  );
};

export default ProdutoAvaliacao;
