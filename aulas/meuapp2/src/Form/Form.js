import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form style={{ margin: '2rem 0' }}>
      <Input id="email" />
      <Input id="password" type="password" />
      <Button />
    </form>
  );
};

export default Form;
