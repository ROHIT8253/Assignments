import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const loginRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLoginForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "#333",
          color: "white",
        }}
      >
       
        <div style={{ fontWeight: "bold" }}>My Conditional Rendering Website</div>

        
        <div>
          <a href="#home" style={{ margin: "0 15px", color: "white" }}>
            Home
          </a>
          <a href="#about" style={{ margin: "0 15px", color: "white" }}>
            About Us
          </a>
          <a href="#contact" style={{ margin: "0 15px", color: "white" }}>
            Contact Us
          </a>
        </div>

        
        <div style={{ position: "relative" }} ref={loginRef}>
          <button onClick={() => setShowLoginForm(!showLoginForm)}>
            {showLoginForm ? "Close" : "Login"}
          </button>

          
          {showLoginForm && (
            <div
              style={{
                position: "absolute",
                top: "100%", 
                right: 0,
                marginTop: "10px",
                padding: "20px",
                width: "250px",
                background: "white",
                color: "black",
                border: "1px solid #ccc",
                borderRadius: "8px",
                zIndex: 1000,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Login</h4>
              <form>
                <div style={{ marginBottom: "10px" }}>
                  <input
                    type="text"
                    placeholder="Username"
                    style={{ width: "100%", padding: "8px" }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <input
                    type="password"
                    placeholder="Password"
                    style={{ width: "100%", padding: "8px" }}
                  />
                </div>
                <button type="button" style={{ width: "100%", padding: "8px" }}>
                  Submit
                </button>
              </form>

              
              <button
                onClick={() => setShowLoginForm(false)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "8px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
