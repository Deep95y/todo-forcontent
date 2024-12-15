import React, { useState } from "react";
import ComponentOne from "./comp1";

const App = () => {
  const [addtext, setAddtext] = useState("");
  const [textlist, setTextlist] = useState([]);

  const handleAdd = (value) => {
    setAddtext(value);
  };

  const handleClick = () => {
    if (addtext.trim() !== "") {
      setTextlist((prev) => [...prev, addtext]);
      setAddtext(""); // Clear input after adding
    }
  };

  const handleEdit = (updatedList) => {
    setTextlist(updatedList); // Update state when tasks are edited
  };

  return (
    <>
      <div
        style={{
          height: "20rem",
          width: "25rem",
          border: "1px solid #ccc",
          background: "lightpink",
          display: "flex",
          flexDirection: "column",
          margin:'auto',
          marginTop:'7rem',
          
        }}
      >
        <div
          style={{ height: "2rem", width: "16rem", borderBottom: "1px solid #ccc",marginLeft:'8rem',marginTop:'1rem',fontSize:'2rem',color:'blueviolet' }}
        >
          To-Do List
        </div>
        <div>
          <input
            type="text"
            placeholder="Add text here..."
            style={{
              height: "2rem",
              width: "21rem",
              border: "none",
              borderRadius: "0.3rem",
              marginTop:'2rem',
              marginLeft:'1.8rem'
            }}
            onChange={(e) => handleAdd(e.target.value)}
            value={addtext}
          />
        </div>
        <div>
          <button type="submit" onClick={handleClick} style={{height:'2rem',width:'5rem',borderRadius:'0.2rem',border:'none',marginLeft:'1.8rem',marginTop:'0.5rem'}}>
            Add
          </button>
        </div>

        {/* Render task list */}
        <div style={{marginLeft:'2rem'}}>
          <ComponentOne textlist={textlist} onEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};

export default App;
