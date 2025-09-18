import React from "react";
import EmployeeList from "./EmployeeList";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "white" }}>Employee Details </h1>
      <EmployeeList />
    </div>
  );
}

export default App;
