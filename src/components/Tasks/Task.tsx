import React from 'react';
import { TaskType } from '../../types.ts';

interface TaskProps {
    task: TaskType;
    deleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, deleteTask }) => {
    return (
        <div className="task">
            <span>{task.text}</span>
            <button className="task-delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default Task;