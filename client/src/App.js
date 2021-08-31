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
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
      {data.length ?
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, i) => {
              return (
                <div>
                  <tr key={i}>
                    <td>{el.first_name}</td>
                    <td>{el.last_name}</td>
                    <td>{el.department}</td>
                    <td>{el.email}</td>
                  </tr>
                </div>)
            })}
          </tbody>
        </table>
        : null}
    </div>
  );
}

export default App;
