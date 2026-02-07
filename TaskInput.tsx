import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="מה צריך לעשות היום?..."
        className="task-input"
      />
      <button 
        type="submit"
        disabled={!inputValue.trim()}
        className="btn-add"
      >
        הוסף
      </button>
    </form>
  );
};