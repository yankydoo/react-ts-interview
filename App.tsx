import * as React from 'react';
import { fetchMessage } from './api/MessagesApi';
import './style.css';

export default function App() {
  let x = 0
  return (
    <div>
      <h1>Hello you!</h1>
      <p>The x is {x}.</p>
      <button
        onClick={() => {
          x += 1;
        }}
      >
        Increase
      </button>
    </div>
  );
}
