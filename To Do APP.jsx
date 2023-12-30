import React, { useState } from 'react';

const ToDoApp = () => {
  const [actionItem, setActionItem] = useState('');
  const [actionList, setActionList] = useState([]);

  const handleInputChange = (event) => {
    setActionItem(event.target.value);
  };

  const addActionItem = () => {
    if (actionItem.trim() !== '') {
      setActionList([...actionList, { text: actionItem, checked: false }]);
      setActionItem('');
    }
  };

  const deleteActionItem = (index) => {
    const updatedList = [...actionList];
    updatedList.splice(index, 1);
    setActionList(updatedList);
  };

  const toggleCheck = (index) => {
    const updatedList = [...actionList];
    updatedList[index].checked = !updatedList[index].checked;
    setActionList(updatedList);
  };

  return (
    <div>
      <h1>Girls To Code - TO-DO App</h1>
      <div>
        <input
          type="text"
          value={actionItem}
          onChange={handleInputChange}
          placeholder="Enter action item"
        />
        <button onClick={addActionItem}>Add</button>
      </div>
      <ul>
        {actionList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => deleteActionItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
