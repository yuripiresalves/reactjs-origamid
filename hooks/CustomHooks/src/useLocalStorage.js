import React from 'react';

const useLocalStorage = (key, inicial) => {
  const [state, useState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, useState];
};

export default useLocalStorage;
