import { useState } from 'react'


export default function Home() {
  const [inp, setInp] = useState({});
  const inputChange = (e) => {
    console.log(e);
    setInp(e.target.value);
  }
  const callApi = async () => {
    const resp = await fetch("http://localhost:3000/api/hello");
    const data = await resp.json();
    setInp(data);
  };
  return (
    <div>
      <input type="text" name="inp" onChange={inputChange} />
      <input type="button" value="Call API" onClick={callApi} />
      <pre>{JSON.stringify(inp, null, 1)}</pre>
    </div>
  )
}
