import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ComponentOne = ({ textlist, onEdit }) => {
  const [newlist, setNewlist] = useState(textlist);

  useEffect(() => {
    setNewlist(textlist); // Sync with parent component
  }, [textlist]);

  const handleDelete = (id) => {
    setNewlist(newlist.filter((_, i) => i !== id)); // Update local state
    onEdit(newlist.filter((_, i) => i !== id)); // Update parent state
  };

  const handleEdit = (index, value) => {
    const updatedList = newlist.map((item, i) => (i === index ? value : item));
    setNewlist(updatedList); // Update local state
    onEdit(updatedList); // Update parent state
  };

  return (
    <>
      {newlist.map((element, index) => (
        <TaskItem
          key={index}
          element={element}
          onDelete={() => handleDelete(index)}
          onEdit={(value) => handleEdit(index, value)}
        />
      ))}
    </>
  );
};

const TaskItem = ({ element, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(element);

  const handleSave = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "2rem",
        background: "lightpink",
        margin: "5px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          style={{ width: "70%",}}
        />
      ) : (
        <div style={{color:'blueviolet'}}>{element}</div>
      )}
      <div
        onClick={onDelete}
        style={{ cursor: "pointer", color: "red", marginLeft: "13rem" }}
      >
         <FaTrashAlt />
      </div>
      <div
        onClick={() => setIsEditing(!isEditing)}
        style={{ cursor: "pointer", color: "blue",positio:'absolute',marginRight:'1.2rem' }}
      >
        {isEditing ? "X" : <FaEdit />}
      </div>
    </div>
  );
};

export default ComponentOne;
