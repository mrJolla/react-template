import { useState } from 'react';

import '../public/styles/mocks/app.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href='https://vitejs.dev'
          rel='noreferrer'
          target='_blank'
        >
          <img
            alt='Vite logo'
            className='logo'
            src='/imgs/vite.svg'
          />
        </a>
        <a
          href='https://react.dev'
          rel='noreferrer'
          target='_blank'
        >
          <img
            alt='React logo'
            className='logo react'
            src='/imgs/react.svg'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
