import { useEffect, useRef, useState } from 'react';

function UseRefStoreValueExample() {
  const [value, setValue] = useState('');
  const prevStateRef = useRef(value);
  const [arr, setArr] = useState([]);
  // const arr = [];

  useEffect(() => {
    prevStateRef.current = value;
    
  });

  useEffect(() => {
    
    setArr(prev => [...prev, value])
  }, [value]);



  const handleRollBack = () => {
    setValue(arr[arr.length - 2]);
  }


  return (
    <div>
      <h2>useRef - Memo Result</h2>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <p>Current value: {value}</p>
      <p>Prev value: {prevStateRef.current}</p>
      <button onClick={handleRollBack}>Set prev value</button>
    </div>
  );
}

export default UseRefStoreValueExample;
