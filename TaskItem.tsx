import React, { useState, useRef, useEffect } from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editedText.trim()) {
      onEdit(task.id, editedText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditedText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      {/* Checkbox */}
      <button 
        onClick={() => onToggle(task.id)}
        className={`checkbox-btn ${task.isCompleted ? 'checked' : ''}`}
        aria-label="Toggle completion"
      >
        {task.isCompleted && <span style={{ fontSize: '12px' }}>✓</span>}
      </button>

      {/* Content */}
      <div className="task-content">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="edit-input"
          />
        ) : (
          <span 
            className="task-text"
            onClick={() => onToggle(task.id)}
            style={{ cursor: 'pointer', display: 'block', width: '100%' }}
          >
            {task.text}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="actions">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="icon-btn"
          title="ערוך"
        >
          {isEditing ? '💾' : '✏️'}
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          className="icon-btn delete"
          title="מחק"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};