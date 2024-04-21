import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0);
  let className = {
    sajid: "sajid",
    age: 23,
  };
  let newArr = [1, 4, 33, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl  mb-4">
        Tailwind test
      </h1>
      <Card sajid="cahiaurcode" btnText="click me" />
      <Card sajid="sajid_sulaiman" btnText="visit me" />
      {/* <App/> */}
    </>
  );
}

export default App;
