import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchMovies from './SearchMovies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <h1 className='title'>Movie Search App</h1>
      <SearchMovies />
    </div>
  </React.StrictMode>
);
