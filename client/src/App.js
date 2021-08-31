import { useState } from "react";
import './App.css';


function App() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("http://localhost:5000").then(res => res.json()).then(json => {
      setData(json);
    });
  }
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      {data?.map((el, i) => {
        return (
          <div key={i}>
            <div>
              {el.first_name} {el.last_name}
            </div>
            <div>
              {el.department}
            </div>
            <div>
              {el.email}
            </div>
          </div>)
      })}
    </div>
  );
}

export default App;
