import './App.css';
import { useState } from "react";
import Employee from './Employee';

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("Dev");
  return (
    <div className="App bg-red-30 text-left">
      <input type="text"
        onChange={(e) => setRole(e.target.value)}
      />
      <br></br>
      { showEmployee ? (
      <>
        <Employee name="Edrian" role="Developer"/>
        <Employee name="Alma" role="Recruiter"/>
        <Employee name="Maki" role={role}/>
      </>
      ) : <p>No employee</p>
      }
    </div>
  );
}

export default App;