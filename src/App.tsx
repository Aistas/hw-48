import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './components/Tasks/AddTaskForm';
import Task from './components/Tasks/Task';
import {TaskType} from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {id: '1', text: 'Task 1'},
    {id: '2', text: 'Task 2'},
    {id: '3', text: 'Task 3'},
  ]);

  const [currentTask, setCurrentTask] = useState<string>('');

  const addTask = () => {
    if (currentTask.trim() !== '') {
      const newTask: TaskType = {
        id: Date.now().toString(),
        text: currentTask,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
      <div className="app">
        <AddTaskForm
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            addTask={addTask}
        />
        <div className="task-list">
          {tasks.map(task => (
              <Task key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
  );
};

export default App;
