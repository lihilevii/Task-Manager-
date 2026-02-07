import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { FilterControl } from './components/FilterControl';
import { Task, FilterType } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem('my-tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  useEffect(() => {
    localStorage.setItem('my-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: text,
      isCompleted: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterType.ACTIVE) return !task.isCompleted;
    if (filter === FilterType.COMPLETED) return task.isCompleted;
    return true;
  });

  const activeCount = tasks.filter(t => !t.isCompleted).length;

  return (
    <div className="app-container">
      <div className="card">
        <Header 
          totalTasks={tasks.length} 
          activeTasks={activeCount} 
        />

        <TaskInput onAddTask={addTask} />

        <FilterControl 
          currentFilter={filter} 
          setFilter={setFilter} 
        />

        <TaskList 
          tasks={filteredTasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
};

export default App;