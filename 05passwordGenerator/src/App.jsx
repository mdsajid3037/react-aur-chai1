import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [charactor, setCharactor] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str +="0123456789";
    if (charactor) str +="!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, charactor, setPassword]);

  // useRef
  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charactor, setPassword]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto 
     shadow-md round-4lg px-4 py-8 text-orange-500  bg-gray-700
     "
      >
        <h1 className="text-white text-center text-lg">Password Generator</h1>
        <div
          className=" flex shadow rounded-lg
      overflow-hidden mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copypasswordToClipboard}
            className="outline-none  bg-blue-700 
           text-white px-3 py-0.5  shrink-0 opacity-35"
            >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onClick={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactor}
              id="charactorInput"
              onClick={() => {
                setCharactor((prev) => !prev);
              }}
            />
            <label htmlFor="charactorInput">Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;