import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",   
      }}
    >
      <Navbar />

     
      <main
        style={{
          flex: 1,   
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          backgroundColor: "#E6E6FA",
        }}
      >
        This is my personal project
      </main>

      <Footer />
    </div>
  );
}

export default App;
