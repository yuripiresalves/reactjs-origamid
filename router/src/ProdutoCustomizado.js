import React from 'react';
import { useParams } from 'react-router-dom';

const ProdutoCustomizado = () => {
  const params = useParams();

  return (
    <div>
      <h2>{params.id} Customizado</h2>
    </div>
  );
};

export default ProdutoCustomizado;
