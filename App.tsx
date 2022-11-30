import * as React from 'react';
import { fetchMessage } from './api/MessagesApi';
import './style.css';

export default function App() {
  const [x, setX] = React.useState(0);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const abortController = new AbortController();
    fetchMessage(x, abortController).then((message) => {
      setMessage(message);
    });
    return () => abortController.abort();
  }, [x]);

  return (
    <div>
      <h1>Hello Florian!</h1>
      <p>The x is {x}.</p>
      <p>My message is {message}</p>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}
