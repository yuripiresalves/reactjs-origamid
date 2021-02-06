import React from 'react';

const Radio = ({ pergunta, options, onChange, value, active, id }) => {
  if (!active) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            type="radio"
            id={id}
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
