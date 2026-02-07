import React from 'react';

interface HeaderProps {
  totalTasks: number;
  activeTasks: number;
}

export const Header: React.FC<HeaderProps> = ({ totalTasks, activeTasks }) => {
  return (
    <header className="header">
      <h1>📋 מנהל משימות</h1>
      <p>
        {totalTasks === 0 
          ? 'אין משימות כרגע, זה הזמן להוסיף אחת!' 
          : `נותרו ${activeTasks} משימות לביצוע מתוך ${totalTasks}`}
      </p>
    </header>
  );
};