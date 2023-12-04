import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWork } from '../features/todo/todoSlice';

const UpdateTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState('');

  const handleUpdate = () => {
    // Dispatch the updateWork action with the new text
    dispatch(updateWork({ id: todo.id, newText }));
    setNewText('')
  };

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleUpdate}>
        Update Todo
      </button>
    </div>
  );
}

export default UpdateTodo;
